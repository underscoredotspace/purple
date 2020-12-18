interface CardProps {
    className?: string
    nopadding?: boolean
}

export const Card: React.FC<CardProps> = ({
    children,
    className = "",
    nopadding = false,
}) => (
    <div
        className={`bg-card rounded overflow-hidden shadow border border-gray-700 ${
            nopadding ? "null" : "py-2 px-4"
        } ${className}`}
    >
        {children}
    </div>
)
