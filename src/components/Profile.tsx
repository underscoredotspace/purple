import { faCrown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card } from "components"
import { env } from "helpers"
import React, { useState } from "react"
import { Member, Role } from "types"

interface ProfileProps {
    member: Member
    highestRole: Role
}

const colours = {
    16748308: "staff",
    26623: "admin",
    63488: "mod",
}

type ProfileComponent = React.FC<ProfileProps>

export const Profile: ProfileComponent = ({ member, highestRole }) => {
    const avatarURL = `https://cdn.discordapp.com/avatars/${member.id}/${
        member.avatar
    }.${member.avatar.startsWith("a_") ? "gif" : "png"}?size=128`

    const [avatarPath, setAvatarPath] = useState(
        member?.profile?.picture
            ? `${env.ASSETS}/profiles/${member.profile.picture}`
            : avatarURL
    )

    const colour = colours[highestRole.color]

    return (
        <Card>
            <div
                className={[
                    "border-b-4",
                    `border-${colour}`,
                    "border-opacity-50",
                    "w-full",
                    "font-bold",
                    "uppercase",
                    "tracking-widest",
                    "py-1",
                    "flex flex-row items-baseline justify-center",
                ].join(" ")}
            >
                {highestRole.name}
                {member.id === "468237949142827008" && (
                    <FontAwesomeIcon
                        icon={faCrown}
                        className="text-yellow-400 ml-1"
                    />
                )}
            </div>
            <div className="flex flex-col px-4 py-2">
                <img
                    className={[
                        "rounded-squircle",
                        "w-20",
                        "h-20",
                        "mt-1",
                        "mx-auto",
                        "border-2",
                        "border-opacity-50",
                        `border-${colour}`,
                    ].join(" ")}
                    src={avatarPath}
                    alt={member?.profile?.name ?? member.displayName}
                    onError={() =>
                        setAvatarPath(`${env.ASSETS}/profiles/claude.png`)
                    }
                />

                <div className="mx-auto pt-2 text-center">
                    <div className="font-bold">
                        {member?.profile?.name ?? member.displayName}
                    </div>
                    <div className="text-gray-500 text-sm">
                        {member?.profile?.location}
                    </div>
                </div>
            </div>

            {member?.profile?.bio && (
                <>
                    <hr className="border-gray-700" />

                    <div className="flex flex-col px-4 py-2">
                        {member.profile.bio.split("\n").map((p, i) => (
                            <p key={`bio-${member.id}-p${i}`}>{p}</p>
                        ))}
                    </div>
                </>
            )}

            <hr className="border-gray-700" />

            {/* <div classNames={["flex", "flex-row", "flex-wrap", "px-4", "pt-2"]}>
                {other.map(role => (
                    <Pill
                        classNames={["mr-2", "mb-2", ""]}
                        bgColor={role.color}
                        textColor="card"
                        text={role.text}
                        key={`role-${name}-${role.text}`}
                    />
                ))}
            </div> */}
        </Card>
    )
}
