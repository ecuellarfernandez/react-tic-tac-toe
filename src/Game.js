function Square(){
    return(
        <button className="square">
            {/*TODO*/}
        </button>
    )
}

function Board(){
    function renderSquare(i){
        return <Square />
    }

    const status = 'Next Player: X';
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