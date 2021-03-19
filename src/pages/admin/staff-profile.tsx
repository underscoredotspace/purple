import { Profile } from "components/Profile"
import { getProfile, saveProfile } from "helpers/api"
import { useRouter } from "next/router"
import NotFound from "pages/404"
import React, { useContext, useEffect, useState } from "react"
import { SiteContext } from "store"
import { Member } from "types"

type HandleChange = (field: string, value: string) => void

interface StaffProfileFieldProps {
    field: string
    value: string
    onChange: HandleChange
}

const getHighestRole = (member: Member) =>
    member?.roles.sort((a, b) => b.position - a.position)[0]

const StaffProfile: React.FC = () => {
    const { state } = useContext(SiteContext)
    const [member, setMember] = useState<Member>()
    const { push } = useRouter()

    if (!state.user) {
        return <NotFound />
    }

    useEffect(() => {
        if (!state.user?.userid) {
            return
        }

        getProfile(state.user.userid).then((m) => {
            const memberWithProfile = {
                ...m,
                profile: {
                    ...(m.profile ?? {
                        id: m.id,
                        name: null,
                        location: null,
                        bio: null,
                    }),
                },
            }
            setMember(memberWithProfile)
        })
    }, [state.user])

    const handleChange: HandleChange = (field, value) =>
        setMember((member) => ({
            ...member,
            profile: {
                ...member.profile,
                [field]: value,
            },
        }))

    const handleSubmit = () =>
        saveProfile(member.profile).then(() => {
            alert("profile updated!")
            push("/")
        })

    return member ? (
        <div
            className={[
                "grid",
                "grid-cols-profile",
                "gap-4",
                "items-start",
                "justify-center",
            ].join(" ")}
        >
            <form
                className="flex flex-col space-y-2 w-full"
                onSubmit={(e) => {
                    handleSubmit()
                    e.preventDefault()
                }}
            >
                {Object.entries(member.profile).map(([field, value]) => (
                    <StaffProfileField
                        field={field}
                        value={value}
                        key={`staff-profile-field-${field}`}
                        onChange={handleChange}
                    />
                ))}

                <input
                    className="bg-card border border-solid border-background px-2 py-1"
                    type="submit"
                    value="Save"
                />
            </form>

            <Profile
                member={member}
                highestRole={getHighestRole(member)}
                key={`profile-${member.id}`}
            />
        </div>
    ) : null
}

const StaffProfileField: React.FC<StaffProfileFieldProps> = ({
    field,
    value,
    onChange,
}) => (
    <div
        className={`flex flex-col ${
            ["id", "picture"].includes(field) ? "hidden" : ""
        }`}
    >
        <label
            htmlFor={`staff-profile-field-${field}`}
            className="p-1 text-sm uppercase text-discord"
        >
            {field}
        </label>
        {field === "bio" ? (
            <textarea
                className="h-36 bg-card border border-background px-2 py-1"
                name={field}
                id={`staff-profile-field-${field}`}
                value={value}
                onChange={(e) => onChange(field, e.target.value)}
            />
        ) : (
            <input
                className="bg-card border border-background px-2 py-1"
                type="text"
                name={field}
                id={`staff-profile-field-${field}`}
                value={value}
                onChange={(e) => onChange(field, e.target.value)}
            />
        )}
    </div>
)

export default StaffProfile
