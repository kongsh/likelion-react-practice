import { tm } from '@/utils/tw-merge';
import Board from './components/board';
import History from './components/history';
import { useState } from 'react';
import {
  Cells,
  getNextPlayer,
  getStatusMessage,
  getWinner,
  INITIAL_CELLS,
} from './constants';

function TicTacToe() {
  const [gameHistory, setGameHistory] = useState<Cells[]>([INITIAL_CELLS]);
  const [gameOrder, setGameOrder] = useState<number>(0);

  const currentCells = gameHistory[gameOrder];
  const nextPlayer = getNextPlayer(gameOrder);
  const winner = getWinner(currentCells);
  const statusMessage = getStatusMessage(nextPlayer, winner, currentCells);

  const handlePlayGame = (index: number) => {
    if (winner) {
      alert(`GAME OVER! Winner ${winner.player}`);
      return;
    }

    const nextGameOrder = gameOrder + 1;
    setGameOrder(nextGameOrder);

    const nextCells = currentCells.map((cell, i) =>
      index !== i ? cell : nextPlayer
    );
    const nextGameHistory = [...gameHistory.slice(0, nextGameOrder), nextCells];
    setGameHistory(nextGameHistory);
  };

  const handleReGame = () => {
    setGameHistory([INITIAL_CELLS]);
    setGameOrder(0);
  };

  const handleTimeTravel = (travelIndex: number) => {
    setGameOrder(travelIndex);
  };

  return (
    <article className={tm('flex space-x-5 justify-center', 'mt-10')}>
      <h2 className="sr-only">틱택토 게임</h2>
      <Board
        cells={currentCells}
        winner={winner}
        statusMessage={statusMessage}
        onPlayGame={handlePlayGame}
        onReGame={handleReGame}
      />
      <History
        count={gameHistory.length}
        onReGame={handleReGame}
        onTimeTravel={handleTimeTravel}
      />
    </article>
  );
}

export default TicTacToe;
