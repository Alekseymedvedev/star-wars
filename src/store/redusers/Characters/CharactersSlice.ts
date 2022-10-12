import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CharactersType} from "../../../types/Characters";


interface CharactersState {
    // characters: [];
    characters: CharactersType[];
    charactersCount: number
    isLoading: boolean;
    error: string
}

const initialState: CharactersState = {
    characters: [],
    charactersCount: 0,
    isLoading: false,
    error: '',
}

export const charactersSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        fetchCharactersLoading(state) {
            state.isLoading = true;
        },
        fetchCharactersSuccess(state, action: PayloadAction<CharactersType[]>) {
            state.isLoading = false;
            state.characters = action.payload
            state.error = '';
        },
        fetchCharactersError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        },
        CharactersBand(state, action: PayloadAction<CharactersType[]>) {
            state.characters.push(...action.payload);
            state.isLoading = false;
        },
        CharactersCount(state, action) {
            state.charactersCount = action.payload
        }

    },
})

// @ts-ignore
export default charactersSlice.reducer