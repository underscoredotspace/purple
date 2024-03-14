import { faPlaystation, faXbox } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, DiscordInvite } from "components";
import { LazyImage, RouteLink, SectionTitle } from "components/primitives";
import { env } from "lib/helpers";
import { getMembercount } from "lib/helpers/api";
import { MemberCounts } from "lib/types";
import { GetStaticProps } from "next";

const Home: React.FC<MemberCounts> = (memberCounts) => (
  <>
    <p>
      We are an active and supportive PlayStation{" "}
      <FontAwesomeIcon
        icon={faPlaystation}
        className="text-blue-200"
        size="xs"
      />{" "}
      and Xbox{" "}
      <FontAwesomeIcon icon={faXbox} className="text-green-200" size="xs" />{" "}
      gaming community.
    </p>
    <p>
      Our main games is{" "}
      <RouteLink to="/gta-online" title="Grand Theft Auto" bold>
        Grand Theft Auto
      </RouteLink>{" "}
      and our community continues to grow in a number of other online
      multiplayer games.
    </p>

    <Card padding>
      <SectionTitle>Join the Crew</SectionTitle>
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
        and our Admissions team will help you join. We are ready to drive your
        PostOp vans and buggies!
      </p>
    </Card>

    <LazyImage
      src={`${env.ASSETS}/post-op.webp`}
      alt="a PostOp van being pushed by a Vigilante"
    />

    {/* <YouTube videoId="ulKZbFzPZyw" title="Welcome to GPAD" /> */}

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

    {/* <CrewStats {...memberCounts} /> */}
  </>
);

export const getStaticProps: GetStaticProps<MemberCounts> = async () => {
  const memberCounts = await getMembercount();

  return { props: memberCounts, revalidate: 3600 };
};

export default Home;
