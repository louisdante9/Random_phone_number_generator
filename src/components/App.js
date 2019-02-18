import React, {Component, Fragment} from 'react';
import saveAs from 'file-saver';
import './App.css';
import Header from "./Header";
import SubTitle from "./SubTitle";
import NumberInput from "./NumberInput";
import Sorter from "./Sorter";
import GeneratedNumbers from "./GeneratedNumbers";
import Error from "./Error";
import ExportButton from './ExportButton'

class App extends Component {
  state = {
    error: false,
    message: "",
    limit: 1,
    phoneNumbers: [],
    min: null,
    max: null,
    total: 0,
    sorter: 'asc'
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
    }, () => 
    this.setStatistics(),
    this.sortPhoneNumbers()
    );
  };

  exportPhoneNumbers = () => {
    const { phoneNumbers } = this.state;
    if (phoneNumbers.length > 0) {
      saveAs(new Blob(phoneNumbers, { 
        type: "text/csv;charset=utf-8" 
      }), 'phone_numbers.csv')
    }
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
      console.log('an error has occured', e.message)
    }
  };

  sortPhoneNumbers = () => {
    const { sorter, phoneNumbers } = this.state;
    if (!phoneNumbers.length > 0) return;
    if(sorter === 'asc'){
      this.setState({
        phoneNumbers : phoneNumbers.sort((x,y) => 0 - (x > y ? -1 : 1))
      });
    } else {
      this.setState({
        phoneNumbers : phoneNumbers.sort((x,y) => 0 - (x > y ? 1 : -1))
      })
    }
  };
  onSortChange = event => {
    event.preventDefault();
    const sorter = event.target.value;
    this.setState({
      sorter
    }, () => this.sortPhoneNumbers());
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
               <Sorter
                phoneNumbers={phoneNumbers}
                onChange={this.onSortChange}
               />
              </div>
             <ExportButton
                phoneNumbers={phoneNumbers}
                onClick={this.exportPhoneNumbers}
             />
              <GeneratedNumbers
                  phoneNumbers={phoneNumbers}
              />              
            </div>
          </div>
        </Fragment>
    );
  }
}

export default App;