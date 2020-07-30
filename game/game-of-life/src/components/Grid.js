import React, { useState, useCallback, useRef } from "react";
import styled from "styled-components";
import produce from "immer";
import Controls from "./Controls";

const SideBySide = styled.section`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

const GridControls = styled.div`
  margin-top: 1%;
  
`

const operations = [
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
  const gridSize = useState();
  // set the number of columns
  let columns = 25;
  // set the number of rows
  let rows = 25;

  // create a number of divs per the amount of columns and rows represented by empty x ann y arrays
  let x = [];
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
            operations.forEach(([r, c]) => {
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

  console.log(grid);
  return (
    <SideBySide>
      <div>
        <h2>Grid</h2>
        <div>
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
              const x = [];
              for (let i = 0; i < rows; i++) {
                x.push(
                  Array.from(Array(columns), () =>
                    Math.random() > 0.5 ? 1 : 0
                  )
                );
              }
              setGrid(x);
            }}
          >
            Random
          </button>
          <button
            onClick={() => {
              setGrid(emptyGrid());
            }}
          >
            Clear
          </button>
        </div>
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
                  const newGrid = produce(grid, (gridCopy) => {
                    gridCopy[x][y] = gridCopy[x][y] ? 0 : 1;
                  });
                  setGrid(newGrid);
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
      <Controls />
    </SideBySide>
  );
}
