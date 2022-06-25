import { SectionTitle } from "components/primitives";
import {
  descriptions,
  mappedStaffProfiles,
  Profiles,
} from "components/Profile";
import { getStaffProfiles } from "helpers/api";
import { GetStaticProps } from "next";
import React, { Fragment } from "react";
import { Role } from "types";

interface MeetTheStaffProps {
  profileRows: Role[];
}

const MeetTheStaff: React.FC<MeetTheStaffProps> = ({ profileRows }) => (
  <>
    {profileRows.map((role, index, array) => {
      return (
        <Fragment key={`profile-row-${index}`}>
          <div className="mb-4">
            <SectionTitle>{role.name}</SectionTitle>
            <p>{descriptions[role.id]}</p>
          </div>
          <Profiles role={role} />

          {index !== array.length - 1 ? (
            <hr className="my-4 border-gray-700" />
          ) : null}
        </Fragment>
      );
    })}
  </>
);

export const getStaticProps: GetStaticProps<MeetTheStaffProps> = async () => {
  const staffProfiles = await getStaffProfiles();

  return {
    props: { profileRows: mappedStaffProfiles(staffProfiles) },
    revalidate: 3600,
  };
};

export default MeetTheStaff;
