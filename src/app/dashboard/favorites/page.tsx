import { PokemonGrid } from "@/pokemons";

export const metadata = {
 title: 'Favorites',
 description: 'Pokemons list 151',
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Favorite Pokémons <small>Global State</small></span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <PokemonGrid pokemons={[]} />
      </div>
    </div>
  );
}