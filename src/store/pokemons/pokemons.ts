import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

interface PokemonsState {
  favorites: {
    [key: string]: SimplePokemon;
  };
}

const initialState: PokemonsState = {
  favorites: {},
  // ...getInitialState(),
  // "1": { id: "1", name: "bulbasaur" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (state.favorites[id]) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = pokemon;
      }
      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
    },
    setFavoritePokemons(
      state,
      action: PayloadAction<{
        [key: string]: SimplePokemon;
      }>
    ) {
      state.favorites = action.payload;
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
