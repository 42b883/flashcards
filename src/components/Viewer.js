import React, { Component } from 'react';

class Viewer extends Component {
  
    
        
    
  render() {
      let card = null;
    if (this.props.cards.length > 0 && this.props.flipped ){
        card = this.props.cards[this.props.index].front;
    } 
    if(this.props.cards.length > 0 && !this.props.flipped) {
        card = this.props.cards[this.props.index].back;  
    }

    return (
        <div>
        <h1>Viewer Mode</h1>
        <hr/>
        <div className="row">
            <div className="col">
            <div>{this.props.index + 1 }/{this.props.cards.length}</div>

            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <div className="cardContent" onClick={this.props.flip}>{card}</div>
                </div>
            </div>
        </div>
        </div>
        <div className="row">
            <div className="col-5">
            <button className="prev btn  btn-sm btn-secondary" onClick={this.props.prev}>prev</button>
            <button className="btn btn-sm btn-secondary" onClick={this.props.next}>next</button>
            </div>            
        </div>
        <hr/>
        <div className="row">
            <div className="col-7">
                <button className="btn btn-sm btn-secondary" onClick={this.props.switchMode}>Back to Editor</button>
            </div>
        </div>
       
        <br/>
        </div>
      )

  }
  

}

export default Viewer;
