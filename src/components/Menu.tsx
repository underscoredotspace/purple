import { env } from "helpers"
import { Route, routes } from "helpers/routes"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useContext, useEffect, useState } from "react"
import { Cookies } from "react-cookie"
import { closeMenu, SiteContext } from "store"

interface CreateLinkProps {
    route: Route
    pathname: string
}

const MenuLink: React.FC<{ title: string; href: string }> = ({
    title,
    href,
    children,
}) => (
    <a title={title} href={href} className="bare block p-2 hover:bg-card">
        {children}
    </a>
)

const createLink: React.FC<CreateLinkProps> = ({ route, pathname }) => {
    if (route.path === pathname) {
        return <b className="block p-2 bg-card">{route.title}</b>
    }

    if (route.external) {
        return (
            <MenuLink title={route.title} href={route.path}>
                {route.title}
            </MenuLink>
        )
    }

    return (
        <Link href={route.path}>
            <MenuLink title={route.title} href={route.path}>
                {route.title}
            </MenuLink>
        </Link>
    )
}

export const Menu: React.FC = () => {
    const { pathname } = useRouter()
    const { state, dispatch } = useContext(SiteContext)
    const [cookies, setCookies] = useState<Cookies>()

    useEffect(() => {
        document.addEventListener("keydown", handleEscape)

        return () => document.removeEventListener("keydown", handleEscape)
    }, [state.menuVisible])

    useEffect(() => {
        if (process.browser) {
            setCookies(new Cookies(document.cookie))
        }
    }, [])

    const loggedIn = !!cookies?.get("auth")

    function handleEscape({ key }: KeyboardEvent) {
        if (key === "Escape" && state.menuVisible) {
            dispatch(closeMenu())
        }
    }

    return (
        <nav
            className={[
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
                !state.menuVisible ? "opacity-0" : null,
                !state.menuVisible ? "transform translate-x-full" : null,
            ].join(" ")}
        >
            <ul className="p-4 h-full">
                {Object.values(routes).map((route) => (
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
                            title={`Log ${loggedIn ? "out" : "in"}`}
                        >
                            Log {loggedIn ? "out" : "in"}
                        </MenuLink>
                    </li>
                ) : null}
            </ul>
        </nav>
    )
}
