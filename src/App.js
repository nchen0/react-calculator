import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="display-screen">0</div>
          <div className="buttons">
            <div className="number-buttons">
              <div className="big-button">Clear</div>
              <div className="button">7</div>
              <div className="button">8</div>
              <div className="button">9</div>
              <div className="button">4</div>
              <div className="button">5</div>
              <div className="button">6</div>
              <div className="button">1</div>
              <div className="button">2</div>
              <div className="button">3</div>
              <div className="button zero">0</div>
            </div>
            <div className="action-buttons">
              <div className="button">÷</div>
              <div className="button">×</div>
              <div className="button">-</div>
              <div className="button">+</div>
              <div className="button">=</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
