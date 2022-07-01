import { Anchor } from "components/primitives";
import { env, logger } from "lib/helpers";
import { BreadcrumbCategory } from "lib/helpers/logging/types";
import { PropsWithChildren } from "react";

interface DiscordInviteProps extends PropsWithChildren {
  className?: string;
  tag: string;
}

const onClickDiscordInvite = () =>
  logger.addBreadcrumb({
    category: BreadcrumbCategory.LINK,
    message: "Discord invite",
    level: "info",
  });

export const DiscordInvite: React.FC<DiscordInviteProps> = ({
  children,
  className,
  tag,
}) => (
  <Anchor
    className={className}
    href={`https://discord.gg/${env.INVITE_CODE}`}
    blank
    title="Join us on Discord"
    tag={tag}
    onClick={onClickDiscordInvite}
  >
    {children}
  </Anchor>
);
