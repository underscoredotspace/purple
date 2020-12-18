import { Route, routes } from "helpers/routes"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useContext, useEffect } from "react"
import { closeMenu, SiteContext } from "store"

interface CreateLinkProps {
    route: Route
    pathname: string
}

const createLink: React.FC<CreateLinkProps> = ({ route, pathname }) => {
    if (route.path === pathname) {
        return <b className="block p-2 bg-card">{route.title}</b>
    }

    if (route.external) {
        return (
            <a
                title={route.title}
                href={route.path}
                className="bare block p-2 hover:bg-card"
            >
                {route.title}
            </a>
        )
    }

    return (
        <Link href={route.path}>
            <a className="bare block p-2 hover:bg-card">{route.title}</a>
        </Link>
    )
}

export const Menu: React.FC = () => {
    const { pathname } = useRouter()
    const { state, dispatch } = useContext(SiteContext)

    function handleEscape({ key }: KeyboardEvent) {
        if (key === "Escape" && state.menuVisible) {
            dispatch(closeMenu())
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleEscape)

        return () => document.removeEventListener("keydown", handleEscape)
    }, [])

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
            </ul>
        </nav>
    )
}