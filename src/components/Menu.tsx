import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { env } from "helpers"
import { classNames } from "helpers/misc"
import { Route, routes } from "helpers/routes"
import { useRouter } from "next/router"
import React, { useContext, useEffect } from "react"
import { closeMenu, SiteContext } from "store"
import { RouteLink } from "./primitives"

interface CreateLinkProps {
    route: Route
    pathname: string
}

const MenuLink: React.FC<{ title: string; href?: string }> = ({
    title,
    href,
    children,
}) => (
    <a
        title={title}
        href={href}
        className="bare p-2 hover:bg-card flex flex-row items-center"
    >
        {children}
    </a>
)

const createLink: React.FC<CreateLinkProps> = ({ route, pathname }) => {
    if (route.path === pathname) {
        return <b className="block p-2 bg-card">{route.title}</b>
    }

    const className = "bare p-2 hover:bg-card flex flex-row items-center"

    return route.external ? (
        <a title={route.title} href={route.path} className={className}>
            {route.title}
        </a>
    ) : (
        <RouteLink to={route.path} title={route.title} className={className}>
            {route.title}
        </RouteLink>
    )
}

export const Menu: React.FC = () => {
    const { pathname } = useRouter()
    const { state, dispatch } = useContext(SiteContext)
    const { loggedIn, menuVisible } = state

    useEffect(() => {
        document.addEventListener("keydown", handleEscape)

        return () => document.removeEventListener("keydown", handleEscape)
    }, [menuVisible])

    function handleEscape({ key }: KeyboardEvent) {
        if (key === "Escape" && menuVisible) {
            dispatch(closeMenu())
        }
    }

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
                    .filter(({ hidden }) => !hidden)
                    .map((route) => (
                        <li key={`menu-${route.title}`}>
                            {createLink({ route, pathname })}
                        </li>
                    ))}

                {env.ENABLE_LOGIN ? (
                    <li key={"menu-login"}>
                        <MenuLink
                            href={`${env.API_URL}/auth/${
                                loggedIn ? "logout" : "login"
                            }?redirect=${pathname}`}
                            title={`Log ${
                                loggedIn ? "out" : "in with Discord"
                            }`}
                        >
                            Log&nbsp;
                            {loggedIn ? (
                                "out"
                            ) : (
                                <>
                                    in with&nbsp;
                                    <span className="font-bold text-discord">
                                        Discord&nbsp;
                                        <FontAwesomeIcon
                                            icon={faDiscord}
                                            className="text-discord"
                                        />
                                    </span>
                                </>
                            )}
                        </MenuLink>
                    </li>
                ) : null}
            </ul>
        </nav>
    )
}
