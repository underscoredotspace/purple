import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiteContext, toggleMenu } from "lib/store";
import { useContext } from "react";

const Menu: React.FC = () => {
  const { state, dispatch } = useContext(SiteContext);

  return state.menuVisible ? (
    <button
      onClick={() => dispatch(toggleMenu())}
      className="w-7 text-center flex-shrink-0"
    >
      <FontAwesomeIcon icon={faTimes} size="2x" />
    </button>
  ) : (
    <button
      onClick={() => dispatch(toggleMenu())}
      className="w-7 text-center flex-shrink-0"
    >
      <FontAwesomeIcon icon={faBars} size="2x" />
    </button>
  );
};

export default Menu;
