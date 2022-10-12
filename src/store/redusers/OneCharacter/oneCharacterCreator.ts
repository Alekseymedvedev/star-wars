import {AppDispatch} from "../../store";
import {oneCharacterSlice} from "./oneCharacterSlice";
import axios from "axios";

export const fetchOneCharacter = (url: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(oneCharacterSlice.actions.fetchOneCharacter())
        const response = await axios.get(url)
        dispatch(oneCharacterSlice.actions.fetchOneCharacterSuccess(response.data))
    } catch (e) {
        dispatch(oneCharacterSlice.actions.fetchOneCharacterError('Данные не загружены'))
    }
}