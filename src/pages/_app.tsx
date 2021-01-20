import "@fortawesome/fontawesome-svg-core/styles.css"
import { Footer, Header, Menu } from "components"
import { env } from "helpers"
import { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useEffect, useMemo, useReducer } from "react"
import { closeMenu, initialState, reducer, SiteContext } from "store"
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
                className="z-30 absolute w-screen overflow-hidden"
                style={{
                    backgroundImage: `url(${env.ASSETS}/background.png)`,
                }}
            >
                <Menu />
                <Header />
                <div className="pt-16 bg-opacity-95 bg-background min-h-screen flex flex-col justify-between">
                    <main>
                        <Component {...pageProps} />
                    </main>

                    <Footer />
                </div>
            </div>
        </SiteContext.Provider>
    )
}

export default MyApp
