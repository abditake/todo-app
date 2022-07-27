import React from 'react';
import Footer from './components/footer/footer'
import Header from './components/header/header'
import ToDo from './components/todo/todo.js';
import './app.css';

export default class App extends React.Component {
  render() {
    return (
      <>
      <Header/>
      <ToDo />
      <Footer/>
      </> 
    );
  }
}
