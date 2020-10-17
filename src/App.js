import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPages from './pages/MainPages';

class App extends Component {
   render() {
      return (
         <div className="App">
            <MainPages />
         </div>
      );
   }
}

export default App;
