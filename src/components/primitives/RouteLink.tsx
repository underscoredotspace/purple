import { classNames } from "lib/helpers/misc";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface RouteLinkProps extends PropsWithChildren {
  bold?: boolean;
  title: string;
  to: string;
  className?: string;
}

export const RouteLink: React.FC<RouteLinkProps> = ({
  to,
  title,
  bold,
  children,
  className,
}) => (
  <Link href={to}>
    <a title={title} className={classNames([bold && "font-bold", className])}>
      {children}
    </a>
  </Link>
);
