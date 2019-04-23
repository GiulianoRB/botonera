import React, { Component } from 'react';
import LogoPagina from './LogoPagina';
import FrameVideo from './FrameVideo';
import Chat from './Chat';
import Botonera from './Botonera';

export default class Consolidado extends Component{
    render(){
        return(
            <div>
                {/* <div className="row">
                    <div className="col">
                        <LogoPagina />
                    </div>
                </div> */}
                    <div className="row">          
                        <div className="col-md-9">
                            <FrameVideo />
                            <Botonera />
                        </div>
                    <div className="col-md-2">         
                            <Chat />          
                    </div>
                </div>
            </div>
        );
    }
}