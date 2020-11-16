import { env } from "../helpers"
import { Footer } from "../components"
import "../styles/index.css"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <header>
                <h1>Page Title</h1>
                <nav>Navigation</nav>
            </header>
            <main>
                Main Content
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    )
}

export default MyApp
