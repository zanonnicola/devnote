import React, { Component } from 'react';
import {Editor, EditorState} from 'draft-js';
import logo from './logo.svg';
import './App.css';
import './css/editor.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Editor 
          editorState={this.state.editorState} 
          onChange={this.onChange} 
        />
      </div>
    );
  }
}

export default App;
