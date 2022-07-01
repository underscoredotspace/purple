import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { env, logger } from "lib/helpers";
import { BreadcrumbCategory } from "lib/helpers/logging/types";
import { classNames } from "lib/helpers/misc";
import { Route, routes } from "lib/helpers/routes";
import { closeMenu, SiteContext } from "lib/store";
import { useRouter } from "next/router";
import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { RouteLink } from "./primitives";

interface CreateLinkProps extends PropsWithChildren {
  route: Route;
  pathname: string;
}

const MenuLink: React.FC<
  PropsWithChildren<{
    title: string;
    href?: string;
  }>
> = ({ title, href, children }) => (
  <a
    title={title}
    href={href}
    className="bare p-2 hover:bg-card flex flex-row items-center"
    onClick={() => onMenuLinkClick(title)}
  >
    {children}
  </a>
);

const onMenuLinkClick = (title: string) =>
  logger.addBreadcrumb({
    category: BreadcrumbCategory.LINK,
    message: `Menu: ${title}`,
    level: "info",
  });

const createLink: React.FC<CreateLinkProps> = ({ route, pathname }) => {
  const LockIcon = route.permissions ? (
    <FontAwesomeIcon icon={faLock} className="text-yellow-400 text-xs ml-1" />
  ) : null;

  if (route.path === pathname) {
    return (
      <b className="block p-2 bg-card">
        {route.title}
        {LockIcon}
      </b>
    );
  }

  const className = "bare p-2 hover:bg-card flex flex-row items-center";

  return route.external ? (
    <a title={route.title} href={route.path} className={className}>
      {route.title}
    </a>
  ) : (
    <RouteLink to={route.path} title={route.title} className={className}>
      {route.title}
      {LockIcon}
    </RouteLink>
  );
};

const hasPermission = (route: Route, permissions: string[]): boolean =>
  route.permissions
    ? !!route.permissions.find((permission) => permissions.includes(permission))
    : true;

export const Menu: React.FC = () => {
  const { pathname } = useRouter();
  const { state, dispatch } = useContext(SiteContext);
  const { loggedIn, menuVisible } = state;

  const handleEscape = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === "Escape" && menuVisible) {
        dispatch(closeMenu());
      }
    },
    [dispatch, menuVisible]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [handleEscape, menuVisible]);

  return (
    <nav
      className={classNames([
        "fixed inset-0 bg-black text-white bg-opacity-50 z-40 mt-16",
        "transition",
        "ease-in-expo",
        "duration-300",
        "ease-in-out",
        "shadow",
        "bg-background",
        "bg-opacity-95",
        "overflow-y-auto",
        "border-t border-copy",
        !menuVisible ? "opacity-0 transform translate-x-full" : null,
      ])}
    >
      <ul className="p-4 h-full">
        {Object.values(routes)
          .filter((route) => hasPermission(route, state.permissions))
          .map((route) => (
            <li key={`menu-${route.title}`}>
              {createLink({ route, pathname })}
            </li>
          ))}

        <li key={"menu-login"}>
          <MenuLink
            href={`${env.API_URL}/auth/${
              loggedIn ? "logout" : "login"
            }?redirect=${pathname}`}
            title={`Log ${loggedIn ? "out" : "in with Discord"}`}
          >
            Log&nbsp;
            {loggedIn ? (
              "out"
            ) : (
              <>
                in with&nbsp;
                <span className="font-bold text-discord">
                  Discord&nbsp;
                  <FontAwesomeIcon icon={faDiscord} className="text-discord" />
                </span>
              </>
            )}
          </MenuLink>
        </li>
      </ul>
    </nav>
  );
};
