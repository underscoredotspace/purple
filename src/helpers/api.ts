/* eslint-disable @typescript-eslint/no-explicit-any */
import { env } from "helpers"
import { ParsedUrlQueryInput, stringify } from "querystring"
import { Member, Permission, Profile, Role, User } from "types"

export const qs = (queryObject?: ParsedUrlQueryInput): string =>
    stringify(queryObject)

const apiUrl = (endpoint: string, qs?: string) =>
    `${env.API_URL}/${endpoint}${qs ? `?${qs}` : ""}`

interface FetchJSONOptions {
    query?: any
    body?: any
    method?: "get" | "post"
}

type FetchAPI = (endpoint: string, options?: FetchJSONOptions) => Promise<any>

const fetchAPI: FetchAPI = (endpoint, { query, body, method } = {}) =>
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
    const { "GTA-PS": PS, "GTA-XBOX": XBOX } = await fetchAPI("member-count")

    return { ps: Number(PS), xbox: Number(XBOX) }
}

export const getUser = (): Promise<User> => fetchAPI("auth/user")

export const getMembersByRole = (roleIds: string[]): Promise<Role[]> =>
    fetchAPI("member", { query: { roleIds } })

export const getProfile = (memberId: string): Promise<Member> =>
    fetchAPI(`profile/${memberId}`)

export const saveProfile = (profile: Profile): Promise<void> =>
    fetchAPI(`profile/${profile.id}`, { method: "post", body: profile })

export const getStaffProfiles = (): Promise<Role[]> =>
    fetchAPI("profile/by-role", {
        query: {
            roleIds: [
                "546342033867014165",
                "549644467498516508",
                "568141992794783749",
            ],
        },
    }).then((roles: Role[]) => roles.sort((a, b) => b.position - a.position))

export const getAllPermissions = (): Promise<{
    permissions: Permission[]
    roles: Role[]
}> => fetchAPI("auth/permission")
