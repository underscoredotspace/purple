import { env } from "helpers"

const apiUrl = (endpoint: string) => `${env.API_URL}/${endpoint}`

const fetchJSON = (endpoint: string) =>
    fetch(apiUrl(endpoint)).then((res) => res.json())

export async function getMembercount(): Promise<{
    ps: number
    xbox: number
    lastUpdate: string
}> {
    const { PS, XBOX, lastUpdate } = await fetchJSON("member-count")

    return { ps: Number(PS), xbox: Number(XBOX), lastUpdate }
}

export async function getUser(): Promise<Omit<Member, "role_id">> {
    const { avatar, userid, username } = await fetchJSON("auth/user")

    return { member_id: userid, avatar, username }
}

export interface Role {
    name: string
    position: number
}

export interface StaffProfile {
    id: string
    name?: string
    location?: string
    bio?: string
    picture?: string
    username: string
    avatar: string
    join_date: string
    roles: Role[]
}

export async function getStaffProfiles(): Promise<StaffProfile[]> {
    const staffProfiles = await fetchJSON("staff")

    return staffProfiles
}

export interface Member {
    role_id: string
    member_id: string
    username: string
    avatar: string
}

interface FullMember extends Member {
    id: string
    join_date: string
}

export async function getMembersByRole(role_id: string): Promise<Member[]> {
    const members: FullMember[] = await fetchJSON(`members/${role_id}`)

    return members.map(({ id, join_date, ...others }) => others)
}
