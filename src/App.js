import React, { Component } from 'react';
import Editor from './components/Editor';
import Viewer from './components/Viewer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: true,
      cards: []
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
  render() {
    if(this.state.mode) {
      return(
        <Viewer cards={this.state.cards}
         switchMode={this.changeMode} />
      )
    } else {
      return(
        <Editor cards={this.state.cards} 
        addCard={this.addCard}
        deleteCard={this.deleteCard}
        switchMode={this.changeMode} />

      )
    }

  }
}

export default App;
