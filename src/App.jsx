import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function App(){
  return (
    <div className="container">
      <header>
        <Link className="logo" to="/">Groufie</Link>
        <nav>
          <Link to="/create">Create an event</Link>
          <Link to="/join">Join</Link>
        </nav>
      </header>
      <Outlet />
      <footer>© Groufie</footer>
    </div>
  )
}
