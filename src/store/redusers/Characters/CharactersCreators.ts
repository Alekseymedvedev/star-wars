import axios from "axios";
import {charactersSlice} from "./CharactersSlice";
import {AppDispatch} from "../../store";


export const fetchCharacters = (queryParams: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(charactersSlice.actions.fetchCharactersLoading())
        const response = await axios.get('https://swapi.dev/api/people' + queryParams)
        dispatch(charactersSlice.actions.fetchCharactersSuccess(response.data.results))
        dispatch(charactersSlice.actions.CharactersCount(response.data.count))
    } catch (e: any) {
        dispatch(charactersSlice.actions.fetchCharactersError('Данные не загружены. Ошибка ' + e.message))
    }
}
export const fetchCharactersArr = (queryParams: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(charactersSlice.actions.fetchCharactersLoading())
        const response = await axios.get('https://swapi.dev/api/people' + queryParams)
        dispatch(charactersSlice.actions.CharactersBand(response.data.results))
    } catch (e: any) {
        dispatch(charactersSlice.actions.fetchCharactersError('Данные не загружены. Ошибка ' + e.message))
    }
}



