import React from 'react'
import When from 'react-if';

export default function Header() {
  return (
    <>
      <When condition={isLoggedIn}>
        <Link default to="/" style={{ margin: '25px' }}>Home</Link>
        <Link to="/settings">Settings</Link>
        <button style={{ margin: '25px' }} onClick={logout}>Log Out</button>
      </When>
      <When condition={!isLoggedIn}>
        <Login />
      </When>
    </>
  )
}
