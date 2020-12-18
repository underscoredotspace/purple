import { createElement } from "react"

interface SectionTitleProps {
    type?: string
    className?: string
    nopadding?: boolean
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
    type = "h2",
    children,
    className,
    nopadding,
}) => {
    const titleClass = `font-bold ${nopadding ? null : "mb-2"} ${className}`
    const TitleType = createElement(type, { className: titleClass }, children)

    return TitleType
}
