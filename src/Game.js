import React, { useState } from 'react'

function Square({ value, onClick }){
    return(
        <button
            className="square"
            onClick={onClick}
        >
            {value}
        </button>
    )
}

function Board(){
    const [squares, setSquares] = useState( Array(9).fill(null) )
    const [xIsNext, setNext] = useState(true)

    function handleClick(i){
        const squaresCopy = squares.slice();
        squaresCopy[i] = xIsNext ? 'X' : 'O';
        setSquares(squaresCopy);
        setNext(!xIsNext);
    }

    function renderSquare(i){
        return <Square 
                value={squares[i]}
                onClick={()=> handleClick(i)}
                />
    }

    const status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
    return(
        <div>
            <div className="status">{status}</div>

            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default function Game(){
    return(
        <div className="game">

            <div className="game-board">
                <Board />
            </div>

            <div className="game-info">
                <div>{/* Status */ }</div>
                <div>{/* TODO */ }</div>
            </div>

        </div>
    )
}