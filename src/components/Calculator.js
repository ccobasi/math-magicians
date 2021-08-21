import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="calculator">
          <div className="display">
            0
          </div>
          <div className="operators">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button" className="orange">/</button>
          </div>
          <div className="digits">
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button" className="orange">x</button>
            <br />
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button" className="orange">-</button>
            <br />
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" className="orange">+</button>
            <br />
          </div>
          <div className="digit">
            <button type="button" className="zero">0</button>
            <button type="button">.</button>
            <button type="button" className="orange">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;