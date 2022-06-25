import { Card } from "components";
import { EventCard } from "components/EventCard";
import MemberImage from "components/MemberImage";
import { RouteLink, SectionTitle } from "components/primitives";
import { getMembersByRole } from "helpers/api";
import { GetStaticProps } from "next";
import React from "react";
import { RoleListItem, RoleListItems } from "types";

const Role: React.FC<{ gp?: boolean }> = ({ children, gp }) => (
  <span className={`${gp ? "text-green-400" : "text-green-600"} font-bold`}>
    {children}
  </span>
);

const roles: RoleListItems = [
  {
    name: "PlayStation",
    colour: "ps",
    id: "608396947795083274",
  },
  {
    name: "Xbox",
    colour: "xb",
    id: "609447212925190147",
  },
];

const eventsTeam: RoleListItem = {
  name: "Events Team",
  colour: "red-300",
  description:
    "The Events Team are the masterminds behind the creative activities that bring us together in game. They help plan, organize and host crew events.",
  id: "",
};

interface EventsProps {
  helperRoles: RoleListItems;
}

const Events: React.FC<EventsProps> = ({ helperRoles }) => (
  <>
    <p>
      These are our current{" "}
      <RouteLink to="/gta-online" title="Grand Theft Auto" bold>
        GTA Online
      </RouteLink>{" "}
      events that run throughout the week. We have chaos, races and, most of
      all, fun!
    </p>
    <p>
      We&apos;re getting into regular{" "}
      <b>
        <RouteLink to="/red-dead" title="Red Dead Redeption" bold>
          Red Dead
        </RouteLink>
      </b>{" "}
      events such as Fight Clubs, Wagon Racing and Weekly Challenges.
    </p>

    <SectionTitle type="h3">Our Events</SectionTitle>

    <EventCard title="Purge Night" src="purge.jpg" width={828} height={439}>
      This is a public service announcement: the <b>purge</b> will begin in one
      hour.
    </EventCard>

    <EventCard title="Triathlon" src="triathlon.jpg" width={960} height={536}>
      In a test of endurance, contestants will swim, cycle then run. The first
      to the finish line gets the <Role>Ninja Warrior</Role> role. They might
      need a new controller though after extreme button mashing.
    </EventCard>

    <EventCard title="GPAD Grand Prix" src="f1.jpg" width={1044} height={572}>
      GPAD&apos;s Grand Prix takes place on 8 tracks from around the world.
      Racers will compete for the podium in their very own Open Wheel
      vehicle.The winner of <b>each race</b> get&apos;s an extra special{" "}
      <Role gp>Grand Prix</Role> role.
    </EventCard>

    <EventCard title="Fight Club" src="fightclub.jpg" width={960} height={536}>
      At undisclosed locations our fighters meet and start smacking down one
      another until there is only one left. Best puncher gets the{" "}
      <Role>Golden Gloves</Role> role
    </EventCard>

    <EventCard
      title="Drag Racing"
      src="dragracing.jpg"
      width={960}
      height={536}
    >
      Racers compete with friends/mortal enemies to see who gets to the finish
      line first. Winner gets the <Role>Fast & Furious</Role> role
    </EventCard>

    <EventCard title="Top Gear" src="topgear.jpg" width={750} height={419}>
      We gather car lovers to show off their beauties in a specific class or
      theme. Cars are judged by their looks and how good their drivers are.
      Winner gets the <Role>Prettiest Pistons</Role> role
    </EventCard>

    <EventCard
      title="Fashion Show"
      src="fashionshow.jpg"
      width={611}
      height={343}
    >
      With a given theme, our crew members dress up nicely and accordingly to be
      judged. Best dressed gets the <Role>Fashion Police</Role> role
    </EventCard>

    <EventCard title="Bonus Event" src="bonus.jpg" width={3840} height={2160}>
      With the <b>Rockstar Newswire</b> out, we host a playlist full of jobs
      that are paying out Double (or Triple) GTA$ & RP.
    </EventCard>

    <EventCard
      title="Monday Mayhem"
      src="mondaymayhem.jpg"
      width={3840}
      height={2160}
    >
      This event is the chaos and rampage that can only be found in{" "}
      <b>Last Team Standing</b>. Players compete in teams in several jobs from
      Social Club.
    </EventCard>

    {helperRoles &&
      helperRoles.map(({ colour, description, members, name }) => (
        <Card padding key={`helper-role-${name}`}>
          <SectionTitle type="h3" className={`text-${colour}`}>
            {name}
          </SectionTitle>
          <p>{description}</p>

          <div className="grid grid-cols-4 place-items-center py-4 gap-4">
            {members &&
              members.map((member) => (
                <MemberImage
                  key={`helper-role-${name}-${member.id}`}
                  member={member}
                  colour={colour}
                />
              ))}
          </div>
        </Card>
      ))}
  </>
);

export const getStaticProps: GetStaticProps<EventsProps> = async () => {
  const helperRoles = await getMembersByRole(roles.map((role) => role.id))
    .then((rolesWithMembers) => [
      {
        ...eventsTeam,
        members: rolesWithMembers.reduce(
          (members, role) => [...members, ...role.members],
          []
        ),
      },
    ])
    .catch((error) => {
      console.error(error);
      return [];
    });

  return { props: { helperRoles }, revalidate: 3600 };
};

export default Events;
