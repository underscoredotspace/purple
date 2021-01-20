import Head from "next/head"

const SocialCard: React.FC = () => (
    <Head>
        <meta property="og:title" content="Gettin' Payd All Day (GPAD)" />
        <meta
            property="og:description"
            content="An active and supportive dual-platform (PlayStation 4 and Xbox One) Grand Theft Auto Online crew and gaming community"
        />
        <meta property="og:url" content="https://gpadcrew.com" />
        <meta
            name="og:image"
            content="https://gpadcrew.com/assets/social-card.jpg"
        />
        <meta name="theme-color" content="#0f2499" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="GPAD GTA Crew" />
    </Head>
)

export default SocialCard
