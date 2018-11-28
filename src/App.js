import React, { Component } from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header';
import Featured from './components/featured/Featured';
import BusinessInfo from './components/featured/BusinessInfo';
import Highlights from './components/highlights';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height:'1500px',background:'cornflowerblue'}}>
      <Header />
      <Featured />
      <BusinessInfo />
      <Highlights />
      </div>
    );
  }
}

export default App;
