import React from 'react'
import {Link} from 'react-router-dom'
const Header = (props) =>{
    return(
        <div className = 'nav'>
            <Link to = '/'>
                <h4>Pokedex</h4>
            </Link>
            <Link to = '/myteam'>
                <h4>MY TEAM</h4>
            </Link>
        </div>
    )
}
export default Header