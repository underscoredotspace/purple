import { Text } from "components/primitives"
import { classNames } from "helpers/misc"
import { ContainerProps } from "./Containers"

interface PillProps extends ContainerProps {
    text: string
}

export const Pill: React.FC<PillProps> = ({ text, className }) => (
    <div
        className={classNames([
            "inline-block rounded-md mr-2 mb-2 px-3 py-1 font-mono border border-black border-dotted",
            className,
        ])}
    >
        <Text className="text-xs text-card">{text}</Text>
    </div>
)

export const Pills: React.FC<ContainerProps> = ({ children, className }) => (
    <div className={classNames(["flex flex-row flex-wrap", className])}>
        {children}
    </div>
)
