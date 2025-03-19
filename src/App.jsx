import { useState } from 'react';
import './App.css';
import Timer from './Timer';

function App() {
  const [componentRunning, setComponentRunning] = useState(true);

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
        {componentRunning && <Timer />}
      </div>
    </>
  );
}

export default App;
