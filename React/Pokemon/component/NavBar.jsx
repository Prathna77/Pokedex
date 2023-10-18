// import App from "../../src/App";

function NavBar({ List, Index, setIndex }) {

  // const incrementer = () => {
  //   setIndex(Index + 1)
  // }
  // const decrementer = () => {
  //   setIndex(Index - 1)
  // }

  const buttonPokemon = (Index) => { setIndex(Index) }

  return (

    <>
      <p>{Index}</p>
      {/* {Index != 0 ? <button onClick={decrementer}>precedent</button> : null}
      {Index != List.length - 1 ? <button onClick={incrementer}>suivant</button> : null} */}

      {List.map((pokemon, i) =>
        <button key={i} onClick={() => buttonPokemon(i)}>{pokemon.name}</button>
        
       )

      }

    </>

  )

};

export default NavBar;

