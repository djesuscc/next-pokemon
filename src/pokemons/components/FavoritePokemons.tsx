'use client';

import { useState } from "react";
import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(state => Object.values(state.pokemons));
  const [pokemons] = useState(favoritePokemons);

  return (
    pokemons.length ? (
      <PokemonGrid pokemons={pokemons} />
    ) : (
      <NoFavorites />
    )
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No Favorites</span>
    </div>
  )
}