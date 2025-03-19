import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [nowTime, setNowTime] = useState(new Date().toLocaleTimeString('en-GB'));
  const [running, setRunning] = useState(true);
  const [componentRunning, setComponentRunning] = useState(true);
  const splitTime = (time) => {
    return time.replace(/:/g, '').split('');
  };
  const timeArray = splitTime(nowTime);

  useEffect(() => {
    if (!running || !componentRunning) return;

    const interval = setInterval(() => {
      setNowTime(new Date().toLocaleTimeString('en-GB'));
    }, 1000);

    return () => clearInterval(interval);
  }, [running, componentRunning]);

  const handleTimerToggle = () => {
    setRunning((prev) => !prev);
  };

  const handleComponentToggle = () => {
    setComponentRunning((prev) => !prev);
  };
  return (
    <>
      <div className="container">
        <button
          onClick={handleComponentToggle}
          className={componentRunning ? 'button-primary button-ab' : 'button-secondary button-ab'}
        >
          {componentRunning ? '컴포넌트 정지' : '컴포넌트 시작'}
        </button>

        {componentRunning && (
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
        )}
      </div>
    </>
  );
}

export default App;
