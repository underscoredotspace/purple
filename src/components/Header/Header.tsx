import MemberImage from "components/MemberImage"
import { getUser, Member } from "helpers/api"
import { useContext, useEffect, useState } from "react"
import { SiteContext } from "store"
import Logo from "./Logo"
import MenuToggle from "./MenuToggle"
import Meta from "./Meta"
import SocialCard from "./SocialCard"
import Title from "./Title"

export const Header: React.FC = () => {
    const { state } = useContext(SiteContext)
    const [member, setMember] = useState<Omit<Member, "role_id">>()

    useEffect(() => {
        if (state.loggedIn) {
            getUser().then(setMember)
        }
    }, [state.loggedIn])

    return (
        <header
            className={`fixed h-16 w-screen bg-background px-6 shadow-sm flex justify-between items-center z-30 ${
                state.menuVisible ? "bg-opacity-95" : "bg-opacity-50"
            } bg-blur`}
        >
            <SocialCard />
            <Meta />

            <Logo />
            <Title />
            {member && <MemberImage member={member} />}
            <MenuToggle />
        </header>
    )
}
