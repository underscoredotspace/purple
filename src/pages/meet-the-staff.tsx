import { SectionTitle } from "components/primitives"
import { Profile, ProfileProps, ROLES } from "components/Profile"
import { getStaffProfiles, Role, StaffProfile } from "helpers/api"
import React, { Fragment, useEffect, useState } from "react"

const ProfileRow: React.FC<{ profiles: ProfileProps[] }> = ({ profiles }) => (
    <div
        className={[
            "grid",
            "grid-cols-profile",
            "gap-4",
            "items-start",
            "justify-center",
        ].join(" ")}
    >
        {profiles.map((profile) => (
            <Profile {...profile} key={`profile-${profile.name}`} />
        ))}
    </div>
)

type ProfileRows = Record<Role["name"], StaffProfile[]>

const MeetTheStaff: React.FC = () => {
    const [profileRows, setProfileRows] = useState<ProfileRows>()
    const roles = [ROLES["Admin"], ROLES["Mod"], ROLES["Staff"]]

    useEffect(() => {
        getStaffProfiles()
            .then((rawProfiles) => {
                if (rawProfiles.length === 0) {
                    return
                }

                const mapped = rawProfiles.reduce((mappedProfiles, profile) => {
                    const highestRole = profile.roles.reduce(
                        (highest, role) => {
                            if (!highest || role.position > highest.position) {
                                return role
                            }
                            return highest
                        }
                    ).name

                    // add member to correct ProfileRow
                    if (!mappedProfiles[highestRole]) {
                        mappedProfiles[highestRole] = []
                    }

                    mappedProfiles[highestRole].push(profile)

                    return mappedProfiles
                }, {} as ProfileRows)

                mapped["Admin"] = mapped["Admin"].reverse()

                setProfileRows(mapped)
            })
            .catch((error) => {
                console.error(error)
                setProfileRows(undefined)
            })
    }, [])

    if (!profileRows) return null

    return (
        <>
            {roles.map((role, index, array) => {
                const row = profileRows[role.key]

                const profiles: ProfileProps[] = row.map((profile) => ({
                    id: profile.id,
                    name: profile.name || profile.username,
                    mainRole: role.key,
                    otherRoles: [],
                    bio: profile.bio,
                    location: profile.location,
                    picture: profile.picture,
                    avatar: profile.avatar,
                }))

                return (
                    <Fragment key={`profile-row-${index}`}>
                        <div className="mb-4">
                            <SectionTitle>{role.text}</SectionTitle>
                            <p>{role.description}</p>
                        </div>
                        <ProfileRow profiles={profiles} />

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
