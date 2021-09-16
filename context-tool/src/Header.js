import React from 'react'
import {ThemeContextConsumer} from "./themeContext"

function Header(props) {
    return (
        <ThemeContextConsumer>
            {theme => (
                <header className={`${theme}-theme`}>
                    <h2>{theme === "light" ? "Light" : "Dark"}</h2>
                </header>
            )}

        </ThemeContextConsumer>
    )
}

export default Header