import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DiscordInvite, Picture } from "components"
import React from "react"

const WallOfFame: React.FC = () => {
    return (
        <div className="mx-4 mt-4 flex flex-col md:items-center">
            <p>
                GPAD&apos;s finest moments are shown here through weekly photo
                contest winners.{" "}
                <DiscordInvite tag="wof">
                    Join GPAD
                    <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="text-pink-400 ml-1"
                        size="xs"
                    />
                </DiscordInvite>{" "}
                to enter and see the rest of our Wall of Fame.
            </p>

            {/* <p>Click for the big picture!</p> */}

            <Picture
                src="759756302380826634.jpg"
                title="K8Tlouboo89"
                subtitle="Meme Contest"
                width={692}
                height={977}
            />

            <Picture
                src="757577343916310548.jpg"
                title="MaffooDeSheepy"
                subtitle="BMX Photo Contest - A new performer"
                width={1280}
                height={720}
            />

            <Picture
                src="756167857284579498.jpg"
                title=".ThatSTiGuy555"
                subtitle="Aircraft Photo contest - Big Bertha never fails"
                width={845}
                height={475}
            />

            <Picture
                src="747088085300543498.jpg"
                title="xBurky96x"
                subtitle="Cars under 400k (base price) - Beach life"
                width={845}
                height={475}
            />

            <Picture
                src="746775408095133776.jpg"
                title="DTandFriend"
                subtitle="Summer vibes (New DLC) - Everybody knows hot tubs are the best"
                width={667}
                height={536}
            />

            <Picture
                src="746775362947514538.jpg"
                title="Stormbreaker3200"
                subtitle="Summer vibes (New DLC) - What's more awesome than riding a jetski at sunset?"
                width={960}
                height={536}
            />

            <Picture
                src="742031469110624287.jpg"
                title="first_rogue_kage"
                subtitle="Best GPAD Memory Contest"
                width={960}
                height={536}
            />

            <Picture
                src="739502668296224829.jpg"
                title="frankdbluth"
                subtitle="Pet Photo Contest"
                width={3024}
                height={4032}
            />

            <Picture
                src="736932110094434334.jpg"
                title="xBurky96x"
                subtitle="Prettiest Piston - The Amazing Albany Hermes"
                width={960}
                height={536}
            />

            <Picture
                src="736932246765830194.jpg"
                title="GroundElm257604"
                subtitle="Prettiest Piston - Full brightness makes it look 100% better"
                width={2182}
                height={1077}
            />

            <Picture
                src="736932389061787698.jpg"
                title=".ThatSTiGuy555"
                subtitle="Prettiest Piston - Just a banshee doing banshee things"
                width={3840}
                height={2160}
            />
        </div>
    )
}

export default WallOfFame
