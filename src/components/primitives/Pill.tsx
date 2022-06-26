import { Text } from "components/primitives";
import { classNames } from "lib/helpers/misc";
import { ContainerProps } from "./Containers";

interface PillProps extends ContainerProps {
  text: string;
}

export const Pill: React.FC<PillProps> = ({ text, className }) => (
  <div
    className={classNames([
      "inline-block rounded-sm mr-2 mb-2 px-1 font-mono",
      className,
    ])}
  >
    <Text className="text-xs text-card font-black">{text}</Text>
  </div>
);

export const Pills: React.FC<ContainerProps> = ({ children, className }) => (
  <div className={classNames(["flex flex-row flex-wrap", className])}>
    {children}
  </div>
);
