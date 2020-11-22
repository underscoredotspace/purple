import { faPlaystation, faXbox } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { DiscordInvite, YouTube } from "../components"
import { SectionTitle } from "../components/primitives"

const Home: React.FC = () => (
    <>
        <div className="m-4">
            <p>
                We are an active and supportive dual-platform (PlayStation 4{" "}
                <FontAwesomeIcon
                    icon={faPlaystation}
                    className="text-ps"
                    size="xs"
                />{" "}
                and Xbox One{" "}
                <FontAwesomeIcon icon={faXbox} className="text-xb" size="xs" />)
                gaming community.
            </p>
            <p>
                Our main games are{" "}
                <Link href="/gta-online">
                    <b>Grand Theft Auto</b>
                </Link>{" "}
                and{" "}
                <Link href="/red-dead">
                    <b>Red Dead Redemption</b>
                </Link>{" "}
                but our community continues to grow in a number of{" "}
                <Link href="/other-games">other</Link> online multiplayer games.
            </p>
            <p>
                We have an active discord community where members can game
                together but also share experiences outside of gaming.
            </p>
        </div>

        <YouTube videoId="ulKZbFzPZyw" title="Welcome to GPAD" />

        <div className="m-4">
            <p>
                Have a look at{" "}
                <Link href="/about-the-crew">about the crew</Link> to learn more
                about us. Our <Link href="/events">events</Link> page gives you
                an insight into what our dedicated team of event coordinators do
                for the crew.
            </p>
        </div>

        {/* <MemberCount /> */}

        <div className="m-4">
            <SectionTitle>Come to our house and get payd!</SectionTitle>
            <p>
                Join our{" "}
                <DiscordInvite tag="landing">
                    Discord Server
                    <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="text-pink-400 ml-1"
                        size="xs"
                    />
                </DiscordInvite>{" "}
                and our Admissions team will help you join.
            </p>
        </div>
    </>
)

export default Home
