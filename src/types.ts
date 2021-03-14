export interface Role {
    id: string
    name: string
    color: string
    position: number
    members?: Member[]
}

export interface Member {
    id: string
    username: string
    joined_at: Date
    displayName: string
    avatar?: string
    roles?: Role[]
    profile?: Profile
}

interface Profile {
    id: string
    name?: string
    location?: string
    bio?: string
    picture?: string
}

export interface User {
    id: string
    userid: string
    username: string
    avatar?: string
    expires: Date
}

export interface RoleListItem {
    id: string
    name: string
    description?: string
    members?: Member[]
    colour: string
}

export type RoleListItems = RoleListItem[]
