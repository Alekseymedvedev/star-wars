import React, {FC} from 'react';
import {CharactersType} from "../../types/Characters";
import cls from './charactersCard.module.css'
import CharacterParameter from "../characterParameter/characterParameter";
import Label from "../label/label";


interface T {
    characters: CharactersType
    fetchUrl: any
}

const CharactersCard: FC<T> = ({characters, fetchUrl}) => {
    return (
        <div className={cls.card} onClick={() => fetchUrl(characters.url, true)}>
            <div className={cls.name}>{characters && characters.name}</div>
            <div className={cls.inner}>
                {
                    characters && characters.height && characters.height !== 'unknown' ?
                        <CharacterParameter parameter={characters.height} text='height'/> : ''
                }
                {
                    characters && characters.mass && characters.mass !== 'unknown' ?
                        <CharacterParameter parameter={characters.mass} text='mass'/> : ''
                }
            </div>
            <div className={cls.inner}>
                {
                    characters && characters.gender && characters.gender !== 'unknown'
                        ? <Label label={characters.gender}/>
                        : ''
                }
                {
                    characters && characters.birth_year && characters.birth_year !== 'unknown'
                        ? <Label label={characters.birth_year}/>
                        : ''
                }
            </div>
        </div>
    );
};

export default CharactersCard;