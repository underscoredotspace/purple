import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MemberImage from "components/MemberImage"
import { getUser, Member } from "helpers/api"
import React, { useContext, useEffect, useState } from "react"
import { setLoggedIn, SiteContext } from "store"

const ProfileImage: React.FC = () => {
    const { state, dispatch } = useContext(SiteContext)
    const [member, setMember] = useState<Omit<Member, "role_id">>()

    useEffect(() => {
        if (state.loggedIn) {
            getUser()
                .then(setMember)
                .catch(() => {
                    dispatch(setLoggedIn(false))
                })
        }
    }, [state.loggedIn])

    if (member) {
        return (
            <MemberImage
                size={32}
                member={member}
                title={`You're logged in as ${member.username}`}
                className="border border-copy border-opacity-50"
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
