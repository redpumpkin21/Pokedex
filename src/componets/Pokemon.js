import React from 'react'
const Pokemon = (props) =>{
    return(
        <div>
            <h1>{props.picked.name}</h1>
            <img src = {props.picked.img} alt={props.picked.name}/>
            <h2>Type: {props.picked.type}</h2>
            <h2>Height: {props.picked.height}</h2>
            <h2>Weight: {props.picked.weight}</h2>
            <button onClick = {() => props.handleClick(props.picked)}>{props.label}</button>
        </div>
    )
}
export default Pokemon

