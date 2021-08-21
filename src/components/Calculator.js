import React from 'react';
import calculate from './logic/calculator';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

 updateCalc = (e) => {
   const newState = calculate(this.state, e.target.value);
   this.setState(newState);
   const display = document.querySelector('.display');
   if (newState.next !== null) {
     display.innerText = newState.next;
   } else {
     display.innerText = newState.total;
   }
 }

 render() {
   return (
     <div className="App">
       <div className="calculator">
         <div className="display">
           0
         </div>
         <div className="operators">
           <button type="button" onClick={this.updateCalc} value="AC">AC</button>
           <button type="button" onClick={this.updateCalc} value="+/-">+/-</button>
           <button type="button" onClick={this.updateCalc} value="%">%</button>
           <button type="button" onClick={this.updateCalc} value="÷" className="orange">÷</button>
         </div>
         <div className="digits">
           <button type="button" onClick={this.updateCalc} value="7">7</button>
           <button type="button" onClick={this.updateCalc} value="8">8</button>
           <button type="button" onClick={this.updateCalc} value="9">9</button>
           <button type="button" onClick={this.updateCalc} value="x" className="orange">x</button>
           <br />
           <button type="button" onClick={this.updateCalc} value="4">4</button>
           <button type="button" onClick={this.updateCalc} value="5">5</button>
           <button type="button" onClick={this.updateCalc} value="6">6</button>
           <button type="button" onClick={this.updateCalc} value="-" className="orange">-</button>
           <br />
           <button type="button" onClick={this.updateCalc} value="1">1</button>
           <button type="button" onClick={this.updateCalc} value="2">2</button>
           <button type="button" onClick={this.updateCalc} value="3">3</button>
           <button type="button" onClick={this.updateCalc} value="+" className="orange">+</button>
           <br />
         </div>
         <div className="digit">
           <button type="button" onClick={this.updateCalc} value="0" className="zero">0</button>
           <button type="button" onClick={this.updateCalc} value=".">.</button>
           <button type="button" onClick={this.updateCalc} value="=" className="orange">=</button>
         </div>
       </div>
     </div>
   );
 }
}

export default Calculator;
