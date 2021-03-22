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

export interface Profile {
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

export type Permissions = string[]

export interface ExtendedUser extends User {
    member?: Member
    permissions?: Permissions
}

export interface RoleListItem {
    id: string
    name: string
    description?: string
    members?: Member[]
    colour: string
}

export type RoleListItems = RoleListItem[]
