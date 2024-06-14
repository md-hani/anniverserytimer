import './App.css';
import React, { useState } from 'react';

function App() {
  const now = new Date();
  const hour = (now.getHours()).toString().padStart(2, "0");
  const min = now.getMinutes().toString().padStart(2, "0");
  const sec = now.getSeconds().toString().padStart(2, "0");
  const msc = now.getMilliseconds().toString();

  const [swtime, setSwtime] = useState(0);

  setInterval(() => {
    setSwtime(swtime + 1000);
  }, 1000);

  if (hour === "23" && min === "59" & sec === "59" & msc === "50") {
    var elements = document.getElementsByClassName('myText');
    console.log(elements);
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.classList.toggle('visible');
      document.body.classList.toggle("add-background");
    }
  }

  return (
    <>
      <p className='myText'>Happy 5 Months Anniversary Darling!!!!</p>
      <div className='container'>
        <div className='clock-container'>
          <p>{hour[0]}</p>
        </div>
        <div className='clock-container'>
        <p>{hour[1]}</p>
        </div>
        <div className='separators'>
          <div className='separator1'></div>
          <div className='separator2'></div>
        </div>
        <div className='clock-container'>
          <p>{min[0]}</p>
        </div>
        <div className='clock-container'>
          <p>{min[1]}</p>
        </div>
        <div className='separators'>
          <div className='separator1'></div>
          <div className='separator2'></div>
        </div>
        <div className='clock-container'>
          <p>{sec[0]}</p>
        </div>
        <div className='clock-container'>
          <p>{sec[1]}</p>
        </div>
      </div>
    </>
  );
}

export default App;
