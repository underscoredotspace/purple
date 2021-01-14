import { env } from "helpers"
import Link from "next/link"

const Logo: React.FC = () => (
    <Link href="/">
        <a>
            <img
                src={`${env.ASSETS}/logo.png`}
                alt="GPAD Logo"
                className="my-2"
                width={40}
                height={40}
            />
        </a>
    </Link>
)

export default Logo
