import { classNames } from "lib/helpers/misc";
import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  className?: string;
  padding?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, padding }) => (
  <div
    className={classNames([
      "bg-card rounded shadow border border-gray-700",
      padding && "px-4 py-2",
      className,
    ])}
  >
    {children}
  </div>
);
