import Head from "next/head";

const SocialCard: React.FC = () => (
  <Head>
    <meta property="og:title" content="Gettin' Payd All Day (GPAD)" />
    <meta
      property="og:description"
      content="An active and supportive multi-platform (PlayStation, Xbox and PC) Grand Theft Auto Online crew and gaming community"
    />
    <meta property="og:url" content="https://gpadcrew.com" />
    <meta name="og:image" content="https://i.gpadcrew.com/social-card.jpg" />
    <meta name="theme-color" content="#0f2499" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image:alt" content="GPAD GTA Crew" />
  </Head>
);

export default SocialCard;
