const pokemonNome = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number')
const pokemonImage = document.querySelector('.pokemon_image')

const fetchPokemon = async (pokemon) =>{

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = async (pokemon) =>{
    const data = await fetchPokemon(pokemon);

    pokemonNome.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
}

renderPokemon('6')