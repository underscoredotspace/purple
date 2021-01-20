import { classNames } from "helpers/misc"

interface CardProps {
    className?: string
}

export const Card: React.FC<CardProps> = ({ children, className }) => (
    <div
        className={classNames([
            "bg-card rounded overflow-hidden shadow border border-gray-700",
            className,
        ])}
    >
        {children}
    </div>
)
