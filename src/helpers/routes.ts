export interface Route {
    path: string
    title: string
    category?: string
    external?: boolean
}

type Routes = Route[]

export const routes: Routes = [
    {
        path: "/",
        title: "Welcome to GPAD",
    },
    {
        path: "/about-the-crew",
        title: "About the Crew",
    },
    {
        path: "/wall-of-fame",
        title: "Wall of Fame",
    },
    {
        path: "/crew-events",
        title: "Crew Events",
    },
    {
        path: "/gta-online",
        title: "GTA Online",
        category: "Games we Play",
    },
    {
        path: "/red-dead",
        title: "Red Dead Redemption",
        category: "Games we Play",
    },
    {
        path: "/other-games",
        title: "Games We Play",
        category: "Games we Play",
    },
    {
        path: "/meet-the-staff",
        title: "Meet the Staff",
    },
    {
        path: "/achievements",
        title: "Achievements",
    },
    {
        path: "/privacy-policy",
        title: "Privacy Policy",
    },
]

export const getRoute = (pathname: string): Route | undefined =>
    routes.find((route) => route.path === pathname)
