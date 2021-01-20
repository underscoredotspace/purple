import { faPlaystation, faXbox } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CrewStats, DiscordInvite, YouTube } from "components"
import { RouteLink, SectionTitle } from "components/primitives"

const Home: React.FC = () => (
    <>
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
            <RouteLink to="/gta-online" title="Grand Theft Auto" bold>
                Grand Theft Auto
            </RouteLink>{" "}
            and{" "}
            <RouteLink to="/red-dead" title="Red Dead Redemption" bold>
                Red Dead Redemption
            </RouteLink>{" "}
            but our community continues to grow in a number of{" "}
            <RouteLink to="/other-games" title="Other Games">
                other
            </RouteLink>{" "}
            online multiplayer games.
        </p>
        <p>
            We have an active discord community where members can game together
            but also share experiences outside of gaming.
        </p>

        <YouTube videoId="ulKZbFzPZyw" title="Welcome to GPAD" />

        <p>
            Have a look at{" "}
            <RouteLink to="/about-the-crew" title="About the Crew">
                about the crew
            </RouteLink>{" "}
            to learn more about us. Our{" "}
            <RouteLink to="/crew-events" title="Our Events">
                events
            </RouteLink>{" "}
            page gives you an insight into what our dedicated team of event
            coordinators do for the crew.
        </p>

        <CrewStats />

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
    </>
)

export default Home
