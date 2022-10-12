import React, {useEffect, useRef, useState} from 'react';
import CharactersList from "../../components/charactersList/charactersList";
import {useAppDispatch, useAppSelector} from "../../hook/redux";
import {fetchCharacters} from "../../store/redusers/Characters/CharactersCreators";
import cls from './characters.module.css'
import Input from "../../components/UI/input/input";
import {UseDebounce} from "../../hook/useDebounce";
import Select from "../../components/UI/select/select";
import {UseSort} from "../../hook/useSort";
import {useObserver} from "../../hook/useObserver";
import Loader from "../../components/loader/loader";
import Header from "../../components/header/header";

const Characters = () => {
    const dispatch = useAppDispatch()
    const {characters, isLoading, charactersCount} = useAppSelector(state => state.charactersReduser)
    const [translate, setTranslate] = useState(true)
    const lastElement = useRef(null)
    useEffect(() => {
        dispatch(fetchCharacters(''))
    }, [])

    useObserver(lastElement, isLoading, characters)

    const debounse = UseDebounce()
    const sort = UseSort(characters)

    const translateHandler = () => {
        // translate ? dispatch(fetchCharacters('/?format=wookiee')) : dispatch(fetchCharacters(''))
        setTranslate(!translate)
    }
    return (
        <>
            <Header/>
            <div className={cls.characters}>
                <div className="container">
                    <div className={cls.translate}
                         onClick={translateHandler}>language: {translate ? 'en' : 'wookiee '}</div>
                    <h1 className={cls.title}>{charactersCount} Characterss for you to choose your favorite</h1>
                    <Input debounse={debounse}/>
                    <Select onChange={sort}/>
                    <CharactersList/>
                    {isLoading && <Loader/>}
                    <div className={cls.lastElement} ref={lastElement}/>
                </div>
            </div>
        </>
    );
};

export default Characters;