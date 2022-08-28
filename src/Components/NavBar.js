import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(){
    return(
        <div>
            <nav>
                <ul style={{backgroundColor:'lightblue',textCombineHorizontal:'all'}}>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/bankAccount'><li>Bank Account</li></Link>
                    <Link to='/accountHolder'><li>AccountHolder</li></Link>
                </ul>
            </nav>
        </div>
    )

}

export default NavBar;