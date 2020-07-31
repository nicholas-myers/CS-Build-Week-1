import React from "react";
import styled from "styled-components";

const StyledRules = styled.section`
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  width: 30%;
  background-color: lightgray;
  padding: 1%;
  /* height: 90%; */
  h2 {
    text-align: center;
    /* margin-bottom: 3%; */
  }
  p {
    margin: 3% 0;
  }
  li {
    margin: 1% 0;
  }
`;

export default function Rules() {
  return (
    <StyledRules>
      <h2>Rules</h2>
      <p>A single cell is connected to eight other cells surrounding it in every direction.</p>
      <p>Each cell has a lyfe cycle with the following conditions:</p>
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
