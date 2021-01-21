import { classNames } from "helpers/misc"

export interface ContainerProps {
    className?: string
}

export const Container: React.FC<ContainerProps> = ({
    children,
    className,
}) => <div className={classNames(["space-y-4", className])}>{children}</div>

interface TextProps extends ContainerProps {
    padding?: boolean
}

export const Text: React.FC<TextProps> = ({ className, padding, children }) => (
    <p className={classNames([padding && "px-4 py-2", className])}>
        {children}
    </p>
)
