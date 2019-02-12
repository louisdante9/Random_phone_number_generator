import React, {Component, Fragment} from 'react';
import './App.css';
import Header from "./Header";
import SubTitle from "./SubTitle";
import NumberInput from "./NumberInput";
import Sorter from "./Sorter";
import GeneratedNumbers from "./GeneratedNumbers";
import Error from "./Error";

class App extends Component {
  state = {
    error: false,
    message: "",
    limit: 1,
    phoneNumbers: [],
    min: null,
    max: null,
    total: 0
  };
  setStatistics = () => {
    const { phoneNumbers } = this.state;
    if (phoneNumbers.length > 0) {
      const min = Math.min(...phoneNumbers);
      const max = Math.max(...phoneNumbers);
      const total = phoneNumbers.length;
      this.setState({
        min,
        max,
        total
      })
    }
  };
  generateNumberHandler = event => {
    event.preventDefault();
    const { limit } = this.state;
    if (limit > 10000) return this.setState({
      error: true,
      message: "The number entered exceeds the accepted limit"
    });
    let phoneNumbers = [];
    let phoneNumber = 0;
    while (phoneNumber < limit) {
      phoneNumbers.push('0' + Math.floor(Math.random() * 900000000 + 100000000));
      phoneNumber++;
    }
    return this.setState({
      phoneNumbers
    }, () => this.setStatistics());
  };

  getUserInput = async event => {
    event.preventDefault();
    const limit = event.target.value;
    try {
      if (Math.floor(Number(limit))) {
        this.setState({
          limit
        })
      }
    } catch (e) {
      this.setState({
        error: true,
        message: "Error occurred while parsing the input"
      })
    }
  };

  render() {
    const { error, message, phoneNumbers, min, max, total  } = this.state;
    return (
        <Fragment>
          <Header  
          phoneNumbers={phoneNumbers}
              min={min}
              max={max}
              total={total}
            />
          <div className="wrapper">
            <SubTitle/>
            <div className="App-body">
            <Error
                  error={error}
                  message={message}
              />
             <div className="input-wrapper"> 
               <NumberInput 
                  onClick={this.generateNumberHandler}
                  onChange={this.getUserInput}
                  />
               <Sorter/>
              </div>
              <GeneratedNumbers
                  phoneNumbers={phoneNumbers}
              />              {/* <button>Export Numbers</button> */}
            </div>
          </div>
        </Fragment>
    );
  }
}

export default App;