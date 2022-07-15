import React, { useEffect, useState } from 'react';

const StopWatch = () => {
  const [date, setDate] = useState('');
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const getTime = () => {
      setDate(new Date().toLocaleTimeString());
    };
    const intervel = setInterval(() => {
      getTime();
    }, 1000);
    return () => clearInterval(intervel);
  }, []);

  const startTimer = () => {
    let hours, mins, secs;
    if (started) {
      setSec(sec + 1);
      if (sec > 60) {
        setMin(min + 1);
        setSec(0);
      }
    }
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h4>{date} </h4>
      <h1>Stop watch </h1>
      <p>{`${hour}:${min}:${sec}`}</p>
      <button>Start</button>
    </div>
  );
};

export default StopWatch;
