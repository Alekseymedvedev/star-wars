import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {oneCharacterType} from "../../../types/OneCharacter";


interface oneCharacterState {
    character: oneCharacterType;
    isLoadingCharacter: boolean;
    errorCharacter: string
}

const initialState: oneCharacterState = {
    character:{
        birth_year: '',
        eye_color: '',
        gender: '',
        hair_color: '',
        height: '',
        mass: '',
        name: '',
        skin_color: '',
    },
    isLoadingCharacter: false,
    errorCharacter: '',
}

export const oneCharacterSlice = createSlice({
    name: 'oneCharacter',
    initialState,
    reducers: {
        fetchOneCharacter(state) {
            state.isLoadingCharacter = true;
        },
        fetchOneCharacterSuccess(state, action: PayloadAction<oneCharacterType>) {
            state.isLoadingCharacter = false;
            state.character = action.payload
            state.errorCharacter = '';
        },
        fetchOneCharacterError(state, action: PayloadAction<string>) {
            state.isLoadingCharacter = false;
            state.errorCharacter = action.payload
        }
    },
})

export default oneCharacterSlice.reducer