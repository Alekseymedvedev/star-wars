import {useAppDispatch} from "./redux";
import {charactersSlice} from "../store/redusers/Characters/CharactersSlice";


export const UseSort = (characters: any) => {
    const dispatch = useAppDispatch()

    const selectedSort = (value: string) => {
        if (characters) {
            if (value) {
                const arr = [...characters].sort((a, b) => a[value].localeCompare(b[value]))
                dispatch(charactersSlice.actions.fetchCharactersSuccess(arr))
            }
            return characters;
        } else {
            console.log('Нет элементов для сортировки')
        }
    }
    return selectedSort

};