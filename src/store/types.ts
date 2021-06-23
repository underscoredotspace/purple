import { Member, Permission, User } from "types"

export interface RootState {
    menuVisible: boolean
    loggedIn: boolean
    user?: User
    member?: Member
    permissions: string[]
    allPermissions: Permission[]
}

export enum Actions {
    toggleMenu = "toggleMenu",
    closeMenu = "closeMenu",
    setLoggedIn = "setLoggedIn",
    setUser = "setUser",
    setPermissionsList = "setPermissionsList",
}

export type Action = { type: Actions; payload?: unknown }
export type Dispatch = (action: Action) => void
