import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Home />
      <Link to="MemberList">MemberList</Link> |{" "}
      <Link to="/">Home</Link>
      <Outlet />
    </div>
  )
}

export default App