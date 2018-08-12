import React, {Component} from 'react';

export default class EvenAndOdd extends Component{

constructor(){
  super()

  this.state = {
    evensArray: [],
    oddsArray: [],
    userInput: '',
  }

}
assignEvenAndOdds(userInput){
    var arr = userInput.split(',')
    var evens = []
    var odds = []
    for(let i = 0; i<arr.length; i++ ){
      if(arr[i]%2 === 0 ){
        evens.push(parseInt(arr[i], 10))
        evens.push(' ')
      } else {
        odds.push(parseInt(arr[i], 10))
        odds.push(' ')
      }
    }
    this.setState({ evenArray: evens, oddArray: odds })
  }
handleChange(val){
    this.setState({ userInput: val })
}


  render(){
    return(
    <div className='puzzleBox evenAndOddPB'>
      <h4>Evens and Odds</h4>
      <input className='inputLine' onChange={(e)=>this.handleChange(e.target.value)}></input>
      <button className='confirmationButton' onClick={()=> {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
      <span className='resultsBox'>Evens: {this.state.evenArray}</span>
      <span className='resultsBox'>Odds: {this.state.oddArray}</span>
    </div>
    )
  }
}

