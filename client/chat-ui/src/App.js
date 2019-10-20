import React from 'react';
import { Component } from 'react';
import './App.css';
import Ws from '@adonisjs/websocket-client'
const ws = Ws('ws://localhost:3000')
ws.connect()

const chat = ws.subscribe('chat')

chat.on('ready', () => {
  chat.emit('message', 'hello')
})

chat.on('error', (error) => {
  console.log(error)
})

chat.on('close', () => {
})

ws.getSubscription('chat').on('message', (message) => {
  console.log("NEW MESSAGE: ", message);
  
})

class App extends Component {

  handleClick() {
    chat.emit('message', 'new messsage!')
  }

  render() {
    return (
      <div className="App">
        <p>Realtime chat</p>
        <button onClick={this.handleClick}>Enviar nova mensagem</button>
      </div>
    );
  }
}

export default App;
