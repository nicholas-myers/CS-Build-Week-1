import React from "react";
import styled from "styled-components"

const StyledRules = styled.section`
  width: 40%;
  background-color: lightgray;
  padding: 1%;
  h2 {
    text-align: center;
    margin-bottom: 3%;
  }
`

export default function Rules() {
  return (
    <StyledRules>
      <h2>Rules</h2>
      <p>
        Every cell interacts with its eight neighbours, which are the cells that
        are horizontally, vertically, or diagonally adjacent.
      </p>
      <p>At each step in time, the following transitions occur:</p>
      <li>
        Any live cell with fewer than two live neighbours dies, as if by
        underpopulation.
      </li>
      <li>
        Any live cell with two or three live neighbours lives on to the next
        generation.
      </li>
      <li>
        Any live cell with more than three live neighbours dies, as if by
        overpopulation.
      </li>
      <li>
        Any dead cell with exactly three live neighbours becomes a live cell, as
        if by reproduction.
      </li>{" "}
      <p>
        These rules, which compare the behavior of the automaton to real life,
        can be condensed into the following:
      </p>{" "}
      <li>Any live cell with two or three live neighbours survives.</li>{" "}
      <li>Any dead cell with three live neighbours becomes a live cell.</li>{" "}
      <li>All other live cells die in the next generation.</li>{" "}
      <li>Similarly, all other dead cells stay dead.</li>
    </StyledRules>
  );
}
