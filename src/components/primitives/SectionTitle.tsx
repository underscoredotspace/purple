interface SectionTitleProps {
    className?: string
    nopadding?: boolean
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
    children,
    className,
    nopadding,
    ...props
}) => (
    <h2
        className={`font-bold ${nopadding ? null : "mb-2"} ${className}`}
        {...props}
    >
        {children}
    </h2>
)
