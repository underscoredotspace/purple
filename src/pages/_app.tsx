import "@fortawesome/fontawesome-svg-core/styles.css";
import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";
import { Footer, Header, Menu } from "components";
import { Container } from "components/primitives";
import { env } from "helpers";
import { getUser } from "helpers/api";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useMemo, useReducer } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import "semantic-ui-css/components/dropdown.css";
import "semantic-ui-css/components/icon.css";
import "semantic-ui-css/components/label.css";
import "semantic-ui-css/components/menu.css";
import "semantic-ui-css/components/message.css";
import "semantic-ui-css/components/transition.css";
import {
  closeMenu,
  initialState,
  reducer,
  setLoggedIn,
  setUser,
  SiteContext,
} from "store";
import "styles/index.css";
import { ExtendedUser } from "types";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { pathname, query, replace } = useRouter();

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  useEffect(() => {
    if (state.menuVisible) {
      dispatch(closeMenu());
    }
  }, [pathname]);

  useEffect(() => {
    if (Object.keys(query).length > 0) {
      replace({ pathname, query: {} });
    }
  }, [query]);

  const [cookies, , removeCookie] = useCookies();

  useEffect(() => {
    dispatch(setLoggedIn(!!cookies["gpad_auth"]));
  }, [cookies["gpad_auth"]]);

  useEffect(() => {
    if (state.loggedIn) {
      getUser()
        .then((user: ExtendedUser) => {
          if (!user) {
            throw new Error("user logged out");
          }

          return user;
        })
        .then((res) => {
          const { permissions, member, ...user } = res;
          dispatch(setUser(user, member, permissions));
        })
        .catch((error) => {
          console.error(error.message);

          removeCookie("gpad_auth");
          dispatch(setLoggedIn(false));
        });
    }
  }, [state.loggedIn]);

  useEffect(() => {
    const bodyClasses = document.querySelector("body").classList;
    if (state.menuVisible) {
      bodyClasses.add("overflow-hidden");
    } else {
      bodyClasses.remove("overflow-hidden");
    }
  }, [state.menuVisible]);

  return (
    <CookiesProvider>
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
            <main className="w-full max-w-xl mx-auto">
              <Container className="mx-4">
                <Component {...pageProps} />
              </Container>
            </main>

            <Footer />
          </div>
        </div>
      </SiteContext.Provider>
    </CookiesProvider>
  );
};

const App: React.FC<AppProps> = (props) => {
  typeof window !== "undefined" &&
    Sentry.init({
      dsn:
        "https://169bc0e6f1194b0f9ce597bcab686ebb@o1138904.ingest.sentry.io/6193708",
      integrations: [new BrowserTracing()],
      tracesSampleRate: 1.0,
      environment: window.location.host.startsWith("develop.")
        ? "staging"
        : env.NODE_ENV,
    });

  return <MyApp {...props} />;
};

export default App;
