import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Profile from './pages/profile/Profile'
import Info from './pages/profile/Info'
import Settings from './pages/profile/Settings'
import ServicesList from './pages/services/ServicesList'
import ServiceDetail from './pages/services/ServiceDetail'
import './styles.css'

import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route path='/profile/info'>
          <Info />
        </Route>
        <Route path='/profile/settings'>
          <Settings />
        </Route>
        <Route exact path='/services'>
          <ServicesList />
        </Route>
        <Route path='/services/:serviceId'>
          <ServiceDetail />
        </Route>
      </Switch>
      <Footer />
    </div> 
  )
}

export default App
