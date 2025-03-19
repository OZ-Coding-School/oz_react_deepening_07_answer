import { useEffect, useState } from 'react';

function Timer() {
  const [nowTime, setNowTime] = useState(new Date().toLocaleTimeString('en-GB'));
  const [running, setRunning] = useState(true);

  const splitTime = (time) => {
    return time.replace(/:/g, '').split('');
  };

  const timeArray = splitTime(nowTime);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setNowTime(new Date().toLocaleTimeString('en-GB'));
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  const handleTimerToggle = () => {
    setRunning((prev) => !prev);
  };

  return (
    <div className="timer-container">
      <nav className="timer-container-mark">
        <p className="timer-container-mark-text">timer-container</p>
      </nav>
      <h1 className="title">RealTime Clock</h1>
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

export default Timer;
