import React, { useState } from 'react';
import calculate from './logic/calculator';

function Calculator() {
  const [calc, calcUpdate] = useState({ total: null, next: null, operation: null });

  const updateCalc = (e) => {
    const currCalc = calculate(calc, e.target.value);
    const display = document.querySelector('.display');
    if (currCalc.total === null) {
      currCalc.total = '0';
    }
    if (currCalc.total !== null) {
      display.innerText = currCalc.next;
    } else {
      display.innerText = currCalc.total;
    }
    calcUpdate(currCalc);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          0
        </div>
        <div className="operators">
          <button type="button" onClick={updateCalc} value="AC">AC</button>
          <button type="button" onClick={updateCalc} value="+/-">+/-</button>
          <button type="button" onClick={updateCalc} value="%">%</button>
          <button type="button" onClick={updateCalc} value="÷" className="orange">÷</button>
        </div>
        <div className="digits">
          <button type="button" onClick={updateCalc} value="7">7</button>
          <button type="button" onClick={updateCalc} value="8">8</button>
          <button type="button" onClick={updateCalc} value="9">9</button>
          <button type="button" onClick={updateCalc} value="x" className="orange">x</button>
          <br />
          <button type="button" onClick={updateCalc} value="4">4</button>
          <button type="button" onClick={updateCalc} value="5">5</button>
          <button type="button" onClick={updateCalc} value="6">6</button>
          <button type="button" onClick={updateCalc} value="-" className="orange">-</button>
          <br />
          <button type="button" onClick={updateCalc} value="1">1</button>
          <button type="button" onClick={updateCalc} value="2">2</button>
          <button type="button" onClick={updateCalc} value="3">3</button>
          <button type="button" onClick={updateCalc} value="+" className="orange">+</button>
          <br />
        </div>
        <div className="digit">
          <button type="button" onClick={updateCalc} value="0" className="zero">0</button>
          <button type="button" onClick={updateCalc} value=".">.</button>
          <button type="button" onClick={updateCalc} value="=" className="orange">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
