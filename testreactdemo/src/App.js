import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, WingBlank, Range } from 'antd-mobile';

class App extends Component {

  render() {
    const log = (name) => {
      return (value) => {
        console.log(`${name}: ${value}`);
      };
    };
    return (
      <div className="App">
        <WingBlank size="lg">
          <p className="sub-title">Basic range</p>
          <Range
            style={{ marginLeft: 30, marginRight: 30 }}
            min={0}
            max={20}
            defaultValue={[3, 10]}
            onChange={log('change')}
            onAfterChange={log('afterChange')}
          />
        </WingBlank>
      </div>
    );
  }
}

export default App;
