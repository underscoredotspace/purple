import { Action, Actions } from "./types"

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
