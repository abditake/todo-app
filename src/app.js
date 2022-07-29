import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './context/auth/index';
import ToDo from './components/todo/todo.js';
import Login from './components/login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { When } from 'react-if';
import './app.css';



const App = () =>{



  const { isLoggedIn, logout, user } = useContext(AuthContext);



  return (
    <>
      <BrowserRouter>
        <header>
          <When condition={isLoggedIn}>
            <Link default to="/" style={{ margin: '25px' }}>Home</Link>
            <Link to="/settings">Settings</Link>
            <button style={{ margin: '25px' }} onClick={logout}>Log Out</button>
          </When>
          <When condition={!isLoggedIn}>
            <Login />
          </When>

        </header>

        <When condition={isLoggedIn}>

          <Routes>
            <Route path="/" element={<ToDo />} />
            {/* <Route path="/settings" element={<SettingsForm />} /> */}
          </Routes>
        </When>
      </BrowserRouter>
    </>
  );
}

export default App;