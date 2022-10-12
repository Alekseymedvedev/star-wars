import React, {FC} from 'react';
import {oneCharacterType} from "../../types/OneCharacter";
import cls from './oneCharacter.module.css'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import CharacterParameter from "../characterParameter/characterParameter";
import Label from "../label/label";


interface type {
    character: oneCharacterType
    errorCharacter: string
}

const OneCharacter: FC<type> = ({character, errorCharacter}) => {
    return (
        <div className={cls.character}>
            <div className={cls.imgBox}>
                <img className={cls.img}
                     src={(character.gender === 'male') ? img2 : (character.gender === 'female') ? img3 : img1} alt=""/>
                <div className={cls.inner}>
                    {
                        character.gender && character.gender !== 'unknown'
                            ? <Label label={character.gender}/>
                            : ''
                    }
                    {
                        character.birth_year && character.birth_year !== 'unknown'
                            ? <Label label={character.birth_year}/>
                            : ''
                    }
                </div>
            </div>
            {
                errorCharacter ? <h3>{errorCharacter}</h3>
                    :
                    <div className={cls.dataBox}>
                        <div className={cls.name}> {character.name}</div>
                        <div className={cls.data}>
                            <div>birth year: {character.birth_year}</div>
                            <div>gender: {character.gender}</div>
                            <div>eye color: {character.eye_color}</div>
                            <div>hair color: {character.hair_color}</div>
                            <div>skin color: {character.skin_color}</div>
                        </div>

                        <div className={cls.parameter}>
                            <CharacterParameter parameterCls="white" parameter={character.height} text='height'/>
                            <CharacterParameter parameterCls="white" parameter={character.mass} text='mass'/>
                        </div>
                    </div>
            }
        </div>
    );
};

export default OneCharacter;