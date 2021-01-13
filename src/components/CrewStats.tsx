import { faPlaystation, faXbox } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getMembercount } from "helpers/api"
import { DateTime } from "luxon"
import React, { useEffect, useState } from "react"
import { Card } from "~components"
import { SectionTitle } from "~primitives"

interface MemberCounts {
    ps: number
    xbox: number
    lastUpdate: string
}

export const CrewStats: React.FC = () => {
    const [memberCounts, setMemberCounts] = useState<MemberCounts>()

    useEffect(() => {
        getMembercount().then(({ ps, xbox, lastUpdate }) => {
            const timeAgo = DateTime.fromISO(lastUpdate)
                .toRelative({ style: "short", round: true })
                ?.toString()
            setMemberCounts({ ps, xbox, lastUpdate: timeAgo ?? "" })
        })
    }, [])

    return (
        <Card className="m-4">
            <SectionTitle type="h4" className="text-center mb-4">
                Our Membership
            </SectionTitle>
            <div className="flex flex-row justify-center items-center text-2xl font-bold font-mono">
                <div className="text-ps pr-4">
                    <FontAwesomeIcon icon={faPlaystation} className="mr-2" />
                    {memberCounts?.ps ?? "..."}
                </div>
                <div className="text-xb pl-4">
                    <FontAwesomeIcon icon={faXbox} className="mr-2" />
                    {memberCounts?.xbox ?? "..."}
                </div>
            </div>
            <div className="text-gray-500 text-xs text-right mt-4">
                {memberCounts?.lastUpdate
                    ? `updated ${memberCounts.lastUpdate}`
                    : "..."}
            </div>
        </Card>
    )
}
