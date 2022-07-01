import { Card } from "components";
import MemberImage from "components/MemberImage";
import { LazyImage, RouteLink, SectionTitle } from "components/primitives";
import { env } from "lib/helpers";
import { getMembersByRole } from "lib/helpers/api";
import { RoleListItems } from "lib/types";
import { GetStaticProps } from "next";
import React from "react";

const roles: RoleListItems = [
  {
    name: "Veteran Crew",
    colour: "purple-400",
    id: "608388097285161131",
    description:
      "Veterans have demonstrated their knowledge of different games and have proven that they are willing to help the crew in any way possible. They monitor chats, assist new members, answer questions, and offer advice. ",
  },
  {
    name: "Admissions Team",
    colour: "pink-300",
    id: "977016052804366366",
    description:
      "The first point of contact for prospective members. They handle the process of everyone becoming part of the family. ",
  },
];

interface AboutTheCrewProps {
  helperRoles: RoleListItems;
}

const AboutTheCrew: React.FC<AboutTheCrewProps> = ({ helperRoles }) => (
  <>
    <p>
      GPAD started out as a{" "}
      <RouteLink to="/gta-online" title="GTA Online" bold>
        <b>GTA Online</b>
      </RouteLink>{" "}
      crew but has now become something much bigger. Our{" "}
      <RouteLink to="/red-dead" title="Red Dead Redemption">
        <b>Red Dead</b>
      </RouteLink>{" "}
      expansion has taken off and as{" "}
      <RouteLink to="/other-games" title="Other Games">
        other games
      </RouteLink>{" "}
      became popular, we&apos;ve given our community options for those games as
      well.
    </p>
    <p>
      <b>GPAD</b> is a gaming community, but we also care about much more than
      that. You can enjoy discussing food, people can talk about health &amp;
      fitness, share amazing travel photos and more!
    </p>

    <LazyImage
      src={`${env.ASSETS}/640/640__614274821722865681.jpg`}
      alt=""
      width={960}
      height={536}
      data-credit="Brooks5566"
    />

    <p>
      We may have started out as a gaming server, but you wont find a family
      like <b>GPAD</b> anywhere.
    </p>

    {helperRoles.length > 0 && (
      <>
        <SectionTitle>Keeping the Show Running</SectionTitle>
        <p>
          The crew wouldn&apos;t be the same without the members that help keep
          the wheels turning.
        </p>

        {helperRoles?.map(({ colour, description, members, name }) => (
          <Card padding key={`helper-role-${name}`}>
            <SectionTitle type="h3" className={`text-${colour}`}>
              {name}
            </SectionTitle>
            <p>{description}</p>

            <div className="grid grid-cols-5 place-items-center py-8 gap-4">
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
    )}
  </>
);

export const getStaticProps: GetStaticProps<AboutTheCrewProps> = async () => {
  const helperRoles = await getMembersByRole(roles.map((role) => role.id))
    .then((rolesWithMembers) => {
      return roles.map((role) => ({
        ...role,
        members: rolesWithMembers.find((r) => {
          return r?.id === role?.id;
        })?.members,
      }));
    })
    .catch((error) => {
      console.error(error);
      return [];
    });

  return { props: { helperRoles }, revalidate: 3600 };
};

export default AboutTheCrew;
