import React, { useEffect, useState } from 'react';

const StopWatch = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const getTime = () => {
      setDate(new Date().toLocaleTimeString());
    };
    const inte = setInterval(() => {
      getTime();
    }, 1000);
    return () => clearInterval(inte);
  });
  console.log(date);
  return (
    <div style={{ textAlign: 'center' }}>
      <h4>{date} </h4>
      {/* <h1>Stop watch </h1>
      <p>hh:mm:ss </p>
      <button>Start</button> */}
    </div>
  );
};

export default StopWatch;
