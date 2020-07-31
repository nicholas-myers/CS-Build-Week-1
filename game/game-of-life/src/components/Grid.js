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
  // 
  const [gridSize, setGridSize] = useState(25);
  // set the number of columns
  let columns = gridSize;
  // set the number of rows
  let rows = gridSize;

 

  // create a number of divs per the amount of columns and rows represented by empty x ann y arrays
  // let x = [];
  // create an empty grid
  const emptyGrid = () => {
    const x = [];
    for (let i = 0; i < rows; i++) {
      x.push(Array.from(Array(columns), () => 0));
    }
    return x;
  };
  const [grid, setGrid] = useState(() => {
    return emptyGrid();
  });
  useEffect(()=> {
    setGrid(emptyGrid())
  }, [gridSize])
  

  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;
  const runGame = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    // simulate
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let x = 0; x < rows; x++) {
          for (let y = 0; y < columns; y++) {
            let neighbors = 0;
            connections.forEach(([r, c]) => {
              const newX = x + r;
              const newY = y + c;
              if (newX >= 0 && newX < rows && newY >= 0 && newY < columns) {
                neighbors += g[newX][newY];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[x][y] = 0;
            } else if (g[x][y] === 0 && neighbors === 3) {
              gridCopy[x][y] = 1;
            }
          }
        }
      });
    });

    setTimeout(runGame, 250);
  }, []);

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
                for (let i = 0; i < rows; i++) {
                  x.push(
                    Array.from(Array(columns), () =>
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
            gridTemplateColumns: `repeat(${columns}, 20px)`,
            gridColumnGap: "0px",
            backgroundColor: "lightgray",
          }}
        >
          {grid.map((rows, x) =>
            rows.map((col, y) => (
              <div
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
      <Controls gridSize={gridSize} setGridSize={setGridSize} setGrid={setGrid} emptyGrid={emptyGrid}/>
    </SideBySide>
  );
}
