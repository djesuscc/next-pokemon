'use client';

import Link from "next/link"
import Image from "next/image";
import { useDispatch } from "react-redux";
import { SimplePokemon } from "../interfaces/simple-pokemon"
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const dispatch = useDispatch();
  const isFavorite = useAppSelector(state => !!state.pokemons[id]);

  const onToggle = () => {
    dispatch(toggleFavorite(pokemon))
  }

  return (

    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b h-64">
          <Image
            key={id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={name}
            width={100}
            height={100}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              See more...
            </Link>
          </div>
        </div>
        <div className="border-b w-full">
          <button
            onClick={onToggle}
            className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer w-full"
          >
            <div className="text-red-600">
              {isFavorite ? (<IoHeart />) : (<IoHeartOutline />)}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none text-left">
                {isFavorite ? 'Favorite' : 'Not Favorite'}
              </p>
              <p className="text-xs text-gray-500">Click to continue</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
