import { getRoute } from "lib/helpers";
import { SiteContext } from "lib/store";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";

const Title: React.FC = () => {
  const { pathname } = useRouter();
  const { state } = useContext(SiteContext);
  const route = getRoute(pathname);

  return (
    <>
      <Head>
        <title>GPAD - {route?.title ?? "Page Not Found"}</title>
      </Head>
      <h1 className="w-full text-xl font-extrabold text-copy text-center">
        {state.menuVisible ? "Menu" : route?.title ?? "Page Not Found"}
      </h1>
    </>
  );
};

export default Title;
