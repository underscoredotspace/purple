import { PropsWithChildren } from "react";

interface AnchorProps extends PropsWithChildren {
  className?: string;
  title: string;
  href: string;
  blank?: boolean;
  tag?: string;
  bare?: boolean;
  onClick?: () => void;
}

export const Anchor: React.FC<AnchorProps> = ({
  className,
  children,
  href,
  blank,
  title,
  bare = false,
  onClick,
}) => {
  const target = blank
    ? {
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

  return (
    <a
      className={`${className} ${bare ? "bare" : ""}`}
      href={href}
      title={title}
      onClick={onClick}
      {...target}
    >
      {children}
    </a>
  );
};
