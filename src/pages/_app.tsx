import "@fortawesome/fontawesome-svg-core/styles.css";
import * as Sentry from "@sentry/browser";
import { Footer, Header, Menu } from "components";
import { Container } from "components/primitives";
import { env } from "lib/helpers";
import { getUser } from "lib/helpers/api";
import {
  closeMenu,
  initialState,
  reducer,
  setLoggedIn,
  setUser,
  SiteContext,
} from "lib/store";
import { ExtendedUser } from "lib/types";
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
import "styles/index.css";

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
  }, [pathname, state.menuVisible]);

  useEffect(() => {
    if (Object.keys(query).length > 0) {
      replace({ pathname, query: {} });
    }
  }, [pathname, query, replace]);

  const [cookies, , removeCookie] = useCookies();
  const authCookie = !!cookies["gpad_auth"];

  useEffect(() => {
    dispatch(setLoggedIn(authCookie));
  }, [authCookie]);

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
  }, [removeCookie, state.loggedIn]);

  useEffect(() => {
    if (state.user) {
      Sentry.setUser({ id: state.user.userid, username: state.user.username });
    } else {
      Sentry.configureScope((scope) => scope.setUser(null));
    }
  }, [state.user]);

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

export default MyApp;
