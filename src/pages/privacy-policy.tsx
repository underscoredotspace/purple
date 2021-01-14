import { faCookieBite } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card } from "components"

const PrivacyPolicy: React.FC = () => (
    <div className="m-4 h-full">
        <Card>
            <p>
                We do not collect or share any personal information. If you
                choose to log in, we will store a cookie in your browser that
                identifies you. We store a record of your Discord userid,
                username and avatar. All of this information is purged when you
                log off.
            </p>
        </Card>
        <div className="h-full flex items-center justify-center">
            <FontAwesomeIcon
                icon={faCookieBite}
                size={"7x"}
                className="mx-auto my-8 text-yellow-300"
            />
        </div>
    </div>
)

export default PrivacyPolicy
