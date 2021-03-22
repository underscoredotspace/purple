import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MemberImage from "components/MemberImage"
import React, { useContext } from "react"
import { SiteContext } from "store"

const ProfileImage: React.FC = () => {
    const { state } = useContext(SiteContext)

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
                className="w-8 h-8 border border-copy border-opacity-50"
            />
        )
    }
    if (state.loggedIn) {
        return (
            <div className="animate-pulse border border-copy border-opacity-50 rounded-full w-8 h-8 flex justify-center items-center flex-shrink-0">
                <FontAwesomeIcon icon={faUser} />
            </div>
        )
    }

    return null
}

export default ProfileImage
