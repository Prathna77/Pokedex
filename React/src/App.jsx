import { useState } from 'react'
import './App.css'
import PokemonCard from '../Pokemon/component/PokemonCard'


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



  const [pokemonIndex, setpokemonIndex] = useState(0)

  const incrementer = () => {
    setpokemonIndex(pokemonIndex + 1)
  }
  const decrementer = () => {
    setpokemonIndex(pokemonIndex - 1)
  }

  /*     count === 0 ? ne pas m'afficher le bouton precedent : afficher le bouton suivant  
         count != 0 ? afficher le bouton precedent : ne pas afficher le bouton suivant 
         count > 0  ? <button onClick={decrementer}>precedent</button> : null 
         
         a si le count est au max  ? ne pas afficher le bouton suivant : afficher le bouton suivant 
         count === pokemonList.length -1  ? null  : <button onClick={incrementer}>suivant</button>*/ 


  return <>

    <PokemonCard

      pokemon={pokemonList[pokemonIndex]}

    />

    <p>{pokemonIndex}</p>
    {pokemonIndex != 0  ? <button onClick={decrementer}>precedent</button> : null}
    {pokemonIndex != pokemonList.length -1  ? <button onClick={incrementer}>suivant</button> : null   }
  </>


}

export default App

