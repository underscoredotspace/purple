/* eslint-disable @typescript-eslint/no-explicit-any */
import { env } from "helpers"
import { ParsedUrlQueryInput, stringify } from "querystring"
import { Member, Profile, Role, User } from "types"

export const qs = (queryObject?: ParsedUrlQueryInput): string =>
    stringify(queryObject)

const apiUrl = (endpoint: string, qs?: string) =>
    `${env.API_URL}/${endpoint}${qs ? `?${qs}` : ""}`

interface FetchJSONOptions {
    query?: any
    body?: any
    method?: "get" | "post"
}

type FetchJSON = (endpoint: string, options?: FetchJSONOptions) => Promise<any>

const fetchJSON: FetchJSON = (endpoint, { query, body, method } = {}) =>
    fetch(apiUrl(endpoint, query ? qs(query) : undefined), {
        method: method ?? "get",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    })
        .then((res) => res.json() as unknown)
        .catch(() => ({}))

export async function getMembercount(): Promise<{
    ps: number
    xbox: number
}> {
    const { "GTA-PS": PS, "GTA-XBOX": XBOX } = await fetchJSON("member-count")

    return { ps: Number(PS), xbox: Number(XBOX) }
}

export const getUser = (): Promise<User> => fetchJSON("auth/user")

export const getMembersByRole = (roleIds: string[]): Promise<Role[]> =>
    fetchJSON("member", { query: { roleIds } })

export const getProfile = (memberId: string): Promise<Member> =>
    fetchJSON(`profile/${memberId}`)

export const saveProfile = (profile: Profile): Promise<void> =>
    fetchJSON(`profile/${profile.id}`, { method: "post", body: profile })

export const getStaffProfiles = (): Promise<Role[]> =>
    fetchJSON("profile/by-role", {
        query: {
            roleIds: [
                "546342033867014165",
                "549644467498516508",
                "568141992794783749",
            ],
        },
    }).then((roles: Role[]) => roles.sort((a, b) => b.position - a.position))
