import "./App.css";
import { TURNS } from "./constants";
import { Square } from "./components/Square";
import { useState } from "react";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.x);
  const updateBoard = (index) => {
    // No actualizar la posicion
    //si ya contiene un elemento dentro
    if (board[index]) return;
    //Actualiza el tablero cuando se da click
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // cambia el turno entre 'x' y 'o'
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);
  };
  return (
    <main className="board">
      <h1>Ta te ti</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>
    </main>
  );
}

export default App;
