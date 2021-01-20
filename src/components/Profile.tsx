import { faCrown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card } from "components"
import { env } from "helpers"
import React, { useState } from "react"

export interface RoleType {
    key: string
    color: string
    text: string
    plural?: string
    description?: string
}

export const ROLES: Record<string, RoleType> = {
    Staff: {
        key: "Staff",
        color: "staff",
        text: "Staff",
        description:
            "The first point of call for disputes between crew members. They monitor Discord and lobbies, and resolve conflicts within crew.",
    },
    Mod: {
        key: "Mod",
        color: "mod",
        text: "Moderator",
        plural: "Mods",
        description:
            "Monitor Discord and lobbies, enforce the rules, and have the ability to ban/mute/kick. They are second in command to the Admin.",
    },
    ps: { key: "", color: "ps", text: "PS" },
    xb: { key: "", color: "xb", text: "Xbox" },
    admissions: { key: "", color: "admissions", text: "Admissions" },
    events: { key: "", color: "events", text: "Events" },
    Admin: {
        key: "Admin",
        color: "admin",
        text: "Admin",
        description:
            "The top of the hierarchy, they make the rules once agreed upon with the staff, maintain the Discord server, and the Reddit page. Crew members should come to them if they have any issues, feedback for staff members or anything crew related.",
    },
    sessionMaker: { key: "", color: "sessionmaker", text: "Session Maker" },
}

export enum Role {
    staff = "staff",
    mod = "mod",
    ps = "ps",
    xb = "xb",
    admissions = "admissions",
    events = "events",
    admin = "admin",
    sessionMaker = "sessionMaker",
}

export interface ProfileProps {
    id: string
    name: string
    mainRole: string
    otherRoles: string[]
    picture?: string
    location?: string
    bio?: string
    avatar: string
}

type ProfileComponent = React.FC<ProfileProps>

export const Profile: ProfileComponent = ({
    id,
    name,
    mainRole,
    picture,
    location,
    bio,
    avatar,
}) => {
    const role = ROLES[mainRole]
    // const other = otherRoles.map(r => ROLES[r])
    const avatarURL = `https://cdn.discordapp.com/avatars/${id}/${avatar.replace(
        "a_",
        ""
    )}.png?size=64`

    const [avatarPath, setAvatarPath] = useState(
        picture ? `${env.ASSETS}/profiles/${picture}` : avatarURL
    )

    return (
        <Card nopadding>
            <div
                className={[
                    "border-b-4",
                    `border-${role.color}`,
                    "border-opacity-50",
                    "w-full",
                    "font-bold",
                    "uppercase",
                    "tracking-widest",
                    "py-1",
                    "flex flex-row items-baseline justify-center",
                ].join(" ")}
            >
                {role.text}
                {id === "468237949142827008" && (
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
                        `border-${role.color}`,
                    ].join(" ")}
                    src={avatarPath}
                    alt={name}
                    onError={() =>
                        setAvatarPath(`${env.ASSETS}/profiles/claude.png`)
                    }
                />

                <div className="mx-auto pt-2 text-center">
                    <div className="font-bold">{name}</div>
                    <div className="text-gray-500 text-sm">{location}</div>
                </div>
            </div>

            {bio && (
                <>
                    <hr className="border-gray-700" />

                    <div className="flex flex-col px-4 py-2">
                        {bio.split("\n").map((p, i) => (
                            <p key={`bio-${name}-p${i}`}>{p}</p>
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
