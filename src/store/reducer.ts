import { Action, Actions, RootState } from "./types"

export const initialState: RootState = {
    menuVisible: false,
    loggedIn: false,
    permissions: [],
    allPermissions: [],
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
                user: undefined,
                member: undefined,
                permissions: [],
            }

        case Actions.setUser:
            return {
                ...state,
                user: action.payload["user"],
                member: action.payload["member"],
                permissions: action.payload["permissions"] || [],
            }

        case Actions.setPermissionsList:
            return {
                ...state,
                allPermissions: action.payload["allPermissions"],
            }

        default:
            return state
    }
}
