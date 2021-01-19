import { Card } from "components"
import MemberImage from "components/MemberImage"
import { LazyImage, RouteLink, SectionTitle } from "components/primitives"
import { env } from "helpers"
import { getMembersByRole, Member } from "helpers/api"
import React, { useEffect, useState } from "react"

interface EventsRole {
    id: string
    colour: string
    members?: Member[]
}

const Role: React.FC<{ gp?: boolean }> = ({ children, gp }) => (
    <span className={`${gp ? "text-green-400" : "text-green-600"} font-bold`}>
        {children}
    </span>
)

const Events: React.FC = () => {
    const [eventsRoles, setEventsRoles] = useState<Record<string, EventsRole>>()

    const roles: Record<string, EventsRole> = {
        PlayStation: {
            colour: "ps",
            id: "608396947795083274",
        },
        XBox: {
            colour: "xb",
            id: "609447212925190147",
        },
    }

    useEffect(() => {
        Promise.all(
            Object.entries(roles).map(([name, role]) =>
                getMembersByRole(role.id).then((members) => ({
                    id: role.id,
                    name,
                    members,
                    colour: role.colour,
                }))
            )
        )
            .then((m) => {
                setEventsRoles(
                    m.reduce((acc, { id, name, members, colour }) => {
                        acc[name] = { id, members, colour }
                        return acc
                    }, {} as Record<string, EventsRole>)
                )
            })
            .catch(console.error)
    }, [])

    return (
        <div className="m-4 flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-start">
                <div className="mb-4 md:mr-4 max-w-xl">
                    <div className="mb-4">
                        <p>
                            These are our current{" "}
                            <RouteLink
                                to="/gta-online"
                                title="Grand Theft Auto"
                                bold
                            >
                                GTA Online
                            </RouteLink>{" "}
                            events that run throughout the week. We have chaos,
                            races and, most of all, fun!
                        </p>
                        <p>
                            We&apos;re getting into regular{" "}
                            <b>
                                <RouteLink
                                    to="/red-dead"
                                    title="Red Dead Redeption"
                                    bold
                                >
                                    Red Dead
                                </RouteLink>
                            </b>{" "}
                            events such as Fight Clubs, Wagon Racing and Weekly
                            Challenges.
                        </p>
                    </div>
                </div>
                {/* <Card className="flex-shrink-0 self-center max-w-5xl">
                    <SectionTitle type="h3">Event Calendar</SectionTitle>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?height=600&amp;ctz=America%2FNew_York&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=Z3BhZC5wcy54Ym94QGdtYWlsLmNvbQ&amp;color=%23F4511E&amp;mode=AGENDA&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTitle=0&amp;showDate=0"
                        height="300"
                        frameBorder="0"
                        scrolling="no"
                        title="GPAD Events Calendar"
                        className="border-none w-full"
                    />
                </Card> */}
            </div>
            <div className="max-w-xl">
                <SectionTitle type="h3">Our Events</SectionTitle>

                <Card nopadding className="flex flex-col mb-4">
                    <SectionTitle
                        nopadding
                        type="h4"
                        className="bg-blue-900 p-2 text-center"
                    >
                        Purge Night
                    </SectionTitle>
                    <div className="mt-0 border-t border-b border-gray-500">
                        <LazyImage
                            src={`${env.ASSETS}/640/640__events_purge.jpg`}
                            width={828}
                            height={439}
                            alt="Purge Night"
                        />
                    </div>
                    <p className="mx-4 my-2">
                        This is a public service announcement: the <b>purge</b>{" "}
                        will begin in one hour.
                    </p>
                </Card>

                <Card nopadding className="flex flex-col mb-4">
                    <SectionTitle
                        nopadding
                        type="h4"
                        className="bg-blue-900 p-2 text-center"
                    >
                        Triathlon
                    </SectionTitle>
                    <div className="mt-0 border-t border-b border-gray-500">
                        <LazyImage
                            src={`${env.ASSETS}/640/640__events_triathlon.jpg`}
                            width={960}
                            height={536}
                            alt="Triathlon"
                        />
                    </div>
                    <p className="mx-4 my-2">
                        In a test of endurance, contestants will swim, cycle
                        then run. The first to the finish line gets the{" "}
                        <Role>Ninja Warrior</Role> role. They might need a new
                        controller though after extreme button mashing.
                    </p>
                </Card>

                <Card nopadding className="flex flex-col mb-4">
                    <SectionTitle
                        nopadding
                        type="h4"
                        className="bg-blue-900 p-2 text-center"
                    >
                        GPAD Grand Prix
                    </SectionTitle>
                    <div className="mt-0 border-t border-b border-gray-500">
                        <LazyImage
                            src={`${env.ASSETS}/640/640__events_f1.jpg`}
                            width={1044}
                            height={572}
                            alt="GPAD Grand Prix"
                        />
                    </div>
                    <p className="mx-4 my-2">
                        GPAD&apos;s Grand Prix takes place on 8 tracks from
                        around the world. Racers will compete for the podium in
                        their very own Open Wheel vehicle. The winner of{" "}
                        <b>each race</b> get&apos;s an extra special{" "}
                        <Role gp>Grand Prix</Role> role.
                    </p>
                </Card>

                <Card nopadding className="flex flex-col mb-4">
                    <SectionTitle
                        nopadding
                        type="h4"
                        className="bg-blue-900 p-2 text-center"
                    >
                        Fight Club
                    </SectionTitle>
                    <LazyImage
                        src={`${env.ASSETS}/640/640__events_fightclub.jpg`}
                        width={960}
                        height={536}
                        alt="Fight Club"
                        className="mt-0 border-t border-b border-gray-500"
                    />
                    <p className="mx-4 my-2">
                        At undisclosed locations our fighters meet and start
                        smacking down one another until there is only one left.
                        Best puncher gets the <Role>Golden Gloves</Role> role
                    </p>
                </Card>

                <Card nopadding className="flex flex-col mb-4">
                    <SectionTitle
                        nopadding
                        type="h4"
                        className="bg-blue-900 p-2 text-center"
                    >
                        Drag Racing
                    </SectionTitle>
                    <LazyImage
                        src={`${env.ASSETS}/640/640__events_dragracing.jpg`}
                        width={960}
                        height={536}
                        alt="Drag Race"
                        className="mt-0 border-t border-b border-gray-500"
                    />
                    <p className="mx-4 my-2">
                        Racers meet at certain locations to start competing with
                        their opponents to see who gets to the finish line
                        first. Winner gets the <Role>Fast & Furious</Role> role
                    </p>
                </Card>

                <Card nopadding className="flex flex-col mb-4">
                    <SectionTitle
                        nopadding
                        type="h4"
                        className="bg-blue-900 p-2 text-center"
                    >
                        Top Gear
                    </SectionTitle>
                    <LazyImage
                        src={`${env.ASSETS}/640/640__events_topgear.jpg`}
                        width={750}
                        height={419}
                        alt="Top Gear"
                        className="mt-0 border-t border-b border-gray-500"
                    />
                    <p className="mx-4 my-2">
                        We gather car lovers to show off their beauties in a
                        specific class or theme. Cars are judged by their looks
                        and how good their drivers are. Winner gets the{" "}
                        <Role>Prettiest Pistons</Role> role
                    </p>
                </Card>

                <Card nopadding className="flex flex-col mb-4">
                    <SectionTitle
                        nopadding
                        type="h4"
                        className="bg-blue-900 p-2 text-center"
                    >
                        Fashion Show
                    </SectionTitle>
                    <LazyImage
                        src={`${env.ASSETS}/640/640__events_fashionshow.jpg`}
                        width={611}
                        height={343}
                        alt="Fashion Show"
                        className="mt-0 border-t border-b border-gray-500"
                    />
                    <p className="mx-4 my-2">
                        With a given theme, our crew members dress up nicely and
                        accordingly to be judged. Best dressed gets the{" "}
                        <Role>Fashion Police</Role> role
                    </p>
                </Card>

                <Card nopadding className="flex flex-col mb-4">
                    <SectionTitle
                        nopadding
                        type="h4"
                        className="bg-blue-900 p-2 text-center"
                    >
                        Bonus Event
                    </SectionTitle>
                    <LazyImage
                        src={`${env.ASSETS}/640/640__events_bonus.jpg`}
                        width={3840}
                        height={2160}
                        alt="Bonus Event"
                        className="mt-0 border-t border-b border-gray-500"
                    />
                    <p className="mx-4 my-2">
                        With the <b>Rockstar Newswire</b> out, we host a
                        playlist full of jobs that are paying out Double (or
                        Triple) GTA$ & RP.
                    </p>
                </Card>

                <Card nopadding className="flex flex-col mb-4">
                    <SectionTitle
                        nopadding
                        type="h4"
                        className="bg-blue-900 p-2 text-center"
                    >
                        Monday Mayhem
                    </SectionTitle>
                    <LazyImage
                        src={`${env.ASSETS}/640/640__events_mondaymayhem.jpg`}
                        width={3840}
                        height={2160}
                        alt="Monday Mayhem"
                        className="mt-0 border-t border-b border-gray-500"
                    />
                    <p className="mx-4 my-2">
                        This event is the chaos and rampage that it can only be
                        found in <b>Last Team Standing</b>. Players compete in
                        teams in several jobs from Social Club.
                    </p>
                </Card>
            </div>

            <Card>
                <SectionTitle type="h3" className="text-events">
                    The Event Coordinators
                </SectionTitle>
                <p>
                    Event coordinators are the masterminds behind the creative
                    activities that bring us together in game. They help plan,
                    organize and host crew events.
                </p>
                <div className="flex flex-row flex-wrap min-w-0">
                    {eventsRoles &&
                        Object.entries(
                            eventsRoles
                        ).map(([roleName, { members, colour }]) =>
                            members?.map((member) => (
                                <MemberImage
                                    key={`helper-role-${roleName}-${member.member_id}`}
                                    member={member}
                                    colour={colour}
                                />
                            ))
                        )}
                </div>
            </Card>
        </div>
    )
}

export default Events
