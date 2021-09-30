import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return(
        <div>
            <header>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Header