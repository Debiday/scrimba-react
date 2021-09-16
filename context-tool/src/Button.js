import React from 'react'
import PropTypes from 'prop-types'
import {ThemeContextConsumer} from "./themeContext"

function Button(props) {
    return (
        <ThemeContextConsumer>{context => (
            <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch theme</button>
        )}</ThemeContextConsumer>
    )
}

Button.propTypes = {
    theme: PropTypes.oneOf(["light", "dark"])
}

Button.defaultProps = {
    theme: "light"
}

export default Button