import React from "react";
import styled from "styled-components"

export default function Algorithm() {
  return (
    <section>
      <h2>Understanding</h2>
      <li>Each node is connected to eight other nodes.</li>
      <li>nodes have two states on or off</li>
      <li>I need to draw a grid for each generation of nodes</li>
      <li>I need to draw a grid for each generation of nodes</li>
      <p>
          Cellular Automaton A grid of cells a finite number of states
      </p>
        <li>node goes from life to death</li>
        <li>overpopulation causes death</li>
        <li>loneliness causes death</li>
        <li>in Order to be birthed - 3 live neighbors</li>
        <li>there is the current node</li>
        <li>there are neighboring nodes</li>
        <li>What is Turing Complete?</li>
        <li>A machine that can infinitely read and write a series of 1's and 0's</li>
        <li>conditions</li>
      <h2>Plan</h2>
      <li>What data structure should I use?</li>
      <li>Would a Linked List work?</li>
      <li>double buffer is the current grid and next grid</li>
      <li>can use canvas to refer to specific animation frames - see the draw space at each frame or generation in the life cycle</li>
      <p>Logic</p>
      <li>if current node is dead and # of alive neighbors is exactly three then it becomes alive</li>
      <li>if current node is alive and # of alive neighbors is exactly three then it becomes alive</li>
<li>create a number of div boxes that have a state of on or off</li>
      <h2>Execute</h2>
      <h2>Review</h2>
    </section>
  );
}
