import { SectionTitle } from "components/primitives";
import {
  descriptions,
  mappedStaffProfiles,
  Profiles,
} from "components/Profile";
import { getStaffProfiles } from "helpers/api";
import { GetServerSideProps } from "next";
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

export const getServerSideProps: GetServerSideProps<MeetTheStaffProps> = async ({
  res,
}) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const staffProfiles = await getStaffProfiles();

  return { props: { profileRows: mappedStaffProfiles(staffProfiles) } };
};

export default MeetTheStaff;
