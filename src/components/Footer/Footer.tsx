import {
    faInstagram,
    faRedditAlien,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { DiscordInvite } from "~components"
import { env } from "~helpers"
import SocialLink from "./SocialLink"

export const Footer: React.FC = () => (
    <footer className="flex flex-row justify-around mt-4 py-4 px-4 bg-card border-t-2 items-center">
        <div className="flex flex-col items-center flex-1">
            <Image
                src={`${env.ASSET}/logo.png`}
                alt="GPAD Logo"
                className="mb-1"
                width={96}
                height={96}
            />
            <span
                className="text-s text-center"
                title="Did I stutter? Yes, Payd."
            >
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
            <SocialLink
                href="https://reddit.com/r/GPAD/"
                title="GPAD's Subreddit - r/GPAD"
                icon={faRedditAlien}
                text="Reddit"
            />
            <SocialLink
                href="https://youtu.be/channel/UCOKVvuWN-cf63XkXJuYmirQ"
                title="GPAD's YouTube Channel"
                icon={faYoutube}
                text="YouTube"
            />
            <SocialLink
                href="https://twitter.com/GPADCrew"
                title="GPAD's Twitter"
                icon={faTwitter}
                text="Twitter"
            />
            <SocialLink
                href="https://instagr.am/gpadcrew"
                title="GPAD's Instagram"
                icon={faInstagram}
                text="Instagram"
            />
        </div>
    </footer>
)