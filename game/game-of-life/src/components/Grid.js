import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";
import produce from "immer";
import Controls from "./Controls";

const SideBySide = styled.section`
  display: flex;
  justify-content: space-between;
  width: 50%;
  h2 {
    color: lightgray;
  }
  label {
    color: lightgray;
  }
`;

const GridControls = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1%;
  margin-bottom: 1%;
  button {
    padding: 1rem;
  }
`;
// create the connection from the cell to its neighbors
const connections = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

export default function Grid() {
  // set the size of the grid
  const [gridSize, setGridSize] = useState(25);
  // set the initial speed of the game
  const [speed, setSpeed] = useState(150)
  
  // create an empty grid
  const emptyGrid = () => {
    // we create an array
    const x = [];
    // push a new array for each grid size
    for (let i = 0; i < gridSize; i++) {
      // this creates a 2d array
      x.push(Array.from(Array(gridSize), () => 0));
    }
    // this 2d array is return to be used in the grid state
    return x;
  };
  // we set the initial state of the array to run the function empty grid which sets grid to be the 2d array
  const [grid, setGrid] = useState(() => {
    return emptyGrid();
  });
  // re-render the grid to proper amount of cells upon grid size change
  useEffect(()=> {
    setGrid(emptyGrid())
  }, [gridSize])

  // set a state of whether our game is running or not
  const [running, setRunning] = useState(false);
  // create a reference to this state to be used in the callback to run the game
  const runningRef = useRef(running);
  runningRef.current = running;


  const runGame = useCallback(() => {
    // if running is false stop running the game
    if (!runningRef.current) {
      return;
    }
    // run the game
    setGrid((g) => {
      // immer produce creates a copy of the original grid, a double buffer
      // this ensures that we don't mutate the original grid and can get the next stage in the life cycle
      return produce(g, (gridCopy) => {
        // if we think of  our array in terms of x and y axis we check the original array for certain conditions
        for (let x = 0; x < gridSize; x++) {
          for (let y = 0; y < gridSize; y++) {
            // count the number of live neighbors
            let neighbors = 0;
            // iterate through the possible connections to find all the neighbors
            connections.forEach(([r, c]) => {
              // create new x and y coordinates for our 2d array
              const newX = x + r;
              const newY = y + c;
              // check if its a coordinate on the grid
              // count the number of live neighbors
              if (newX >= 0 && newX < gridSize && newY >= 0 && newY < gridSize) {
                neighbors += g[newX][newY];
              }
            });
            // the cell dies from under or overpopulation
            // combining the two rules together
            // this also combines the rules on whether the cell will stay alive
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[x][y] = 0;
              // will the cell be birthed from the right condition of exactly 3 live neighbors
            } else if (g[x][y] === 0 && neighbors === 3) {
              gridCopy[x][y] = 1;
            }
          }
        }
      });
    });
    // set the speed of the lifecycle
    setTimeout(runGame, speed);
    // speed and gridsize are in the dependency array so that when they change our game will update properly
  }, [speed, gridSize]);

  // console.log(grid);
  return (
    <SideBySide>
      <div>
        <h2>Grid</h2>
        <GridControls>
          <button
            onClick={() => {
              setRunning(!running);
              runningRef.current = true;
              runGame();
            }}
          >
            {running ? "Stop" : "Start"}
          </button>
          <button
            onClick={() => {
              //   random
              if (running == false) {
                const x = [];
                for (let i = 0; i < gridSize; i++) {
                  x.push(
                    Array.from(Array(gridSize), () =>
                      Math.random() > 0.5 ? 1 : 0
                    )
                  );
                }
                setGrid(x);
              }
            }}
          >
            Random
          </button>
          <button
            onClick={() => {
              if (running == false) {
                setGrid(emptyGrid());
              }
            }}
          >
            Clear
          </button>
        </GridControls>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize}, 20px)`,
            gridColumnGap: "0px",
            backgroundColor: "lightgray",
          }}
        >
          {grid.map((rows, x) =>
            rows.map((col, y) => (
              <div
                // key={y}
                onClick={() => {
                  if (running == false) {
                    const newGrid = produce(grid, (gridCopy) => {
                      gridCopy[x][y] = gridCopy[x][y] ? 0 : 1;
                    });
                    setGrid(newGrid);
                  }
                }}
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: grid[x][y] ? "black" : undefined,
                  border: "1px solid black",
                }}
              ></div>
            ))
          )}
        </div>
      </div>
      <Controls speed={speed} setSpeed={setSpeed} gridSize={gridSize} setGridSize={setGridSize} running={running}/>
    </SideBySide>
  );
}
