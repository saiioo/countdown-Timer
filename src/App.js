
import React, { useState, useEffect } from 'react';

function App() {
  const [timerValue, setTimerValue] = useState(0);

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      const inputValue = Math.floor(Number(event.target.value));
      if (Number.isInteger(inputValue)) {
        setTimerValue(inputValue);
      } else {
        setTimerValue(0);
      }
      event.target.value = '';
    }
  }

  useEffect(() => {
    let intervalId;
    if (timerValue > 0) {
      intervalId = setInterval(() => {
        setTimerValue((prevValue) => {
          const newValue = prevValue - 1;
          if (newValue === 0) {
            clearInterval(intervalId);
          }
          return newValue;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [timerValue]);

  return (
    <div className='header'>
      <h1>Countdown Timer</h1>
      <input type="text" onKeyDown={handleKeyDown} />
      <div className='timer-display' id="current-time">{timerValue}</div>
    </div>
  );
}

export default App;

