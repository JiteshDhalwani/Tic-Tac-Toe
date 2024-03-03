import { useState } from "react";
import Square from "./components/Square";
import Confetti from 'react-confetti'

export default function Board() {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isXNext, setXNext] = useState(true)
    
    function handleClick(i) {
        if (squares[i] || handleWinner(squares)) {
            return
        }
        const newArray = [...squares]
        if (isXNext) {
            newArray[i] = "X"
            setSquares(newArray)
        } else {
            newArray[i] = "O"
            setSquares(newArray)
        }
        setXNext(!isXNext)
    }

    const winner = handleWinner()
    let status = ""
    let isWinner = false
    if (winner) {
        status = "Winner is: " + winner
        isWinner = true
    } else {
        let sol = isXNext ? "X" : "O"
        status = "Next turn: " + sol
    }

    function handleWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ]
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
            }
          }
          return null;
    }

    return (
        <div id="container">
            <div className="status">{status}</div>
            {isWinner ? <Confetti /> : null}
            <div>
                <div className="board-row">
                    <Square value={squares[0]} handleSquareClick={() => handleClick(0)}/>
                    <Square value={squares[1]} handleSquareClick={() => handleClick(1)}/>
                    <Square value={squares[2]} handleSquareClick={() => handleClick(2)}/>
                </div>
                <div className="board-row">
                    <Square value={squares[3]} handleSquareClick={() => handleClick(3)}/>
                    <Square value={squares[4]} handleSquareClick={() => handleClick(4)}/>
                    <Square value={squares[5]} handleSquareClick={() => handleClick(5)}/>
                </div>
                <div className="board-row">
                    <Square value={squares[6]} handleSquareClick={() => handleClick(6)}/>
                    <Square value={squares[7]} handleSquareClick={() => handleClick(7)}/>
                    <Square value={squares[8]} handleSquareClick={() => handleClick(8)}/>
                </div>
            </div>
        </div>
    )
}