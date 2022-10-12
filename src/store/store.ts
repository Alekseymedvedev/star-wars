import {combineReducers, configureStore} from "@reduxjs/toolkit";
import charactersReduser from "./redusers/Characters/CharactersSlice"
import oneCharacterReduser from './redusers/OneCharacter/oneCharacterSlice'

const rootReduser = combineReducers({
    charactersReduser, oneCharacterReduser
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReduser
    })
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']