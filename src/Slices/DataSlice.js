import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokesDetails } from "../Hooks/get";
import { setLoading } from "./UiSlice";

const initialState = {
    pokesData: [],
    searchPokes:[],
}

export const fetchPokesWithDetails = createAsyncThunk(
    'data/fetchPokesWithDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true))
        
        const pokeRes = await getPokemon();
        const pokesDetails = await Promise.all(pokeRes.map(poke =>
            getPokesDetails(poke.url)
        )).then(allData => allData)

        dispatch(setPokes(pokesDetails));
        dispatch(setLoading(false));    

    }
);


export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokes: (state, action) => {
            state.pokesData = action.payload;
            state.searchPokes=action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokeIndex = state.pokesData.findIndex(poke => {
                return poke.id === action.payload   //.id
            })
            if (currentPokeIndex >= 0) {
                const isFavorite = state.pokesData[currentPokeIndex].favorite;

                state.pokesData[currentPokeIndex].favorite = !isFavorite;
            }

        },
        setSearchPoke:(state,action)=>{
            const pokeSearch= state.pokesData.filter(poke=>poke.name.includes(action.payload))
            state.searchPokes=pokeSearch;


        }
    }
})

export const { setFavorite, setPokes,setSearchPoke } = dataSlice.actions
console.log(dataSlice, 'dataSlice');
export default dataSlice.reducer