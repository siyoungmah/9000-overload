import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => {

  const goOver9000 = () => {
    const arr: number[] = [];
    for(let i: number = 0; i < 1000000000000; i++){
      arr.push(i);
      if(i === 9001) console.log('It\'s over 9000!');
    }
  }

  return (
    <div id="app">
      <header id="title">
        <h1>It's over 9000!</h1>
      </header>

      <main id="main-container">
        <div id="img-container">
          <img src="https://c.tenor.com/VxROHxvL1YcAAAAC/its-over9000-over9000.gif" alt="" />
        </div>
        <div id="button-container">
          <button id="button" type="button" onClick={ goOver9000 }>GO OVER 9000!</button>
        </div>
      </main>
    </div>
  )
};

export default App;