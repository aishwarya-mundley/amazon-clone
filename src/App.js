import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route
            path='/checkout'
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route
            exact
            path='/'
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App

{
  /* localhost.com */
}
{
  /* localhost.com/checkout */
}
{
  /* localhost.com/login */
}
