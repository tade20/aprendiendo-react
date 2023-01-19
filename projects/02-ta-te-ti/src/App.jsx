import "./App.css";
import { TURNS, WINNER_COMBOS } from "./constants";
import { Square } from "./components/Square";
import { useState } from "react";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.x);
  // null no hay ganador, false hay un empate
  const [winner, setWinner] = useState(null);
  //Funcion para revisar todas las convinaciones ganadoras
  //y retorna el ganador
  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    //Si no hay ganador retorna null
    return null;
  };
  const updateBoard = (index) => {
    // No actualizar la posicion
    //si ya contiene un elemento dentro
    if (board[index] || winner) return;
    //Actualiza el tablero cuando se da click
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // cambia el turno entre 'x' y 'o'
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);
    //Aca se revis si hay un nuevo ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    }
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
