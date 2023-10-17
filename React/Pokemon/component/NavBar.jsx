import App from "../../src/App";

function NavBar ({Index, List, setIndex}) {

    const incrementer = () => {
        setIndex(Index + 1)
      }
      const decrementer = () => {
        setIndex(Index - 1)
      }
    
    return (

        <>
    <p>{Index}</p>
    {Index != 0  ? <button onClick={decrementer}>precedent</button> : null}
    {Index != List.length -1  ? <button onClick={incrementer}>suivant</button> : null}

    </>

    )

}

export default NavBar;

