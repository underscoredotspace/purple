import "@fortawesome/fontawesome-svg-core/styles.css"
import { AppProps } from "next/app"
import { useMemo, useReducer } from "react"
import { initialState, reducer, SiteContext } from "store"
import "styles/index.css"
import { Footer, Header } from "~components"
import { env } from "~helpers"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const contextValue = useMemo(() => {
        return { state, dispatch }
    }, [state, dispatch])

    return (
        <SiteContext.Provider value={contextValue}>
            <div
                className="z-30"
                style={{ backgroundImage: `url(${env.ASSET}/background.png)` }}
            >
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
