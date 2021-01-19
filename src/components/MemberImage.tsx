import { env } from "helpers"
import { Member } from "helpers/api"
import React, { useState } from "react"

interface MemberImageProps {
    member: Member
    colour: string
}

const MemberImage: React.FC<MemberImageProps> = ({ member, colour }) => {
    const [avatarPath, setAvatarPath] = useState(
        `https://cdn.discordapp.com/avatars/${
            member.member_id
        }/${member.avatar.replace("a_", "")}.png?size=64`
    )

    return (
        <img
            width="64px"
            height="64px"
            alt={member.username}
            title={member.username}
            className={`m-2 rounded-full border-${colour} border w-12 h-12 inline-block`}
            src={avatarPath}
            onError={() => setAvatarPath(`${env.ASSETS}/profiles/claude.png`)}
        />
    )
}

export default MemberImage
