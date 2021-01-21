import { Action, Actions, RootState } from "./types"

export const initialState: RootState = {
    menuVisible: false,
    loggedIn: false,
}

export const reducer = (state: RootState, action: Action): RootState => {
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
        default:
            return state
    }
}
