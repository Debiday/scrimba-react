import React from 'react'
import Header from './Header'
import Button from './Button'
import ThemeContext from './themeContext'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <ThemeContext.Consumer>
        {theme => (
          <Button theme={theme} />
        )}
      </ThemeContext.Consumer>
          <Button theme="light" />
    </div>
  )
}

export default App