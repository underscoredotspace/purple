import { env } from "helpers"
import { stringify } from "querystring"
import { Role, User } from "types"

type QueryObject = Record<
    string,
    | string
    | number
    | boolean
    | readonly string[]
    | readonly number[]
    | readonly boolean[]
>

export const qs = (queryObject?: QueryObject): string => stringify(queryObject)

const apiUrl = (endpoint: string, qs?: string) =>
    `${env.API_URL}/${endpoint}?${qs}`

const fetchJSON = (endpoint: string, query?: QueryObject) =>
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
    fetchJSON("members", { roleIds })

export const getStaffProfiles = (): Promise<Role[]> =>
    fetchJSON("profile", {
        roleIds: [
            "568141992794783749",
            "549644467498516508",
            "546342033867014165",
        ],
    })
