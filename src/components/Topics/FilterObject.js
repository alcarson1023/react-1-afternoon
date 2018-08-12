import React, { Component } from 'react';

export default class FilterObject extends Component{


  constructor() {
    super();

    this.state = {
      employees: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],
   newObj: [],
    userInput: '',
  }

}
arr(prop){
    var arr = this.state.arr;
    var newObj = []
    for(let i = 0; i<arr.length; i++ ){
      if(arr[i].hasOwnProperty(prop)){
        newObj.push(arr[i])
        newObj.push(' ')
      }
    }
    this.setState({ newObj: newObj,})
  }
handleChange(val){
    this.setState({ userInput: val })
}


  render(){
    return(
    <div className='puzzleBox filterObjectPB'>
      <h4>Filter Object</h4>
      <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
      <input className='inputLine' onChange={(e)=>this.handleChange(e.target.value)}></input>
      <button className='confirmationButton' onClick={()=> this.newObj(this.state.userInput)}>Split</button>
      <span className='resultsBox'>Object: {this.state.newObj}</span>
    </div>
    )
  }
}

