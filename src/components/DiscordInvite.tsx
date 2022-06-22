import * as Sentry from "@sentry/browser";
import { Anchor } from "components/primitives";
import { env } from "helpers";

interface DiscordInviteProps {
  className?: string;
  tag: string;
}

const onClickDiscordInvite = () =>
  Sentry.addBreadcrumb({
    category: "link",
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
