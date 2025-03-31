import { useEffect, useState } from 'react';

/**
 * 타이머 컴포넌트
 *
 * 실시간 시계를 표시하고 사용자가 타이머를 시작하거나 정지할 수 있는 React 함수형 컴포넌트입니다.
 * 시간은 "시", "분", "초"로 나뉘어 표시됩니다.
 *
 * 주요 기능:
 * - 현재 시간을 "HH:mm:ss" 형식으로 표시합니다.
 * - 타이머가 실행 중일 때 매초마다 시간을 업데이트합니다.
 **/

function Clock() {
  // 현재 시간을 상태로 관리
  const [nowTime, setNowTime] = useState(new Date().toLocaleTimeString('en-GB'));
  // 타이머 실행 여부를 상태로 관리
  const [running, setRunning] = useState(true);

  // 시간의 ":"를 제거하고 배열로 변환하는 함수
  const splitTime = (time) => {
    return time.replace(/:/g, '').split('');
  };

  // 현재 시간을 배열로 변환
  const timeArray = splitTime(nowTime);

  // 타이머 실행 상태에 따라 매초마다 시간을 업데이트
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setNowTime(new Date().toLocaleTimeString('en-GB'));
    }, 1000);

    // 컴포넌트가 언마운트되거나 running 상태가 변경될 때 클린업업
    return () => clearInterval(interval);
  }, [running]);

  // 타이머 시작/정지 버튼 클릭 핸들러
  const handleTimerToggle = () => {
    setRunning((prev) => !prev);
  };

  return (
    <div className="timer-container">
      {/* 타이머 컨테이너 마크 */}
      <nav className="timer-container-mark">
        <p className="timer-container-mark-text">timer-container</p>
      </nav>
      {/* 제목 */}
      <h1 className="title">RealTime Clock</h1>
      {/* 시간 표시 박스 */}
      <div className="timer-box">
        <p className="timer-title">{timeArray[0]}</p>
        <p className="timer-title">{timeArray[1]}</p>
        <p className="timer-title">시</p>
        <p className="timer-title">{timeArray[2]}</p>
        <p className="timer-title">{timeArray[3]}</p>
        <p className="timer-title">분</p>
        <p className="timer-title">{timeArray[4]}</p>
        <p className="timer-title">{timeArray[5]}</p>
        <p className="timer-title">초</p>
      </div>
      <button onClick={handleTimerToggle} className={running ? 'button-primary' : 'button-secondary'}>
        {running ? '타이머 정지' : '타이머 시작'}
      </button>
    </div>
  );
}

export default Clock;
