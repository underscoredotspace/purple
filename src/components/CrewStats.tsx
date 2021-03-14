import { faPlaystation, faXbox } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card } from "components"
import { SectionTitle } from "components/primitives"
import { getMembercount } from "helpers/api"
import { DateTime } from "luxon"
import React, { useEffect, useState } from "react"

interface MemberCounts {
    ps: number
    xbox: number
    lastUpdate: string
}

export const CrewStats: React.FC = () => {
    const [memberCounts, setMemberCounts] = useState<MemberCounts>()

    useEffect(() => {
        getMembercount()
            .then(({ ps, xbox, lastUpdate }) => {
                const timeAgo = DateTime.fromISO(lastUpdate)
                    .toRelative({ style: "short", round: true })
                    ?.toString()
                setMemberCounts({ ps, xbox, lastUpdate: timeAgo ?? "" })
            })
            .catch(console.error)
    }, [])

    return (
        <Card padding>
            <SectionTitle type="h4" className="text-center mb-4">
                Our Membership
            </SectionTitle>
            <div className="grid grid-cols-2 gap-4 place-items-center text-2xl font-bold font-mono">
                <div className="text-ps space-x-2">
                    <FontAwesomeIcon icon={faPlaystation} />
                    <span>{memberCounts?.ps ?? "..."}</span>
                </div>
                <div className="text-xb space-x-2">
                    <FontAwesomeIcon icon={faXbox} />
                    <span>{memberCounts?.xbox ?? "..."}</span>
                </div>
            </div>
            <div className="text-gray-500 text-xs text-right mt-4">
                updated every 6 hours
            </div>
        </Card>
    )
}
