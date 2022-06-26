import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AchievementTable, Card, DiscordInvite, YouTube } from "components";
import {
  Anchor,
  LazyImage,
  RouteLink,
  SectionTitle,
} from "components/primitives";
import { env } from "lib/helpers";
import React from "react";
import { rdoAchievements } from "./achievements";

const RedDead: React.FC = () => (
  <>
    <p>
      We are now roaming the beautiful lands of <b>Red Dead Online</b>. We have
      made a couple of additions to our server so we can help cowpokes with
      their adventures
    </p>

    <LazyImage
      src={`${env.ASSETS}/rdo_gang.jpg`}
      alt="Some of the Crew hanging out in Red Dead Online"
      width={888}
      height={495}
      data-credit="D1spar0"
      className="mx-auto"
    />

    <p>
      In our Discord Server we use the great{" "}
      <Anchor
        href="https://rdo-compendium.com/"
        title="RDO Compendium bot"
        blank
      >
        RDO Compendium bot
        <FontAwesomeIcon
          icon={faExternalLinkAlt}
          className="text-pink-400 ml-1"
          size="xs"
        />
      </Anchor>{" "}
      created by Bob Ross, that allows you to locate different types of
      collectibles, missions, herbs, animals, shops and treasures.
    </p>

    <YouTube videoId="4fXjrHxSp3E" title="RDO" />

    <p>
      There&apos;s also activity roles for when you’re looking for help, some
      cool{" "}
      <RouteLink to="/crew-events" title="Crew Events">
        Events
      </RouteLink>{" "}
      and{" "}
      <RouteLink to="/achievements" title="Achievements">
        Achievements
      </RouteLink>
    </p>

    <Card padding>
      <SectionTitle type="h3">{rdoAchievements.name}</SectionTitle>
      <p className="pb-4">{rdoAchievements.desc}</p>
      <AchievementTable
        colour={rdoAchievements.colour}
        tableData={rdoAchievements.roles}
      />
    </Card>

    <SectionTitle type="h3">Money Making Guides</SectionTitle>
    <p>
      On top of that we are currently working on guides, curated by our most
      experienced players.
    </p>

    <LazyImage
      src={`${env.ASSETS}/cowboy_guide.png`}
      alt="Sneak peek of our Cowboy Guide"
      width={412}
      height={258}
      data-credit="Stormbreaker3200"
      className="desaturated mx-auto"
    />
    <Card padding>
      <SectionTitle>Hang with our RDO posse</SectionTitle>
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
        to access all of our guides, collect some achievement roles, and some
        lovely <b>stew</b>
      </p>
    </Card>
  </>
);

export default RedDead;
