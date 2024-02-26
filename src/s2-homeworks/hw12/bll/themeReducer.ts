

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


export type StateType = typeof initState
type ActionType = ReturnType<typeof changeThemeId>
type ChangeThemeIdType = { type: 'SET_THEME_ID', id:number }