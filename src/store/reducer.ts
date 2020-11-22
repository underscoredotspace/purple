import { Action, Actions, RootState } from "./types"

export const initialState: RootState = {
    menuVisible: false,
}

export const reducer = (state: RootState, action: Action): RootState => {
    switch (action.type) {
        case Actions.toggleMenu:
            return {
                ...state,
                menuVisible: !state.menuVisible,
            }
    }

    return state
}
