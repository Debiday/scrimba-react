import React, {useContext} from 'react'
import {ThemeContext} from "./themeContext"

function Header(props) {
    const context = useContext(ThemeContext)
    return (
        <div>
        <header className={`${context.theme}-theme`}>
            <h2>{context.theme === "light" ? "Light" : "Dark"}</h2>
        </header>
        </div>
    )
}

export default Header