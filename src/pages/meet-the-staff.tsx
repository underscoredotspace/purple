import { SectionTitle } from "components/primitives"
import { Profile } from "components/Profile"
import { getStaffProfiles } from "helpers/api"
import React, { Fragment, useEffect, useState } from "react"
import { Role } from "types"

const Profiles: React.FC<{ role: Role }> = ({ role }) => (
    <div
        className={[
            "grid",
            "grid-cols-profile",
            "gap-4",
            "items-start",
            "justify-center",
        ].join(" ")}
    >
        {role.members.map((member) => (
            <Profile
                member={member}
                highestRole={role}
                key={`profile-${member.id}`}
            />
        ))}
    </div>
)

const descriptions: Record<string, string> = {
    "568141992794783749":
        "The first point of call for disputes between crew members. They monitor Discord and lobbies, and resolve conflicts within crew.",
    "549644467498516508":
        "Monitor Discord and lobbies, enforce the rules, and have the ability to ban/mute/kick. They are second in command to the Admin.",

    "546342033867014165":
        "The top of the hierarchy, they make the rules once agreed upon with the staff, maintain the Discord server, and the Reddit page. Crew members should come to them if they have any issues, feedback for staff members or anything crew related.",
}

const MeetTheStaff: React.FC = () => {
    const [profileRows, setProfileRows] = useState<Role[]>()

    useEffect(() => {
        getStaffProfiles()
            .then(setProfileRows)
            .catch((error) => {
                console.error(error)
                setProfileRows(undefined)
            })
    }, [])

    if (!profileRows) return null

    return (
        <>
            {profileRows.map((role, index, array) => {
                return (
                    <Fragment key={`profile-row-${index}`}>
                        <div className="mb-4">
                            <SectionTitle>{role.name}</SectionTitle>
                            <p>{descriptions[role.id]}</p>
                        </div>
                        <Profiles role={role} />

                        {index !== array.length - 1 ? (
                            <hr className="my-4 border-gray-700" />
                        ) : null}
                    </Fragment>
                )
            })}
        </>
    )
}

export default MeetTheStaff
