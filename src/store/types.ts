export interface RootState {
    menuVisible: boolean
}

export enum Actions {
    toggleMenu,
}

export type Action = { type: Actions; payload?: unknown }
export type Dispatch = (action: Action) => void
