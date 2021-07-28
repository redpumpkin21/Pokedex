import React, {useState}from 'react'
import PokemonList from '../componets/pokemonList'
import Pokemon from '../componets/Pokemon'

const Main = (props) => {
    const divStyle = {
        display: 'flex',
        justifyContent: 'space-around'
    }
    const [picked, setPicked] =useState({})
    const pickPokemon = async(pokemon) =>{
        const response = await fetch(pokemon.url)
        const data = await response.json()
        setPicked({
            img: data.sprites.front_default,
            name: data.name,
            height: data.height,
            type: data.types[0].type.name,
            weight: data.weight
        })
    }
    return (
    <div style={divStyle}>
        <PokemonList list = {props.list} pickPokemon = {pickPokemon}/>
        <Pokemon picked = {picked}/>
    </div>
        )
    }
export default Main