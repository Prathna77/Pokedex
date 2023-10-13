import './PokemonCard.css'

function PokemonCard() {

    const pokemon = pokemonList[3];

    return (

        <figure>

            {pokemon.imgSrc ? (
                <img src={pokemon.imgSrc} alt={pokemon.name} />
            ) : (
                <p>???</p>
            )}
            <figcaption>{pokemon.name}</figcaption>

        </figure>

    );
}

const pokemonList = [
    {
        name: "Bulbasaur",
        imgSrc:
            "https://i.pinimg.com/originals/ef/33/2f/ef332f79619b7503ff40c766eb370219.png",
    },
    {
        name: "Charmander",
        imgSrc:
            "https://clipart.info/images/ccovers/1528080667Charmander-pokemon-transparent.png",
    },
    {
        name: "Squirtle",
        imgSrc:
            "https://static.pokemonpets.com/images/monsters-images-800-800/10-Caterpie.webp",
    },

    {
        name: "Caterpie",
        imgSrc:
            "https://static.pokemonpets.com/images/monsters-images-800-800/10-Caterpie.webp",
    },

    {
        name: "Mew",
    },
];

export default PokemonCard;

