import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ThemeContext from './themeContext'

ReactDOM.render(
  <React.StrictMode>
  <ThemeContext.Provider value={'light'}>
      <App />
  </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
