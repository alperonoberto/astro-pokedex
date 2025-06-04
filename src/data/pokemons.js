export const pokemonList = []

for(let i = 0; i < 300; i++) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
    .then(response => response.json())
    .then(data => pokemonList.push(data));
}

export async function fetchPokemon(string) {
	await fetch(`https://pokeapi.co/v2/pokemon/${string}`)
	.then(response => response.json())
	.then(data => console.log(data))
}

export async function pokemonType(type) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type.type.name}`);
    if (!response.ok) {
        throw new Error(`Error al obtener pokemons: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
};



export const typeColours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};