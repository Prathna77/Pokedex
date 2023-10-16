import { useState } from 'react'
import './App.css'
import PokemonCard from '../Pokemon/component/PokemonCard'


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

function App() {

  return (
    <>
    
      <PokemonCard

        pokemon={pokemonList[1]}

      />

    </>

  )
}

export default App

