import { RouteLink } from "components/primitives"

const NotFound: React.FC = () => (
    <div className="mt-16 h-full flex flex-col items-center">
        <p>You&apos;re lost?</p>
        <p>
            <RouteLink to="/" title="Home" bold>
                Return Home
            </RouteLink>
        </p>
    </div>
)

export default NotFound
