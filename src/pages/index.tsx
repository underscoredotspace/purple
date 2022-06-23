import {
  faPlaystation,
  faWindows,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CrewStats, DiscordInvite, YouTube } from "components";
import { RouteLink, SectionTitle } from "components/primitives";
import { getMembercount } from "helpers/api";
import { GetServerSideProps } from "next";
import { MemberCounts } from "types";

const Home: React.FC<MemberCounts> = (memberCounts) => (
  <>
    <p>
      We are an active and supportive multi-platform (PlayStation{" "}
      <FontAwesomeIcon
        icon={faPlaystation}
        className="text-blue-200"
        size="xs"
      />{" "}
      , Xbox{" "}
      <FontAwesomeIcon icon={faXbox} className="text-green-200" size="xs" /> and
      PC{" "}
      <FontAwesomeIcon icon={faWindows} className="text-yellow-200" size="xs" />{" "}
      ) gaming community.
    </p>
    <p>
      Our main games are{" "}
      <RouteLink to="/gta-online" title="Grand Theft Auto" bold>
        Grand Theft Auto
      </RouteLink>
      ,{" "}
      <RouteLink to="/red-dead" title="Red Dead Redemption" bold>
        Red Dead Redemption
      </RouteLink>{" "}
      and <strong>Call of Duty</strong>. Our community continues to grow in a
      number of{" "}
      <RouteLink to="/other-games" title="Other Games">
        other
      </RouteLink>{" "}
      online multiplayer games.
    </p>
    <p>
      We have an active discord community where members can game together but
      also share experiences outside of gaming.
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

    <CrewStats {...memberCounts} />

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
);

export const getServerSideProps: GetServerSideProps<MemberCounts> = async () => {
  const memberCounts = await getMembercount();

  return { props: memberCounts };
};

export default Home;
