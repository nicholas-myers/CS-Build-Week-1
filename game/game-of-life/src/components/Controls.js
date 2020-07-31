import React from "react";
import styled from "styled-components";
import produce from "immer"


const CenterControls = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column;
  border: 1px solid black;
  form {
    width: 100%;
    height: 70%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    label {
      color: lightgray;
    }
    button {
      padding: .5rem;
    }
  }
`;

const BYR = styled.button`
  background-color: black;
  border: 1px solid yellow;
  color: red;
`
const BTP = styled.button`
  background-color: seagreen;
  border: 1px solid cyan;
  color: violet;
`
const RESET = styled.button`
  background-color: lightgray;
  border: 1px solid black;
  color: black;
`

export default function Controls({speed, setSpeed, gridSize, setGridSize, running, gridColors, setGridColors}) {

  const changeSpeed = (e) => {
    console.log(e.target.value)
    if (running == false) {
      setSpeed(Number(e.target.value))
    }
  }
  const changeSize = (e) => {
    console.log(e.target.value)
    if (running == false) {
      setGridSize(Number(e.target.value))
    }
  }

  const changeColorToRBY = (e) => {
    setGridColors(["black", "yellow", "red"])
  }
  const changeColorToBTP = (e) => {
    setGridColors(["seagreen", "cyan", "violet"])
  }
  const resetColors = (e) => {
    setGridColors(["lightgray", "black", "black"])
  }

  return (
    <CenterControls>
      <h2>Controls</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="lifeSpeed">Change the speed of life cycle.</label>
        <input 
        name="lifeSpeed"
        type="range"
        min="100"
        max="1000"
        value={speed}
        onChange={changeSpeed}
        />
      
        <label htmlFor="grid-size">Change grid size.</label>
        <input 
        name="grid-size"
        type="range"
        min="25"
        max="30"
        value={gridSize}
        onChange={changeSize}
        />
      
        <label>Change Grid Colors</label>
        <BYR onClick={changeColorToRBY}>CELL</BYR>
        <BTP onClick={changeColorToBTP}>CELL</BTP>
        <RESET onClick={resetColors}>RESET</RESET>
      </form>
    </CenterControls>
  );
}
