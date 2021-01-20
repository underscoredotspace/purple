import { Card } from "components"
import MemberImage from "components/MemberImage"
import { LazyImage, RouteLink, SectionTitle } from "components/primitives"
import { env } from "helpers"
import { getMembersByRole, Member } from "helpers/api"
import React, { useEffect, useState } from "react"

export interface Role {
    id: string
    description: string
    members?: Member[]
    colour: string
}

const roles: Record<string, Role> = {
    "Veteran Crew": {
        colour: "vet",
        id: "608388097285161131",
        description:
            "Veterans have demonstrated their knowledge of different games and have proven that they are willing to help the crew in any way possible. They monitor chats, assist new members, answer questions, and offer advice. ",
    },
    "Admissions Team": {
        colour: "admissions",
        id: "568174092977700866",
        description:
            "The first point of contact for prospective members. They handle the process of everyone becoming part of the family. ",
    },
}

const AboutTheCrew: React.FC = () => {
    const [helperRoles, setHelperRoles] = useState<Record<string, Role>>()

    useEffect(() => {
        Promise.all(
            Object.entries(roles).map(([name, role]) =>
                getMembersByRole(role.id).then((members) => ({
                    id: role.id,
                    name,
                    members,
                    description: role.description,
                    colour: role.colour,
                }))
            )
        )
            .then((m) => {
                setHelperRoles(
                    m.reduce(
                        (acc, { id, name, members, description, colour }) => {
                            acc[name] = { id, description, members, colour }
                            return acc
                        },
                        {} as Record<string, Role>
                    )
                )
            })
            .catch((error) => {
                console.error(error)
                setHelperRoles(undefined)
            })
    }, [])

    return (
        <>
            <p>
                GPAD started out as a{" "}
                <RouteLink to="/gta-online" title="GTA Online" bold>
                    <b>GTA Online</b>
                </RouteLink>{" "}
                crew but has now become something much bigger. Our{" "}
                <RouteLink to="/red-dead" title="Red Dead Redemption">
                    <b>Red Dead</b>
                </RouteLink>{" "}
                expansion has taken off and as{" "}
                <RouteLink to="/other-games" title="Other Games">
                    other games
                </RouteLink>{" "}
                became popular, we&apos;ve given our community options for those
                games as well.
            </p>
            <p>
                <b>GPAD</b> is a gaming community, but we also care about much
                more than that. You can enjoy discussing food, people can talk
                about health &amp; fitness, share amazing travel photos and
                more!
            </p>

            <LazyImage
                src={`${env.ASSETS}/640/640__614274821722865681.jpg`}
                alt=""
                width={960}
                height={536}
                data-credit="Brooks5566"
            />

            <p>
                We may have started out as a gaming server, but you wont find a
                family like <b>GPAD</b> anywhere.
            </p>

            <SectionTitle>Keeping the Show Running</SectionTitle>
            <p>
                The crew wouldn&apos;t be the same without the members that help
                keep the wheels turning.
            </p>
            {helperRoles &&
                Object.entries(helperRoles).map(
                    (
                        [roleName, { members, description, colour }],
                        ndx,
                        arr
                    ) => (
                        <Card
                            key={`helper-role-${roleName}`}
                            className={
                                ndx !== arr.length - 1 ? "mb-4" : undefined
                            }
                        >
                            <SectionTitle
                                type="h3"
                                className={`text-${colour}`}
                            >
                                {roleName}
                            </SectionTitle>
                            <p>{description}</p>

                            {members &&
                                members.map((member) => (
                                    <MemberImage
                                        key={`helper-role-${roleName}-${member.member_id}`}
                                        member={member}
                                        colour={colour}
                                    />
                                ))}
                        </Card>
                    )
                )}
        </>
    )
}

export default AboutTheCrew
