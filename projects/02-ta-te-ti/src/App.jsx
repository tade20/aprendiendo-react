import "./App.css";
import { TURNS } from "./constants";
import { Square } from "./components/Square";
import { useState } from "react";
import confetti from "canvas-confetti";
import { checkWinner, checkEndGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
function App() {
  const [board, setBoard] = useState(() => {
    const boardLocalStorage = window.localStorage.getItem("board");
    return boardLocalStorage
      ? JSON.parse(boardLocalStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnLocalStorage = window.localStorage.getItem("turn");
    return turnLocalStorage ? turnLocalStorage : TURNS.x;
  });
  // null no hay ganador, false hay un empate
  const [winner, setWinner] = useState(null);
  //Funcion para revisar todas las convinaciones ganadoras
  //y retorna el ganador

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
    // Guardar la partida para poder seguir jugando donde se quedo
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);
    //Aca se revisa si hay un nuevo ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      // verifica si hay un empate
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);

    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
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
      <button onClick={resetGame}>Reset</button>
      <section className="turn">
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
