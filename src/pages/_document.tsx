import Meta from "components/Header/Meta";
import SocialCard from "components/Header/SocialCard";
import { DocumentProps, Head, Html, Main, NextScript } from "next/document";

const MyDocument: React.FC<DocumentProps> = () => {
  return (
    <Html lang="en">
      <Head>
        <SocialCard />
        <Meta />
        <link
          href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
