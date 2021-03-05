import { Action, Actions, User } from "./types"

export const toggleMenu = (): Action => ({
    type: Actions.toggleMenu,
})

export const closeMenu = (): Action => ({
    type: Actions.closeMenu,
})

export const setLoggedIn = (isLoggedIn: boolean): Action => ({
    type: Actions.setLoggedIn,
    payload: { isLoggedIn },
})

export const setUser = (user: User): Action => ({
    type: Actions.setUser,
    payload: { user },
})
