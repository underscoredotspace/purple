import { env } from "../helpers"
import { Anchor } from "./primitives"

interface DiscordInviteProps {
    className?: string
    tag: string
}

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
    >
        {children}
    </Anchor>
)
