import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {ThemeContext} from "./themeContext"

function Button(props) {
    const context = useContext(ThemeContext)
    return (
        <div>
        <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch theme</button>
        </div>
    )
}

Button.propTypes = {
    theme: PropTypes.oneOf(["light", "dark"])
}

Button.defaultProps = {
    theme: "light"
}

export default Button