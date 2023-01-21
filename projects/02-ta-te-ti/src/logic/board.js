import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardToCheck) => {
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

export const checkEndGame = (newBoard) => {
    // revisa si hay un empate, si no hay mas espacios para llenar
    return newBoard.every((square) => square !== null);
};