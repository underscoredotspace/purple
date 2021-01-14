import { YouTube } from "components"
import { LazyImage, SectionTitle } from "components/primitives"
import { env } from "helpers"
import React from "react"

const GTAOnline: React.FC = () => (
    <>
        <div className="m-4">
            <p>
                Roll with us through the streets of Los Santos and Blane County.
                Whether your choice of ride is a Trashmaster, a Faggio or an
                Opressor Mk2 you&apos;ll feel welcome sourcing and selling with
                us.
            </p>
        </div>
        <LazyImage
            src={`${env.ASSETS}/640/640__613220764166127616.jpg`}
            alt="Some of the Crew chilling on Mt. Chilead"
            width={1591}
            height={1080}
            data-credit="billfrank85"
            className="mx-auto"
        />
        <div className="m-4">
            <p>
                <b>GTA Online</b> is the reason the crew was founded and is our
                core game. We have a custom Discord bot that automates a sales
                queue system, so when LJT is harassing you to sell, we&apos;re
                ready for your buggies or mail trucks.
            </p>
        </div>

        <YouTube videoId="i55hcnoRLPE" title="GTA Online" />
        <div className="m-4">
            <SectionTitle type="h3">Money Making Guides</SectionTitle>
            <p>
                We have <b>tons</b> of guides to help you get the Benjamins,
                full of tips and tricks for all types of mission and heists. Our
                new <b>In Depth</b> series will get you through your car
                sourcing and MC sales better than ever.
            </p>
        </div>
    </>
)

export default GTAOnline
