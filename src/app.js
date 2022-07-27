import React from 'react';
import Footer from './components/footer/footer'
import Header from './components/header/header'
import ToDo from './components/todo/todo.js';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import './app.css';
import SettingsForm from './components/todo/settingsForm';

export default class App extends React.Component {
  render() {
    return (
      <>
      <BrowserRouter/>
      <Link default='/' >Home</Link>
      <Link to='/settings'>Settings</Link>
      <Routes>
        <Route path='/' element={<ToDo />}/>
        <Route path='/settings' element={<SettingsForm/>}/>
      </Routes>
      
      </> 
    );
  }
}
