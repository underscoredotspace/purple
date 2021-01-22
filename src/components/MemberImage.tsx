import { env } from "helpers"
import { Member } from "helpers/api"
import { classNames } from "helpers/misc"
import React, { useState } from "react"

interface MemberImageProps {
    member: Omit<Member, "role_id">
    colour?: string
    className?: string
    size?: number
}

const MemberImage: React.FC<MemberImageProps> = ({
    member,
    colour,
    className,
    size = 64,
}) => {
    const [avatarPath, setAvatarPath] = useState(
        `https://cdn.discordapp.com/avatars/${
            member.member_id
        }/${member.avatar.replace("a_", "")}.png?size=64`
    )

    return (
        <img
            width={size}
            height={size}
            alt={member.username}
            title={member.username}
            className={classNames([
                `rounded-full border inline-block`,
                colour && `border-${colour}`,
                className,
            ])}
            src={avatarPath}
            onError={() => setAvatarPath(`${env.ASSETS}/profiles/claude.png`)}
        />
    )
}

export default MemberImage
