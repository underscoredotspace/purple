import { env } from "helpers"
import { ParsedUrlQueryInput, stringify } from "querystring"
import { Role, User } from "types"

export const qs = (queryObject?: ParsedUrlQueryInput): string =>
    stringify(queryObject)

const apiUrl = (endpoint: string, qs?: string) =>
    `${env.API_URL}/${endpoint}?${qs}`

const fetchJSON = (endpoint: string, query?: ParsedUrlQueryInput) =>
    fetch(apiUrl(endpoint, qs(query)), {
        credentials: "include",
    }).then((res) => res.json())

export async function getMembercount(): Promise<{
    ps: number
    xbox: number
}> {
    const { "GTA-PS": PS, "GTA-XBOX": XBOX } = await fetchJSON("member-count")

    return { ps: Number(PS), xbox: Number(XBOX) }
}

export const getUser = (): Promise<User> => fetchJSON("auth/user")

export const getMembersByRole = (roleIds: string[]): Promise<Role[]> =>
    fetchJSON("member", { roleIds })

export const getStaffProfiles = (): Promise<Role[]> =>
    fetchJSON("profile", {
        roleIds: [
            "568141992794783749",
            "549644467498516508",
            "546342033867014165",
        ],
    })
