import Link from "next/link"

interface RouteLinkProps {
    bold?: boolean
    title: string
    to: string
}

export const RouteLink: React.FC<RouteLinkProps> = ({
    to,
    title,
    bold,
    children,
}) => (
    <Link href={to}>
        <a title={title} className={`${bold ? "font-bold" : ""}`}>
            {children}
        </a>
    </Link>
)
