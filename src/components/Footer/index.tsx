import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faRedditAlien,
    faYoutube,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { DiscordInvite } from "../../components"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { env } from "../../helpers"
import { Anchor } from "../primitives"

const Footer: React.FC = () => {
    const linkStyle =
        "p-1 my-1 hover:bg-background text-center text-sm border border-background rounded max-w-64 w-full flex items-center justify-center"

    return (
        <div className="flex flex-row justify-around mt-4 py-4 px-4 bg-card border-t-2 items-center">
            <div className="flex flex-col items-center flex-1">
                <img
                    src={`${env.ASSET}/logo.png`}
                    alt="GPAD Logo"
                    className="h-24 w-24 mb-1"
                />
                <span className="text-s text-center">
                    Gettin&apos; Payd Since 2019
                </span>
                <DiscordInvite className="extlink mt-2" tag="footer-logo">
                    Join GPAD
                    <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="text-pink-400 ml-1 text-sm"
                    />
                </DiscordInvite>
            </div>
            <div className="flex flex-col flex-1 items-center pl-2">
                <Anchor
                    bare
                    className={linkStyle}
                    href="https://reddit.com/r/GPAD/"
                    blank
                    title="GPAD's Subreddit - r/GPAD"
                >
                    <FontAwesomeIcon
                        icon={faRedditAlien}
                        className="pr-2 flex-shrink-0"
                        size="2x"
                    />
                    Reddit
                </Anchor>
                <Anchor
                    bare
                    className={linkStyle}
                    href="https://youtu.be/channel/UCOKVvuWN-cf63XkXJuYmirQ"
                    blank
                    title="GPAD's YouTube Channel"
                >
                    <FontAwesomeIcon
                        icon={faYoutube}
                        className="pr-2 flex-shrink-0"
                        size="2x"
                    />
                    YouTube
                </Anchor>
                <Anchor
                    bare
                    className={linkStyle}
                    href="https://twitter.com/GPADCrew"
                    blank
                    title="GPAD's Twitter"
                >
                    <FontAwesomeIcon
                        icon={faTwitter}
                        className="pr-2 flex-shrink-0"
                        size="2x"
                    />
                    Twitter
                </Anchor>
                <Anchor
                    bare
                    className={linkStyle}
                    href="https://instagr.am/gpadcrew"
                    blank
                    title="GPAD's Instagram"
                >
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className="pr-2 flex-shrink-0"
                        size="2x"
                    />
                    Instagram
                </Anchor>
            </div>
        </div>
    )
}

export default Footer
