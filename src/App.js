import React, { Component } from 'react';
import HeaderTitle from './components/headerTitle';
import SearchField from './components/searchField';
import Chooser from './components/chooser';
import './App.css';
const cert = require('./cfg/giantbomb_cert.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <HeaderTitle />
        </header>
        <SearchField apiKey={cert.api_key}/>
        <Chooser />
      </div>
    );
  }
}

export default App;
