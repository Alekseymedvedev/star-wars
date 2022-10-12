import {useEffect, useRef, useState} from "react";
import {useAppDispatch} from "./redux";
import {fetchCharactersArr} from "../store/redusers/Characters/CharactersCreators";

export const useObserver = (ref: any, isLoading: boolean, characters: any) => {
    const [curentPage, setSurentPage] = useState(1)
    const observer: any = useRef();
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!isLoading) {
            if (observer.current) observer.current.disconnect();
            const options = {
                threshold: 1.0
            }
            const cb = (entries: any, observer: any) => {
                setSurentPage(curentPage + 1)
                if (entries[0].isIntersecting && curentPage < 10) {
                    dispatch(fetchCharactersArr('/?page=' + curentPage))
                }
            };
            observer.current = new IntersectionObserver(cb, options);
            observer.current.observe(ref.current)
        }
    }, [isLoading])
}