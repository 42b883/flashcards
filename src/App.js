import React, { Component } from 'react';
import Editor from './components/Editor';
import Viewer from './components/Viewer';
import './App.css';
import { stat } from 'fs';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: true,
      index: 1,
      flipped: false,
      cards: [
        {front: "test front", back: "test back", flipped: false},
        {front: "test2 front", back: "test2 back", flipped: false},
        {front: "test3 front", back: "test3 back", flipped: false}
      ]
    }
  }
  changeMode = () => {
    this.setState(state => ({
      mode: !state.mode
    }))
  }
  addCard = (front, back) => {
    this.setState(state => ({
      cards: [...state.cards, {front, back}]
    }))
  }
  deleteCard = (index) => {
    this.setState(state => {
      const cards = [...state.cards];
      cards.splice(index, 1);
      return {cards};
    })
  }
  flip = () => {
    this.setState(state => ({
      flipped: !state.flipped
    }))
  }
  next = () => {
    if(this.state.cards.length-1 > this.state.index) {
      this.setState(state => ({
        index: state.index + 1
      }))
    } else {
      console.log("This is last card!");
    }
  }
  prev = () => {
    if( this.state.index !== 0) {
      this.setState(state => ({ 
        index: state.index - 1
      }))
    } else {
      console.log("This is first card!");
    }
    
  }
  render() {
    if(this.state.mode) {
      return(
        <div className="main container">
          <Viewer cards={this.state.cards}
         switchMode={this.changeMode} 
         flipped={this.state.flipped}
         index={this.state.index}
         flip={this.flip}
         next={this.next}
         prev={this.prev}/>
        </div>
      )
    } else {
      return(
        <div className="main container">
          <Editor cards={this.state.cards} 
        addCard={this.addCard}
        deleteCard={this.deleteCard}
        switchMode={this.changeMode} />
        </div>

      )
    }

  }
}

export default App;
