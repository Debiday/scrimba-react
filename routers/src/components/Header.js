import React from 'react'

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