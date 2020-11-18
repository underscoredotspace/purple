import "@fortawesome/fontawesome-svg-core/styles.css"
import { AppProps } from "next/app"
import { Footer, Header } from "~components"
import { env } from "~helpers"
import "../styles/index.css"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
    <>
        <div
            className="overflow-y-auto absolute inset-0 z-30"
            style={{ backgroundImage: `url(${env.ASSET}/background.png)` }}
        >
            <Header />
            <div className="pt-16 bg-opacity-95 bg-background min-h-screen flex flex-col justify-between">
                <Component {...pageProps} />
                <Footer />
            </div>
        </div>
    </>
)

export default MyApp
