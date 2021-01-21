export interface RootState {
    menuVisible: boolean
    loggedIn: boolean
}

export enum Actions {
    toggleMenu = "toggleMenu",
    closeMenu = "closeMenu",
    setLoggedIn = "setLoggedIn",
}

export type Action = { type: Actions; payload?: unknown }
export type Dispatch = (action: Action) => void
