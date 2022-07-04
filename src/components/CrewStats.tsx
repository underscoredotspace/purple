import { faPlaystation, faXbox } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "components";
import { SectionTitle } from "components/primitives";
import { MemberCounts } from "lib/types";
import { DateTime } from "luxon";
import React from "react";

export const CrewStats: React.FC<MemberCounts> = ({
  ps,
  xbox,
  lastUpdated,
}) => (
  <Card padding>
    <SectionTitle type="h4" className="text-center mb-4">
      Our Membership
    </SectionTitle>
    <div className="grid grid-cols-2 gap-4 place-items-center text-2xl font-bold font-mono">
      <div className="text-blue-200 space-x-2">
        <FontAwesomeIcon icon={faPlaystation} />
        <span>{ps ?? "..."}</span>
      </div>
      <div className="text-green-200 space-x-2">
        <FontAwesomeIcon icon={faXbox} />
        <span>{xbox ?? "..."}</span>
      </div>
    </div>
    <div className="text-gray-500 text-xs text-right mt-4">
      {`updated ${DateTime.fromJSDate(new Date(lastUpdated)).toRelative()}`}
    </div>
  </Card>
);
