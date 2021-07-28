const PokemonList = (props) =>{
return(
    <div>
        {props.list.map((pokemon, index) => {
            return <h1 onClick = {() => props.pickPokemon(pokemon)}>{pokemon.name}</h1>
    })}
        </div>
)}
export default PokemonList