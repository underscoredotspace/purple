import { Member, Permissions, User } from "types"

export interface RootState {
    menuVisible: boolean
    loggedIn: boolean
    user?: User
    member?: Member
    permissions: Permissions
}

export enum Actions {
    toggleMenu = "toggleMenu",
    closeMenu = "closeMenu",
    setLoggedIn = "setLoggedIn",
    setUser = "setUser",
}

export type Action = { type: Actions; payload?: unknown }
export type Dispatch = (action: Action) => void
