import React from "react"

interface PillProps {
    bgColor: string
    textColor: string
    borderColor?: string
    text: string
    className: string
}

export const Pill: React.FC<PillProps> = ({
    bgColor,
    textColor,
    borderColor,
    text,
    className = "",
}) => (
    <div
        className={[
            `bg-${bgColor}`,
            `text-${textColor}`,
            "inline-block",
            "rounded-md",
            "px-3",
            "py-1",
            "text-xs",
            "font-black",
            "text-card",
            "font-mono",
            "border",
            `border-${borderColor ?? "black"}`,
            "border-dotted",
            className,
        ].join(" ")}
    >
        {text}
    </div>
)
