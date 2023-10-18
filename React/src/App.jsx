import { useState } from 'react'
import './App.css'
import PokemonCard from '../Pokemon/component/PokemonCard'
import NavBar from '../Pokemon/component/NavBar'


const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },

  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },

  {
    name: "Mew",
  },
];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0)
  



  /*     count === 0 ? ne pas m'afficher le bouton precedent : afficher le bouton suivant  
         count != 0 ? afficher le bouton precedent : ne pas afficher le bouton suivant 
         count > 0  ? <button onClick={decrementer}>precedent</button> : null 
         
         a si le count est au max  ? ne pas afficher le bouton suivant : afficher le bouton suivant 
         count === pokemonList.length -1  ? null  : <button onClick={incrementer}>suivant</button>*/


  return (<>

    <PokemonCard

      pokemon={pokemonList[pokemonIndex]}

    />

    <NavBar

      Index={pokemonIndex}
      List={pokemonList}
      setIndex={setPokemonIndex}

    />

  </>

  );

}

export default App;

