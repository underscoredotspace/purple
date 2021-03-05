import { env } from "helpers"
import { classNames } from "helpers/misc"
import React, { useState } from "react"
import { User } from "store/types"

interface MemberImageProps {
    user: User
    colour?: string
    className?: string
    size?: number
    title?: string
}

const MemberImage: React.FC<MemberImageProps> = ({
    user,
    colour,
    className,
    size = 64,
    title,
}) => {
    const [avatarPath, setAvatarPath] = useState(
        `https://cdn.discordapp.com/avatars/${
            user.userId
        }/${member.avatar.replace("a_", "")}.png?size=64`
    )

    return (
        <img
            width={size}
            height={size}
            alt={member.username}
            title={title || member.username}
            className={classNames([
                `rounded-full inline-block`,
                colour && `border border-${colour}`,
                className,
            ])}
            src={avatarPath}
            onError={() => setAvatarPath(`${env.ASSETS}/profiles/claude.png`)}
        />
    )
}

export default MemberImage
