import { faCookieBite } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card } from "components"
import { Container } from "components/primitives"

const PrivacyPolicy: React.FC = () => (
    <>
        <Card padding>
            <Container>
                <p>
                    We do not collect any personal information on this website.
                    If you choose to log in, we will store a cookie in your
                    browser that identifies you. We store a record of your
                    Discord userid, username and avatar. All of this information
                    is purged when you log off.
                </p>
                <p>
                    As per the crew&apos;s rules (agreed to by accepting an
                    invitation to the crew on Social Club), we may show
                    usernames of current and past members along with pictures in
                    order to give credit.
                </p>
                <p className="text-xs">
                    Privacy contact address: <span>pri</span>
                    <span>vac</span>
                    <span>y@g</span>
                    <span>pad</span>
                    <span>cre</span>
                    <span>w.com</span>
                </p>
            </Container>
        </Card>
        <div className="flex items-center justify-center py-8">
            <FontAwesomeIcon
                icon={faCookieBite}
                size={"7x"}
                className="text-yellow-300"
            />
        </div>
    </>
)

export default PrivacyPolicy
