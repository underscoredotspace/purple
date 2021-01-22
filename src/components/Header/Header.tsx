import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MemberImage from "components/MemberImage"
import { getUser, Member } from "helpers/api"
import { useContext, useEffect, useState } from "react"
import { setLoggedIn, SiteContext } from "store"
import Logo from "./Logo"
import MenuToggle from "./MenuToggle"
import Meta from "./Meta"
import SocialCard from "./SocialCard"
import Title from "./Title"

export const Header: React.FC = () => {
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

    // useEffect(() => {
    //     setMember({
    //         member_id: "325265753773178881",
    //         avatar: "bfbfbf85396bbf673593f3f51ab4d584",
    //         username: "colin",
    //     })
    // }, [])

    return (
        <header
            className={`fixed h-16 w-screen bg-background px-6 shadow-sm flex justify-between items-center z-30 space-x-4 ${
                state.menuVisible ? "bg-opacity-95" : "bg-opacity-50"
            } bg-blur`}
        >
            <SocialCard />
            <Meta />

            <Logo />
            <Title />
            {member && (
                <MemberImage
                    size={32}
                    member={member}
                    title={`You're logged in as ${member.username}`}
                    className="border border-copy border-opacity-50"
                />
            )}
            {!member && state.loggedIn && (
                <div className="animate-pulse border border-copy border-opacity-50 rounded-full w-8 h-8 flex justify-center items-center flex-shrink-0">
                    <FontAwesomeIcon icon={faUser} />
                </div>
            )}
            <MenuToggle />
        </header>
    )
}
