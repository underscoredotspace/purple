import { classNames } from "lib/helpers/misc";
import { createElement, PropsWithChildren } from "react";

interface SectionTitleProps extends PropsWithChildren {
  type?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  type = "h2",
  children,
  className,
}) => {
  const titleClass = classNames(["font-bold", className]);
  const TitleType = createElement(type, { className: titleClass }, children);

  return TitleType;
};
