import { useState } from "react";
import Squares from "./components/game.squares";
import checkWinner from "./services/checkWinner";
import GameHistoryCard from "./components/game.history";

export default function App() {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [history, setGameHistory] = useState([]);
  const [winner, SetWinner] = useState("");
  const [isXNext, setIsXNext] = useState(true);
  const [gamesIndex, setGameIndex] = useState(1);

  const handleUserInput = (userInput) => {
    const currentSquares = [...squares];
    if (currentSquares[userInput] || winner) return;

    currentSquares[userInput] = isXNext ? "X" : "O";
    setSquare(currentSquares);
    setIsXNext(!isXNext);
    //XD
    squares = true

    let winnerResult = checkWinner(currentSquares);

    if (winnerResult) {
      SetWinner(winnerResult);
      setGameHistory((prevGames) => [
        ...prevGames,
        { id: gamesIndex, winner: winnerResult },
      ]);
      setGameIndex((game) => game + 1);
    }
  };

  const startNewGame = () => {
    setSquare(Array(9).fill(null))
    setIsXNext(true)
    SetWinner("")
  }

  return (
    <>
      <div className="min-h-screen w-full bg-gray-800 flex-col">
        <div className="flex items-center justify-evenly flex-row-reverse">
          <div>
            <div className="flex items-center justify-center flex-col">
              <h1 className="text-white text-4xl font-bold mt-5">
                Tic Tac Toe
              </h1>
              <span className="text-white font-bold italic text-3xl">
                Current Player: {isXNext ? "X" : "O"} {" "}
              </span>
            </div>

            <div className="flex items-center justify-evenly">
              <div className="flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {!winner ? "" : `Winner is ${winner} `}
                </span>
              </div>

              <div className="flex items-center justify-center">
                <button onClick={() => startNewGame()} className="text-white font-bold text-xl hover:cursor-pointer hover:text-gray-300">
                  {!winner ? "" : `New Game`}
                </button>
              </div>

              <div className="flex items-center justify-center">
                <button onClick={() => window.location.reload()} className="text-white font-bold text-xl hover:cursor-pointer hover:text-gray-300">
                  {!winner ? "" : `Reload Window`}
                </button>
              </div>
            </div>

            {/* Board Section */}
            <div className="flex items-center justify-center flex-col mt-5 space-y-1.5">
              <div className="grid grid-cols-3 gap-1.5">
                <Squares
                  value={squares[0]}
                  onClick={() => handleUserInput(0)}
                />
                <Squares
                  value={squares[1]}
                  onClick={() => handleUserInput(1)}
                />
                <Squares
                  value={squares[2]}
                  onClick={() => handleUserInput(2)}
                />
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                <Squares
                  value={squares[3]}
                  onClick={() => handleUserInput(3)}
                />
                <Squares
                  value={squares[4]}
                  onClick={() => handleUserInput(4)}
                />
                <Squares
                  value={squares[5]}
                  onClick={() => handleUserInput(5)}
                />
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                <Squares
                  value={squares[6]}
                  onClick={() => handleUserInput(6)}
                />
                <Squares
                  value={squares[7]}
                  onClick={() => handleUserInput(7)}
                />
                <Squares
                  value={squares[8]}
                  onClick={() => handleUserInput(8)}
                />
              </div>
            </div>
          </div>
          <div className="rounded-md mt-5 justify-center bg-white h-[75dvh] w-72">
            <div className="flex items-center justify-center mt-2 flex-col">
              <h1 className="font-bold text-black ">Game History</h1>
              {history.map((game, key) => (
                <div key={key}>
                  {!game ? (
                    <span>Theres no game yet.</span>
                  ) : (
                    <div className="mt-5 overflow-y-auto">
                      <GameHistoryCard Id={game.id} Winner={game.winner} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
