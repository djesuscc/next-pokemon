import { PokemonsResponse } from "@/pokemons";
import { PokemonDetail } from "@/pokemons/components/PokemonDetail";
import { notFound } from "next/navigation";


interface Props {
  params: { name: string };
}


export async function generateStaticParams() {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${151}offset=${0}`).then((res) => res.json());
  const pokemons = data.results.map((pokemon) => ({
    name: pokemon.name,
  }));

  return pokemons;
}


const getPokemon = async (name: string) => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(data => data.json());
    return pokemon;
  } catch (error) {
    return notFound();
  }

}

export default async function PokemonNamePage({ params }: Props) {
  const pokemon = await getPokemon(params.name);

  return (
    <div>
      <PokemonDetail pokemon={pokemon} />
    </div>
  );
}