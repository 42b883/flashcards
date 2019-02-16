import React, { Component } from 'react';

class Viewer extends Component {
  render() {
    
    return (
        <div>
            <h1>Viewer Mode</h1>
            <hr/>
            <button onClick={this.props.switchMode}>Back to Editor</button>
        </div>
    );
  }
}

export default Viewer;
