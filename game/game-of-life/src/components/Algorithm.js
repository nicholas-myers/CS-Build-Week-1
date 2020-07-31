import React from "react";
import styled from "styled-components";

const UPER = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin: 1rem;
    width: 80%;
    li {
      margin: 1%;
    }
    p {
      margin: 1%;
    }
  }
`;

export default function Algorithm() {
  return (
    <UPER>
      <div>
        <h2>Understanding</h2>
        <h3>What is Conway's Game of Life?</h3>
        <li>
          It is not so much a game, as it is a mathematical simulation of the
          lifecycle of cells.
        </li>
        <li>Each node is connected to eight other nodes.</li>
        <li>Nodes have two states: on or off.</li>
        <li>I need to draw a grid for each generation of nodes.</li>
        <li>At least the current generation and the next generation.</li>
        <li>Each node either lives, dies or is born on certain rules. (described above)</li>
        <h3>What is Cellular Automaton?</h3>
        <li>Is a grid of cells.</li>
        <li>It has a finite number of states.</li>
        <h3>What is Turing Complete?</h3>
        <li>
          A machine that can infinitely read and write a series of 1's and 0's.
        </li>
        <li>It has conditional statements.</li>
        <h2>Plan</h2>
        <h3>Data Structure?</h3>
        <li>Would a Linked List work?</li>
        <p>I first asked myself if a Linked List could be used to create each node and connect the nodes to each other? I determined the logic would be very complex, and wouldn't be time effective.</p>
        <p>After looking through the project and researching canvas and double buffer. I found canvas difficult to understand and had trouble trying to implement. I went searching online and found 2D arrays.</p>
        <p>I settled on using a 2D array and a library called immer and other built in React tools create the double buffer.</p>
        <li>2D Array</li>
        <li>Double Buffer</li>
        <li>Create a number of div boxes that have a state of on or off. This amount is equal to the amount of elements in the 2D Array.</li>
        <li>Use Immer to create the double buffer so I can have more than one copy of the grid.</li>
        <h3>Logic</h3>
        <p>I determined the logic could be boiled down to a single if else logical statement as follows:</p>
        <li>
          If current node is dead and # of alive neighbors is exactly three then
          it becomes alive
        </li>
        <li>
          If current node is alive and # of alive neighbors less than 2 or greater than 3 than it dies or if it is dead stays dead
        </li>
        
        <h2>Execute</h2>
        <h3>React</h3>
        <li>I started by making a basic Skeleton for the site using react.</li>
        <li>I made 4 components. One for the Grid, a second for Grid controls, The third was a well a defined Rules list I just copied from the Wiki page, and finally a Algorithm section to include all of my UPER.</li>
        <li>Created a 2D Array using nested for loops. Making for a quadratic runtime.</li>
        <li>Mapped over the array to create the divs for the grid.</li>
        <h3>Immer</h3>
        <li>
          I then use the Immer library and useCallback and useRef to make a copy of the grid. That can then be displayed through each life cycle of cells.
        </li>
        <li>Using further control of the dependency array for useCallback, I set the ability of the user to change size of the grid randomize the selected cells, and set the speed of the cycle.</li>
        <li>Gave the user ability to change grid colors.</li>
        <h2>Review</h2>
        <h3>Conclusion</h3>
        <li>After review of the code I think it would improve the runtime to use some doubly linked lists to improve on the runtime of the game to O(n log n) or better. </li>
        <li>It would be better as well to find ways to remove redundancy in the code such as repeated conditional statements in the logic.</li>
        <p>Overall I'm happy with my working solution. I learned a lot and am excited to use what I've learned about runtime and algorithms in the future.</p>
      </div>
    </UPER>
  );
}
