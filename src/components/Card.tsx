import { classNames } from "helpers/misc"

interface CardProps {
    className?: string
    padding?: boolean
}

export const Card: React.FC<CardProps> = ({ children, className, padding }) => (
    <div
        className={classNames([
            "bg-card rounded overflow-hidden shadow border border-gray-700",
            padding && "px-4 py-2",
            className,
        ])}
    >
        {children}
    </div>
)
