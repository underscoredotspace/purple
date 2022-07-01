import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "components";
import { env } from "lib/helpers";
import { Member, Role } from "lib/types";
import React, { useState } from "react";
import { Pill } from "./primitives";

interface ProfileProps {
  member: Member;
  highestRole: Role;
}

const colours = {
  "568141992794783749": "staff",
  "546342033867014165": "admin",
  "549644467498516508": "mod",
  "977016052804366366": "pink-300", //admissions
  "fake-events-role": "red-300", // events 😉
  "572443602773344276": "sessionmaker", //session maker,
  "594361392090316811": "blue-200", //gta-ps
  "952965992466767883": "blue-200", //gta-ps5
  "594361443239985152": "green-200", //gta-xb
  "952966466473431061": "green-200", //gta-xb-xs
  "760089861822087178": "blue-200", //rdo-ps
  "764203700092534846": "green-200", //rdo-xb
  "930785647671799838": "yellow-200", //pc
};

const rolesToShow: string[] = [
  "fake-events-role", // events 😉
  "977016052804366366", //admissions
  "930785647671799838", //pc
  "594361392090316811", //gta-ps
  "952965992466767883", //gta-ps5
  "594361443239985152", //gta-xb
  "952966466473431061", //gta-xb-xs
  "760089861822087178", //rdo-ps
  "764203700092534846", //rdo-xb
];

function filterRoles(role: Role): boolean {
  return rolesToShow.includes(role.id);
}

type ProfileComponent = React.FC<ProfileProps>;

export const Profile: ProfileComponent = ({ member, highestRole }) => {
  const avatarURL = `https://cdn.discordapp.com/avatars/${member.id}/${
    member.avatar
  }.${member.avatar.startsWith("a_") ? "gif" : "png"}?size=64`;

  const [avatarPath, setAvatarPath] = useState(
    member?.profile?.picture
      ? `${env.ASSETS}/profiles/${member.profile.picture}`
      : avatarURL
  );

  const colour = colours[highestRole.id];

  return (
    <Card>
      <div
        className={[
          "border-b-4",
          `border-${colour}`,
          "border-opacity-50",
          "w-full",
          "font-bold",
          "uppercase",
          "tracking-widest",
          "py-1",
          "flex flex-row items-baseline justify-center",
        ].join(" ")}
      >
        {highestRole.name}
        {member.id === "468237949142827008" && (
          <FontAwesomeIcon icon={faCrown} className="text-yellow-400 ml-1" />
        )}
      </div>
      <div className="flex flex-col px-4 py-2">
        <img
          className={[
            "rounded-squircle",
            "w-20",
            "h-20",
            "mt-1",
            "mx-auto",
            "border-2",
            "border-opacity-50",
            `border-${colour}`,
          ].join(" ")}
          src={avatarPath}
          alt={member?.profile?.name ?? member.displayName}
          onError={() => setAvatarPath(`${env.ASSETS}/profiles/claude.png`)}
        />

        <div className="mx-auto pt-2 text-center">
          <div className="font-bold">
            {member?.profile?.name || member.displayName}
          </div>
          <div className="text-gray-500 text-sm">
            {member?.profile?.location}
          </div>
        </div>
      </div>

      {member?.profile?.bio && (
        <>
          <hr className="border-gray-700" />

          <div className="flex flex-col px-4 py-2 space-y-2">
            {member.profile.bio.split("\n").map((p, i) => (
              <p key={`bio-${member.id}-p${i}`}>{p}</p>
            ))}
          </div>
        </>
      )}

      <hr className="border-gray-700" />

      <div
        className={[
          "flex",
          "flex-row",
          "flex-wrap",
          // "justify-center",
          "px-4",
          "pt-2",
        ].join(" ")}
      >
        {member?.roles
          ?.filter(filterRoles)
          .sort((a, b) => b.position - a.position)
          .map((role) => (
            <Pill
              className={`mr-2 mb-2 bg-${
                colours[role.id] ?? "copy"
              } bg-opacity-80`}
              text={role.name}
              key={`role-${member.id}-${role.id}`}
            />
          ))}
      </div>
    </Card>
  );
};

export const Profiles: React.FC<{ role: Role }> = ({ role }) => (
  <div
    className={[
      "grid",
      "grid-cols-profile",
      "gap-4",
      "items-start",
      "justify-center",
    ].join(" ")}
  >
    {role.members.map((member) => (
      <Profile
        member={member}
        highestRole={role}
        key={`profile-${member.id}`}
      />
    ))}
  </div>
);

export const descriptions: Record<string, string> = {
  "568141992794783749":
    "The first point of call for disputes between crew members. They monitor Discord and lobbies, and resolve conflicts within crew.",
  "549644467498516508":
    "Monitor Discord and lobbies, enforce the rules, and have the ability to ban/mute/kick. They are second in command to the Admin.",

  "546342033867014165":
    "The top of the hierarchy, they make the rules once agreed upon with the staff, maintain the Discord server, and the Reddit page. Crew members should come to them if they have any issues, feedback for staff members or anything crew related.",
};

const eventRole: Role = {
  name: "Events",
  color: "fake-events-role",
  id: "fake-events-role",
  position: 1,
};

const eventRoles = [
  "609447212925190147", //events gta-xb
  "608396947795083274", //events gta-ps
  "760091219069763594", //events rdo-xb
  "760091432114716692", //events rdo-ps
];

export const mappedStaffProfiles = (staffRoles: Role[]): Role[] =>
  staffRoles.map((role) => ({
    ...role,
    members: role.members.map((member) => {
      if (member.roles.find(({ id }) => eventRoles.includes(id))) {
        return {
          ...member,
          roles: [
            ...member.roles.filter(({ id }) => !eventRoles.includes(id)),
            eventRole,
          ],
        };
      }
      return member;
    }),
  }));
