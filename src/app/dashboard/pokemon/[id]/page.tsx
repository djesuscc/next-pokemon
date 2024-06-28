import { Pokemon } from "@/pokemons";
import { PokemonDetail } from "@/pokemons/components/PokemonDetail";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  const staticPokemons = Array.from({ length: 151 }).map((_v, i) => `${i + 1}`);
  return staticPokemons.map( id => ({ id: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id, name } = await getPokemon(params.id);
    return {
      title: `#${id} - ${name}`,
      description: `Pokemon page ${name}`
    }
  } catch (error) {
    return {
      title: 'Pokemon page',
      description: 'Pokemon details',
    }
  }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: 'force-cache',
      // next: {
      //   revalidate: 60,
      // }
    }).then((data) => data.json());

    return pokemon;
  } catch (error) {
    notFound();
  }

}

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.id);
  return (
    <PokemonDetail pokemon={pokemon} />
  );
}