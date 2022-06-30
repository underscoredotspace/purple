import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Sentry from "@sentry/browser";
import { SiteContext, toggleMenu } from "lib/store";
import { useContext } from "react";

function logMenuVisible(opening: boolean) {
  const message = opening ? "opened" : "closed";

  Sentry.addBreadcrumb({
    category: "menu",
    message,
    level: "info",
  });
}

const Menu: React.FC = () => {
  const { state, dispatch } = useContext(SiteContext);

  return (
    <button
      onClick={() => {
        logMenuVisible(!state.menuVisible);
        dispatch(toggleMenu());
      }}
      className="w-7 text-center flex-shrink-0"
    >
      <FontAwesomeIcon icon={state.menuVisible ? faTimes : faBars} size="2x" />
    </button>
  );
};

export default Menu;
