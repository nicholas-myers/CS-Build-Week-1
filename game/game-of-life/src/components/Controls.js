import React from "react";
import styled from "styled-components"

const CenterControls = styled.div`
    width: 10%;
`

export default function Controls() {
  return (
    <CenterControls>
        <h2>Controls</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          Columns:
          <input type="number"></input>
        </label>
        <label>
          Rows:
          <input type="number"></input>
        </label>
        <button>Change Grid Size</button>
      </form>
      <button>Change Grid Color</button>
      <button>Change Cell Color</button>
    </CenterControls>
  );
}
