import Link from "next/link"
import { env } from "../../helpers"

const Logo: React.FC = () => (
    <Link href="/">
        <a>
            <img
                src={`${env.ASSET}/logo.png`}
                alt="GPAD Logo"
                className="h-10 w-10 my-2"
            />
        </a>
    </Link>
)

export default Logo
