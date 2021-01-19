export interface RootState {
    menuVisible: boolean
}

export enum Actions {
    toggleMenu = "toggleMenu",
    closeMenu = "closeMenu",
}

export type Action = { type: Actions; payload?: unknown }
export type Dispatch = (action: Action) => void
