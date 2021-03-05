export interface User {
    userId: string
    username: string
    avatar: string
    permissions: string[]
}

export interface RootState {
    menuVisible: boolean
    loggedIn: boolean
    user: User | null
}

export enum Actions {
    toggleMenu = "toggleMenu",
    closeMenu = "closeMenu",
    setLoggedIn = "setLoggedIn",
    setUser = "setUser",
}

export type Action = { type: Actions; payload?: unknown }
export type Dispatch = (action: Action) => void
