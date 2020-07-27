import React from 'react';
import './App.css';
import Grid from "./components/Grid"
import Rules from "./components/Rules"
import Algorithm from "./components/Algorithm"
import styled from "styled-components"



function App() {
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <div >
        <Grid />
        <Rules />
      </div>
      <Algorithm />
    </div>
  );
}

export default App;
