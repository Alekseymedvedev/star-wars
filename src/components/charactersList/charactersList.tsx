
import cls from './charactersList.module.css'
import Loader from "../loader/loader";
import CharactersCard from "../charactersCard/charactersCard";
import {useAppDispatch, useAppSelector} from "../../hook/redux";
import {useShuffle} from "../../hook/useShuffle";
import {useState} from "react";
import {fetchOneCharacter} from "../../store/redusers/OneCharacter/oneCharacterCreator";
import Modal from "../modal/modal";
import OneCharacter from "../oneCharacter/oneCharacter";
import img from '../../images/btn-img.png'


const CharactersList = () => {
    const dispatch = useAppDispatch()
    const {characters, error} = useAppSelector(state => state.charactersReduser)
    const {character, errorCharacter, isLoadingCharacter} = useAppSelector(state => state.oneCharacterReduser)
    const [modal, setModal] = useState(false);

    const modalOneCharacter = (urlOneCharacter: string, modalVisible: boolean) => {
        setModal(modalVisible)
        dispatch(fetchOneCharacter(urlOneCharacter))
    }
    const shuffle = useShuffle(characters)

    return (
        <div className={cls.characters}>
            <div className={cls.list}>
                {
                    characters && characters.map((characters, index) =>
                        <CharactersCard key={index} characters={characters} fetchUrl={modalOneCharacter}/>
                    )
                }
                {error && <h1>{error}</h1>}
            </div>
            <button className={cls.btn} onClick={shuffle}>
                <img src={img} alt=""/>
            </button>
            <Modal visible={modal} setVisible={setModal}>
                {
                    isLoadingCharacter ? <Loader/>
                    : <OneCharacter character={character} errorCharacter={errorCharacter}/>
                }
            </Modal>
        </div>

    );
};

export default CharactersList;