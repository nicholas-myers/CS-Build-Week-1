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
    height: 50%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
`;

export default function Controls({gridSize, setGridSize, setGrid, emptyGrid}) {

  const changeSize = (e) => {
    console.log(e.target.value)
    setGridSize(Number(e.target.value))
    setGrid(emptyGrid())
  }

  return (
    <CenterControls>
      <h2>Controls</h2>
      <form
        onSubmit={(e) => {
          // e.preventDefault();
          [e.target.name]= e.target.value
        }}
      >
        Choose the size of the grid 25 - 30
        <input 
        name="gridSize"
        type="range"
        min="25"
        max="30"
        value={gridSize}
        onChange={changeSize}
        />
        <button>Change Grid Size</button>
      </form>

      <form onSubmit={(e) => {
          e.preventDefault();
        }}>
        <button>Change Grid Color</button>
      </form>
      <button>Change Cell Color</button>
    </CenterControls>
  );
}
