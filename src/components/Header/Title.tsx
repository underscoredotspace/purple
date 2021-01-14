import { getRoute } from "helpers"
import Head from "next/head"
import { useRouter } from "next/router"
import { useContext } from "react"
import { SiteContext } from "store"

const Title: React.FC = () => {
    const { pathname } = useRouter()
    const { state } = useContext(SiteContext)
    const route = getRoute(pathname)

    return (
        <>
            <Head>
                <title>GPAD - {route?.title ?? "Page Not Found"}</title>
            </Head>
            <h1 className="text-2xl font-extrabold mx-4 text-copy">
                {state.menuVisible ? "Menu" : route?.title ?? "Page Not Found"}
            </h1>
        </>
    )
}

export default Title
