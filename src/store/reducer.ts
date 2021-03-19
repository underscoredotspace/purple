import { Action, Actions, RootState } from "./types"

export const initialState: RootState = {
    menuVisible: false,
    loggedIn: false,
    user: null,
    member: null,
}

export const reducer = (state: RootState, action: Action): RootState => {
    console.log({ state, action })
    switch (action.type) {
        case Actions.toggleMenu:
            return {
                ...state,
                menuVisible: !state.menuVisible,
            }
        case Actions.closeMenu:
            return {
                ...state,
                menuVisible: false,
            }

        case Actions.setLoggedIn:
            return {
                ...state,
                loggedIn: action.payload["isLoggedIn"],
            }

        case Actions.setUser:
            return {
                ...state,
                user: action.payload["user"] || null,
                member: action.payload["member"] || null,
            }
        default:
            return state
    }
}
