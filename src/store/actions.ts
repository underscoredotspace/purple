import { Member, User } from "types"
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

export const setUser = (user: User, member?: Member): Action => ({
    type: Actions.setUser,
    payload: { user, member },
})
