import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MemberImage from "components/MemberImage";
import { SiteContext } from "lib/store";
import React, { useContext } from "react";

const ProfileImage: React.FC = () => {
  const { state } = useContext(SiteContext);

  if (state.user) {
    return (
      <MemberImage
        size={32}
        member={
          state.member ?? {
            id: state.user.userid,
            username: state.user.username,
            avatar: state.user.avatar,
          }
        }
        title={`You're logged in as ${state.user.username}`}
        className="border border-copy border-opacity-50 flex-shrink-0"
      />
    );
  }
  if (state.loggedIn) {
    return (
      <div className="animate-pulse border border-copy border-opacity-50 rounded-full w-8 h-8 flex justify-center items-center flex-shrink-0">
        <FontAwesomeIcon icon={faUser} />
      </div>
    );
  }

  return null;
};

export default ProfileImage;
