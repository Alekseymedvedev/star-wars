import {charactersSlice} from "../store/redusers/Characters/CharactersSlice";
import {useAppDispatch} from "./redux";


export const useShuffle = (characters: any) => {
    const dispatch = useAppDispatch()

    const shuffle = () => {
        if (characters) {
            let arr = [...characters]
            for (let i = arr.length - 1; i > 0; i--) {
                let tmp = arr[i];
                let rnd = Math.floor(Math.random() * (i + 1));

                arr[i] = arr[rnd];
                arr[rnd] = tmp;
            }
            dispatch(charactersSlice.actions.fetchCharactersSuccess(arr))
        } else {
            console.log('Нет элементов для сортировки')
        }
    }
    return shuffle


}