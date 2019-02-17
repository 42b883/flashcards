import React, { Component } from 'react';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            front: "",
            back: ""
        }
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        console.log(value);
        this.setState({
            [name]: value
        })
    }
    addCard = () => {
        //this addCard is passing as a prop
        this.props.addCard(this.state.front, this.state.back);
        this.setState({
            front: "",
            back: ""
        })
    }
    deleteCard = (e) => {
        this.props.deleteCard(e.target.dataset.index);
    }
  render() {
    const rows = this.props.cards.map((card, i) => {
        return (
            <tr key={i}>
                <td>{card.front}</td>
                <td>{card.back}</td>
                <td><button className="btn " data-index={i} onClick={this.deleteCard}>x</button></td>
            </tr>
        )
    })
    return (
        <div>
            <h1>Editor Mode</h1>
            <table>
                <thead>
                    <tr>
                        <th>Front</th>
                        <th>Back</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            <br/>
            <input type="text"
            value={this.state.front}
            onChange={this.handleChange}
            name="front"
            placeholder="Front of Card"/>
            <br/>
            <input type="text"
            value={this.state.back}
            onChange={this.handleChange}
            name="back"
            placeholder="Back of Card"/>
            <br/>
            <button className="btn btn-sm btn-secondary" onClick={this.addCard}>Add Card</button>
            <hr/>   
            <button className="btn btn-sm btn-secondary" onClick={this.props.switchMode}>Back to Viewer</button>
        </div>
    );
  }
}

export default Editor;
