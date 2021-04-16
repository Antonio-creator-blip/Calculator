import logo from './logo.svg';
import './App.css';
import React from 'react';
import Calculate from './Calculate';
import Grid from './Grid';

class App extends React.Component {
  

  render() {
    return (
      <div className="App">
        <Grid></Grid>
      </div>
    );
  }
}

export default App;
