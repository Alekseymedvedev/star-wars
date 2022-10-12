import React, {useMemo, useState} from 'react';
import {fetchCharacters} from "../store/redusers/Characters/CharactersCreators";
import {useAppDispatch} from "./redux";

export const UseDebounce = () => {
    const dispatch = useAppDispatch()
    const [debounceHelp, setDebounceHelp] = useState(false)
    const debounce = useMemo(() => {
        let timeout: any;
        return (value: string) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setDebounceHelp(true)
                const search = value !== '' ? '/?search=' : ''
                dispatch(fetchCharacters(search + value))
            }, 1000)
        };
    }, [debounceHelp])
    return debounce
};

