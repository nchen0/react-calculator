import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "0",
      temp: "",
      storedNumber: "",
      storedAction: "",
      actionClicked: false
    };
  }
  inputNumber = number => {
    //let tempNumber = this.state.temp
    if (this.state.actionClicked === true) {
      this.setState({ storedNumber: this.state.temp, temp: number, actionClicked: false });
    } else {
      this.setState({ temp: this.state.temp + number });
    }
  };
  clickClear = e => {
    e.preventDefault();
    this.setState({
      result: "0",
      temp: "",
      storedNumber: "",
      storedAction: "",
      actionClicked: false
    });
  };
  clickAction = action => {
    this.setState({ actionClicked: true, storedAction: action });
  };
  clickEqual = e => {
    switch (this.state.storedAction) {
      case "+":
        this.setState({
          temp: Number(this.state.storedNumber) + Number(this.state.temp),
          storedNumber: ""
        });
        return;
      case "-":
        this.setState({
          temp: Number(this.state.storedNumber) - Number(this.state.temp),
          storedNumber: ""
        });
        return;
      case "x":
        this.setState({
          temp: Number(this.state.storedNumber) * Number(this.state.temp),
          storedNumber: ""
        });
        return;
      case "/":
        this.setState({
          temp: Number(this.state.storedNumber) / Number(this.state.temp),
          storedNumber: ""
        });
        return;
    }
  };

  render() {
    console.log("this.state is: ", this.state);
    return (
      <div className="App">
        <div className="container">
          <div className="display-screen">
            {this.state.temp ? this.state.temp : this.state.result}
          </div>
          <div className="buttons">
            <div className="number-buttons">
              <div onClick={this.clickClear} className="big-button clear-button">
                Clear
              </div>
              <div onClick={() => this.inputNumber("7")} className="button">
                7
              </div>
              <div onClick={() => this.inputNumber("8")} className="button">
                8
              </div>
              <div onClick={() => this.inputNumber("9")} className="button">
                9
              </div>
              <div onClick={() => this.inputNumber("4")} className="button">
                4
              </div>
              <div onClick={() => this.inputNumber("5")} className="button">
                5
              </div>
              <div onClick={() => this.inputNumber("6")} className="button">
                6
              </div>
              <div onClick={() => this.inputNumber("1")} className="button">
                1
              </div>
              <div onClick={() => this.inputNumber("2")} className="button">
                2
              </div>
              <div onClick={() => this.inputNumber("3")} className="button">
                3
              </div>
              <div onClick={() => this.inputNumber("0")} className="big-button">
                0
              </div>
            </div>
            <div className="action-buttons">
              <div onClick={() => this.clickAction("/")} className=" button action-button">
                ÷
              </div>
              <div onClick={() => this.clickAction("x")} className=" button action-button">
                ×
              </div>
              <div onClick={() => this.clickAction("-")} className=" button action-button">
                −
              </div>
              <div onClick={() => this.clickAction("+")} className=" button action-button">
                +
              </div>
              <div onClick={this.clickEqual} className=" button action-button equal-button">
                =
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
