import {combineReducers, legacy_createStore} from "redux";

const initState = {
    themeId: 1,
}




export const themeReducer = (state:StateType = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id }) as const


const rootReducer = combineReducers({
    theme:themeReducer
})
export const store = legacy_createStore(rootReducer)

export type StateType = typeof initState
export type RootStateType = ReturnType<typeof rootReducer>
type ActionType = ReturnType<typeof changeThemeId>
type ChangeThemeIdType = { type: 'SET_THEME_ID', id:number }