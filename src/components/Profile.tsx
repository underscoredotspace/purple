import { faCrown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card } from "components"
import { env } from "helpers"
import React, { useState } from "react"
import { Member, Role } from "types"
import { Pill } from "./primitives"

interface ProfileProps {
    member: Member
    highestRole: Role
}

const colours = {
    "568141992794783749": "staff",
    "546342033867014165": "admin",
    "549644467498516508": "mod",
    "568174092977700866": "admissions", //admissions
    "fake-events-role": "red-300", // events 😉
    "572443602773344276": "sessionmaker", //session maker,
    "594361392090316811": "blue-200", //gta-ps
    "952965992466767883": "blue-200", //gta-ps5
    "594361443239985152": "green-200", //gta-xb
    "952966466473431061": "green-200", //gta-xb-xs
    "760089861822087178": "blue-200", //rdo-ps
    "764203700092534846": "green-200", //rdo-xb
    "930785647671799838": "yellow-200",  //pc
    "930820341532598292": "yellow-200",  //rdo-pc
}

const rolesToShow: string[] = [
    "fake-events-role", // events 😉
    "930785647671799838",  //pc
    "930820341532598292",  //rdo-pc
    "594361392090316811", //gta-ps
    "952965992466767883", //gta-ps5
    "594361443239985152", //gta-xb
    "952966466473431061", //gta-xb-xs
    "760089861822087178", //rdo-ps
    "764203700092534846", //rdo-xb
]

function filterRoles(role: Role): boolean {
    return rolesToShow.includes(role.id)
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

    const colour = colours[highestRole.id]

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
                        {member?.profile?.name || member.displayName}
                    </div>
                    <div className="text-gray-500 text-sm">
                        {member?.profile?.location}
                    </div>
                </div>
            </div>

            {member?.profile?.bio && (
                <>
                    <hr className="border-gray-700" />

                    <div className="flex flex-col px-4 py-2 space-y-2">
                        {member.profile.bio.split("\n").map((p, i) => (
                            <p key={`bio-${member.id}-p${i}`}>{p}</p>
                        ))}
                    </div>
                </>
            )}

            <hr className="border-gray-700" />

            <div
                className={[
                    "flex",
                    "flex-row",
                    "flex-wrap",
                    // "justify-center",
                    "px-4",
                    "pt-2",
                ].join(" ")}
            >
                {member?.roles?.filter(filterRoles).sort((a, b) => b.position - a.position).map((role) => (
                    <Pill
                        className={`mr-2 mb-2 bg-${
                            colours[role.id] ?? "copy"
                        } bg-opacity-80`}
                        text={role.name}
                        key={`role-${member.id}-${role.id}`}
                    />
                ))}
            </div>
        </Card>
    )
}
