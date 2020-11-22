import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { SiteContext, toggleMenu } from "store"

const Menu: React.FC = () => {
    const { state, dispatch } = useContext(SiteContext)

    return (
        <button
            onClick={() => dispatch(toggleMenu())}
            className="w-7 text-center"
        >
            {state.menuVisible ? (
                <FontAwesomeIcon icon={faTimes} size="2x" className="mx-auto" />
            ) : (
                <FontAwesomeIcon icon={faBars} size="2x" className="mx-auto" />
            )}
        </button>
    )
}

export default Menu
