import "@fortawesome/fontawesome-svg-core/styles.css"
import { Footer, Header, Menu } from "components"
import { Container } from "components/primitives"
import { env } from "helpers"
import { getUser } from "helpers/api"
import { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useEffect, useMemo, useReducer, useState } from "react"
import { Cookies } from "react-cookie"
import {
    closeMenu,
    initialState,
    reducer,
    setLoggedIn,
    setUser,
    SiteContext,
} from "store"
import "styles/index.css"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { pathname, query, replace } = useRouter()

    const contextValue = useMemo(() => {
        return { state, dispatch }
    }, [state, dispatch])

    useEffect(() => {
        if (state.menuVisible) {
            dispatch(closeMenu())
        }
    }, [pathname])

    useEffect(() => {
        if (Object.keys(query).length > 0) {
            replace({ pathname, query: {} })
        }
    }, [query])

    const [cookies, setCookies] = useState<Cookies>()

    useEffect(() => {
        if (process.browser) {
            setCookies(new Cookies(document.cookie))
        }
    }, [])

    useEffect(() => {
        dispatch(setLoggedIn(!!cookies?.get("gpad_auth")))
    }, [cookies])

    useEffect(() => {
        if (state.loggedIn) {
            getUser()
                .then((user) => dispatch(setUser(user)))
                .catch(() => {
                    dispatch(setLoggedIn(false))
                    dispatch(setUser(null))
                })
        }
    }, [state.loggedIn])

    useEffect(() => {
        const bodyClasses = document.querySelector("body").classList
        if (state.menuVisible) {
            bodyClasses.add("overflow-hidden")
        } else {
            bodyClasses.remove("overflow-hidden")
        }
    }, [state.menuVisible])

    return (
        <SiteContext.Provider value={contextValue}>
            <div
                className="z-30 absolute w-screen overflow-hidden bg-fixed"
                style={{
                    backgroundImage: `url(${env.ASSETS}/background.png)`,
                }}
            >
                <Menu />
                <Header />
                <div className="pt-16 bg-opacity-95 bg-background min-h-screen flex flex-col justify-between">
                    <main className="max-w-xl mx-auto">
                        <Container className="mx-4">
                            <Component {...pageProps} />
                        </Container>
                    </main>

                    <Footer />
                </div>
            </div>
        </SiteContext.Provider>
    )
}

export default MyApp
