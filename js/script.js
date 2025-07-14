const pokemonNome = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    pokemonNome.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if (data) {
        if (data.id > 649 || data.id < 1) {
            pokemonImage.style.display = 'none';
            pokemonNome.innerHTML = 'Invalid ID :c';
            pokemonNumber.innerHTML = '';
            input.value = '';
            return;
        }

        pokemonImage.style.display = 'block';
        pokemonNome.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;

        const animatedSprite = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        pokemonImage.src = animatedSprite;

        pokemonImage.classList.remove('tynamo-sprite');
        pokemonNome.classList.remove('long-name');

        if (data.id === 602) {
            pokemonImage.classList.add('tynamo-sprite');
        }

        if (data.name.length > 15) {
            pokemonNome.classList.add('long-name');
        }

        input.value = '';
        searchPokemon = data.id;

    } else {
        pokemonImage.style.display = 'none';
        pokemonNome.innerHTML = 'Not found :c';
        pokemonNumber.innerHTML = '';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1) {
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
});

buttonNext.addEventListener('click', () => {
    if (searchPokemon < 649) {
        searchPokemon += 1;
        renderPokemon(searchPokemon);
    }
});

renderPokemon(searchPokemon);