import "@fortawesome/fontawesome-svg-core/styles.css"
import { AppProps } from "next/app"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useMemo, useReducer } from "react"
import { closeMenu, initialState, reducer, SiteContext } from "store"
import "styles/index.css"
import { Footer, Header, Menu } from "~components"
import { env } from "~helpers"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { pathname } = useRouter()

    const contextValue = useMemo(() => {
        return { state, dispatch }
    }, [state, dispatch])

    useEffect(() => {
        if (state.menuVisible) {
            dispatch(closeMenu())
        }
    }, [pathname])

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <SiteContext.Provider value={contextValue}>
                <div
                    className="z-30 absolute w-screen overflow-hidden"
                    style={{
                        backgroundImage: `url(${env.ASSET}/background.png)`,
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
        </>
    )
}

export default MyApp
