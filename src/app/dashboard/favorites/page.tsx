import { FavoritePokemons } from "@/pokemons";

export const metadata = {
  title: 'Favorites',
  description: 'Pokemons list 151',
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Favorite Pokémons <small className="text-blue-400">Global State</small></span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <FavoritePokemons />
      </div>
    </div>
  );
}