import { isEven } from "lib/helpers/misc";
import React from "react";

export interface AchievementTableProps {
  tableData: { role: string; desc: string }[];
  colour: string;
}

export const AchievementTable: React.FC<AchievementTableProps> = ({
  tableData,
  colour,
}) => (
  <table className="table-fixed border border-background w-full">
    <tbody>
      {tableData.map(({ role, desc }, ndx) => (
        <tr
          key={`${role.replace(" ", "_")}-${ndx}`}
          className={`
                     ${isEven(ndx) ? "bg-background bg-opacity-25" : ""}`}
        >
          <td className={`align-text-top font-bold py-1 pl-1 text-${colour}`}>
            {role}
          </td>
          <td className="align-text-top py-1 pl-1 max-w-1/2">{desc}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
