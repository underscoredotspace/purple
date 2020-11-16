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
    // tag = "",
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
            // onClick={() => eventExternalLink({ title, tag })}
            className={`${className} ${bare ? "bare" : ""}`}
            href={href}
            title={title}
            {...target}
        >
            {children}
        </a>
    )
}
