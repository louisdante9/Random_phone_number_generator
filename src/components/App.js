import React, {Component, Fragment} from 'react';
import './App.css';
import Header from "./Header";
import SubTitle from "./SubTitle";
import NumberInput from "./NumberInput";
import Sorter from "./Sorter";
import GeneratedNumbers from "./GeneratedNumbers";
// import Statistics from "./Statistics";

class App extends Component {
  render() {
    return (
        <Fragment>
          <Header/>
          <div className="wrapper">
            <SubTitle/>
            <div className="App-body">
             <div className="input-wrapper"> 
               <NumberInput/>
               <Sorter/>
              </div>
              <GeneratedNumbers/>
              {/* <button>Export Numbers</button> */}
            </div>
          </div>
        </Fragment>
    );
  }
}

export default App;