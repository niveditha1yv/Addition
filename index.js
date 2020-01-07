import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
     a: '',
     b:'',
     c:0
    };
  }
 addNum = () =>{
   this.setState({c:parseInt(this.state.a) + parseInt(this.state.b)})
 }

  render() {
    return (
      <div>
     
        <p>
          First Num <input onChange = {event => this.setState({a:event.target.value})} value={this.state.a} />
        </p>
         <p>
          Scond Num <input onChange={event=> this.setState({b:event.target.value})} value={this.state.b} />
        </p>
         <p>
          the Sum is:  {this.state.c}
        </p>
         <p>
         <button onClick={this.addNum}>ADD</button>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
