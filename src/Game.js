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

function Board({ squares, onClick }){

    function renderSquare(i){
        return <Square 
                    value={squares[i]}
                    onClick={()=> onClick(i)}
                />
    }

    return(
        <div>
            {/* <div className="status">{status}</div> */}

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

    const [history, setHistory] = useState( [ Array(9).fill(null) ] );
    const [xIsNext, setNext] = useState(true); 

    function handleClick(i){
        const current = history[history.length - 1];
        const squares = current.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory( history.concat( [squares] ) );
        setNext(prevState=>!prevState);
    }

    const current = history[history.length -1];

    const winner = calculateWinner(current);
    let status;

    if(winner) {
        status = 'Winner ' + winner;
    }else{
        status = 'Next player ' + (xIsNext ? 'X' : 'O')
    }
    

    return(
        <div className="game">

            <div className="game-board">
                <Board 
                    squares={current}
                    xIsNext={xIsNext}
                    onClick={handleClick}
                />
            </div>

            <div className="game-info">
                <div>{status}</div>
                <div>{/* TODO */ }</div>
            </div>

        </div>
    )
}

function calculateWinner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    }
    return null;
}