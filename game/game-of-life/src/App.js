import React from "react";
import "./App.css";
import Grid from "./components/Grid";
import Controls from "./components/Controls";
import Rules from "./components/Rules";
import Algorithm from "./components/Algorithm";
import styled from "styled-components";

const Title = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const Hero = styled.div`
  display: flex;
  border: 1px solid black;
  background-color: gray;
  justify-content: space-around;
  padding: 1%;
  height: 80vh;
  align-items: center;
`


function App() {
  return (
    <div className="App">
      <Title>
        <h1>Conway's Game of Life</h1>
      </Title>
      <Hero>
        <Grid />
        <Rules />
      </Hero>
      <Algorithm />
    </div>
  );
}

export default App;
