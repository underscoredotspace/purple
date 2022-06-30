import { classNames } from "lib/helpers/misc";
import { PropsWithChildren } from "react";

export interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => <div className={classNames(["space-y-4", className])}>{children}</div>;

interface TextProps extends ContainerProps {
  padding?: boolean;
}

export const Text: React.FC<TextProps> = ({ className, padding, children }) => (
  <div className={classNames([padding && "px-4 py-2", className])}>
    {children}
  </div>
);
