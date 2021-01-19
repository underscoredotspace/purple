// import { eventExternalLink } from "~/helpers/analytics"

interface AnchorProps {
    className?: string
    title: string
    href: string
    blank?: boolean
    tag?: string
    bare?: boolean
}

export const Anchor: React.FC<AnchorProps> = ({
    className,
    children,
    href,
    blank,
    title,
    bare = false,
}) => {
    const target = blank
        ? {
              target: "_blank",
              rel: "noreferrer",
          }
        : {}

    return (
        <a
            className={`${className} ${bare ? "bare" : ""}`}
            href={href}
            title={title}
            {...target}
        >
            {children}
        </a>
    )
}
