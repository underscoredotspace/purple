import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { SiteContext, toggleMenu } from "store"

const Menu: React.FC = () => {
    const { state, dispatch } = useContext(SiteContext)

    return state.menuVisible ? (
        <button
            onClick={() => dispatch(toggleMenu())}
            className="w-7 text-center"
        >
            <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>
    ) : (
        <button
            onClick={() => dispatch(toggleMenu())}
            className="w-7 text-center"
        >
            <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
    )
}

export default Menu
