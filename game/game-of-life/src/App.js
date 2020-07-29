import React from 'react';
import './App.css';
import Grid from "./components/Grid"
import Rules from "./components/Rules"
import Algorithm from "./components/Algorithm"
import styled from "styled-components"

const GameContainer = styled.div`
  height: 80vh;
  background-color: gray;
  display: flex;
  justify-content: space-around;
  section {
    background-color: lightgray;
    width: 40%;
  }

`

function App() {
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <GameContainer>
        <Grid />
        <Rules />
      </GameContainer>
      <Algorithm />
    </div>
  );
}

export default App;
