import { tm } from '@/utils/tw-merge';
import Board from './components/board';
import History from './components/history';
import {
  getNextPlayer,
  getStatusMessage,
  getWinner,
  INITIAL_CELLS,
  type Cells,
} from './constants';
import usePersist from '@/hooks/use-persist';
import {
  TicTacToeContext,
  TicTacToeContextValue,
} from './contexts/tic-tac-toe';

function TicTacToeWithContext() {
  // [상태]
  // 게임 보드 셀(cells, 9개(3 x 3))
  const { data: gameHistory, setData: setGameHistory } = usePersist<Cells[]>(
    '@tic-tac-toe/game-history',
    [INITIAL_CELLS],
    { changeOnSave: true }
  );

  // [상태]
  // 게임 순서(order)
  const { data: gameOrder, setData: setGameOrder } = usePersist<number>(
    '@tic-tac-toe/game-order',
    0,
    { changeOnSave: true }
  );

  // [파생된 상태]
  // 현재 게임 보드판
  const currentCells = gameHistory![gameOrder!];

  // [파생된 상태]
  // 다음 플레이어
  const nextPlayer = getNextPlayer(gameOrder!);

  // [파생된 상태]
  // 게임 승자 정보
  const winner = getWinner(currentCells);

  // [파생된 상태]
  // 게임 상태 메시지
  const statusMessage = getStatusMessage(nextPlayer, winner, currentCells);

  // [이벤트 핸들러]
  // 게임 진행 함수
  const handlePlayGame = (index: number) => {
    // 승리자가 있다면 게임 오버(GAME OVER)
    if (winner) {
      // 알림(notification)
      alert(`GAME OVER!\nWinner ${winner.player}`);
      return;
    }

    // 게임 상태 업데이트 (순서)
    const nextGameOrder = gameOrder! + 1;
    setGameOrder(nextGameOrder);

    // 게임 상태 업데이트 (게임 보드 셀)
    const nextCells = currentCells.map((cell, i) =>
      index !== i ? cell : nextPlayer
    );

    const nextGameHistory = [
      ...gameHistory!.slice(0, nextGameOrder),
      nextCells,
    ];

    setGameHistory(nextGameHistory);
  };

  // [이벤트 핸들러]
  // 게임 초기화 함수
  const handleReGame = () => {
    // 게임 운영에 사용되는 상태 초기화 (리셋, 리-게임)
    setGameHistory([INITIAL_CELLS]);
    setGameOrder(0);
  };

  // [이벤트 핸들러]
  // 타임 트레버(시간 여행)
  const handleTimeTravel = (travelIndex: number) => {
    setGameOrder(travelIndex);
  };

  const value = {
    gameHistory,
    currentCells,
    setGameHistory,
    gameOrder,
    setGameOrder,
    nextPlayer,
    winner,
    statusMessage,
    playGame: handlePlayGame,
    restartGame: handleReGame,
    jumpGame: handleTimeTravel,
  } satisfies TicTacToeContextValue;

  return (
    <article className={tm('flex space-x-5 justify-center', 'mt-10')}>
      <h2 className="sr-only">틱택토 게임</h2>
      <TicTacToeContext.Provider value={value}>
        <Board />
        <History />
      </TicTacToeContext.Provider>
    </article>
  );
}

export default TicTacToeWithContext;
