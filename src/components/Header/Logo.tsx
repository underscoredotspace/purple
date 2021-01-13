import Link from "next/link"
import { env } from "../../helpers"

const Logo: React.FC = () => (
    <Link href="/">
        <a>
            <img
                src={`${env.ASSET}/logo.png`}
                alt="GPAD Logo"
                className="my-2"
                width={40}
                height={40}
            />
        </a>
    </Link>
)

export default Logo
