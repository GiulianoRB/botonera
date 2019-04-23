import React from 'react';
import logo from './logo.svg';
import './App.css';
import FrameVideo from '../src/components/FrameVideo';
import LogoPagina from '../src/components/LogoPagina';
import Chat from '../src/components/Chat';
import Botonera from '../src/components/Botonera';


function App() {
  return (
    <div className="App">      
        <div className="row">
          <div className="col">
            <LogoPagina />
          </div>                 
        </div>
        <div className="row">
          <div className="col-md-9">
            <FrameVideo />
            <Botonera />
          </div>
          <div className="col-md-3">
            <Chat />
          </div>
        </div>        
    </div>
  );
}

export default App;
