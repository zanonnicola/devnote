import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import logo from './logo.svg';
import './App.css';
import './css/editor.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }
  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
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
          handleKeyCommand={this.handleKeyCommand}
        />
      </div>
    );
  }
}

export default App;
