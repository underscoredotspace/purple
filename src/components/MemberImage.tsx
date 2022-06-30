import { env } from "lib/helpers";
import { classNames } from "lib/helpers/misc";
import { Member } from "lib/types";
import React, { useState } from "react";

interface MemberImageProps {
  member: Pick<Member, "avatar" | "username" | "id">;
  colour?: string;
  className?: string;
  size?: number;
  title?: string;
}

const MemberImage: React.FC<MemberImageProps> = ({
  member,
  colour,
  className,
  size = 48,
  title,
}) => {
  const [avatarPath, setAvatarPath] = useState(
    `https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.${
      member?.avatar?.startsWith("a_") ? "gif" : "png"
    }?size=${size}`
  );

  return (
    <img
      width={size}
      height={size}
      alt={member.username}
      title={title || member.username}
      className={classNames([
        `rounded-full inline-block`,
        colour && `border-2 border-opacity-50 border-${colour}`,
        className,
      ])}
      src={avatarPath}
      onError={() => setAvatarPath(`${env.ASSETS}/profiles/claude.png`)}
    />
  );
};

export default MemberImage;
