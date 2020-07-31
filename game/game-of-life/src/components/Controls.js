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
    label {
      color: lightgray;
    }
  }
`;

export default function Controls({speed, setSpeed, gridSize, setGridSize, running}) {

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
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="grid-size">Change grid size.</label>
        <input 
        name="grid-size"
        type="range"
        min="25"
        max="30"
        value={gridSize}
        onChange={changeSize}
        />
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
