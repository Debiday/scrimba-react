import React from 'react'
import Header from './Header'
import Button from './Button'
import {ThemeContextConsumer} from './themeContext'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <ThemeContextConsumer>
        {theme => (
          <Button theme={theme} />
        )}
      </ThemeContextConsumer>
    </div>
  )
}

export default App