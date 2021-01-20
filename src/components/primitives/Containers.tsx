import { classNames } from "helpers/misc"

interface ContainerProps {
    className?: string
}

export const Container: React.FC<ContainerProps> = ({
    children,
    className,
}) => <div className={classNames(["space-y-4", className])}>{children}</div>
