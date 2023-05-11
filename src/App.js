import React, { Component } from "react";
import './style.css';

import { Button, Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
  }

  handleClick = (event) => {
    const value = event.target.value;
    switch (value) {
      case "=": {
        try {
          const result = eval(this.state.result);
          this.setState({ result });
        } catch (error) {
          this.setState({ result: "Hatalı İfade" });
        }
        break;
      }
      case "C": {
        this.setState({ result: "" });
        break;
      }
      default: {
        this.setState({ result: this.state.result + value });
      }
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
        <div className="calculator">
          <div class="card">
          <div class="card-body">
          {this.state.result}
          </div>
        </div>
          <div className="row" >
          <button className="btn btn-secondary"   value="1" onClick={this.handleClick}>
            1
          </button>
          <button className="btn btn-secondary"  value="2" onClick={this.handleClick}>
            2
          </button>
          <button className="btn btn-secondary" value="3" onClick={this.handleClick}>
            3
          </button>
          <button className="btn btn-info" value="+" onClick={this.handleClick}>
            +
          </button>
          </div>
          <div className="row">
          <button className="btn btn-secondary" value="4" onClick={this.handleClick}>
            4
          </button>
          <button className="btn btn-secondary" value="5" onClick={this.handleClick}>
            5
          </button>
          <button className="btn btn-secondary" value="6" onClick={this.handleClick}>
            6
          </button>
          <button className="btn btn-info" value="-" onClick={this.handleClick}>
            -
          </button>
          </div>
          <div className="row">

          <button className="btn btn-secondary" value="7" onClick={this.handleClick}>
            7
          </button>
          <button className="btn btn-secondary" value="8" onClick={this.handleClick}>
            8
          </button>
          <button className="btn btn-secondary" value="9" onClick={this.handleClick}>
            9
          </button>
          <button className="btn btn-info" value="*" onClick={this.handleClick}>
            *
          </button>
          </div>
          <div className="row">
          <button className="btn btn-info" value="/" onClick={this.handleClick}>
            /
          </button>
          <button className="btn btn-secondary" value="0" onClick={this.handleClick}>
            0
          </button>
           
          <button className="btn btn-info" value="C" onClick={this.handleClick}>
            C
          </button>
          <button className="btn btn-info" value="=" onClick={this.handleClick}>
            =
          </button>
          </div>
          
         
          
         
         
        
         
          
        
        </div>
        </div>
      </div>
    );
  }
}

export default App;
