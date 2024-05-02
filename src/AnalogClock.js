import React, { useState, useEffect } from 'react';
import './AnalogClock.css';

function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  const secStyle = {
    transform: `rotate(${time.getSeconds() * 6}deg)`
  };

  const minStyle = {
    transform: `rotate(${time.getMinutes() * 6}deg)`
  };

  const hourStyle = {
    transform: `rotate(${time.getHours() * 30 + time.getMinutes() * 0.5}deg)`
  };

  return (
    <div class="clock-container">
      <div className="clock">
      <div class="dot"></div>
        <div class="num num1"><span>1</span></div>
        <div class="num num2"><span>2</span></div>
        <div class="num num3"><span>3</span></div>
        <div class="num num4"><span>4</span></div>
        <div class="num num5"><span>5</span></div>
        <div class="num num6"><span>6</span></div>
        <div class="num num7"><span>7</span></div>
        <div class="num num8"><span>8</span></div>
        <div class="num num9"><span>9</span></div>
        <div class="num num10"><span>10</span></div>
        <div class="num num11"><span>11</span></div>
        <div class="num num12"><span>12</span></div>
      <div className="hand sec-hand" style={secStyle}></div>
      <div className="hand min-hand" style={minStyle}></div>
      <div className="hand hr-hand" style={hourStyle}></div>
    </div>
    </div>
  );
}

export default AnalogClock;