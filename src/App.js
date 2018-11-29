import React, { Component } from 'react';
import HeaderTitle from './components/headerTitle';
import SearchField from './components/searchField';
import Chooser from './components/chooser';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <HeaderTitle />
        </header>
        <SearchField />
        <Chooser />
      </div>
    );
  }
}

export default App;
