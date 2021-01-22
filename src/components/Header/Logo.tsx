import { RouteLink } from "components/primitives"
import { env } from "helpers"

const Logo: React.FC = () => (
    <RouteLink to="/" title="Home">
        <img
            src={`${env.ASSETS}/logo.png`}
            alt="GPAD Logo"
            width={40}
            height={40}
        />
    </RouteLink>
)

export default Logo
