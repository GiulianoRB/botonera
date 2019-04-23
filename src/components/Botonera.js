import React, { Component } from 'react';
import Boton from './Boton';

export default class Botonera extends Component{
    render(){
        return(
            <div className="row" style={{padding: 10}}>                
                <div className="col-md-2">
                    <Boton
                        id="btnNotificacionA"
                        class="btn btn-primary" 
                        text="Boton A"
                        
                    /> 
                </div>
                <div className="col-md-2">
                    <Boton
                        id="btnNotificacionB"
                        class="btn btn-secondary" 
                        text="Boton B"
                        
                    />
                </div> 
                <div className="col-md-2">
                    <Boton
                        id="btnNotificacionC"
                        class="btn btn-danger" 
                        text="Boton C"
                        
                    />
                </div>               
                <div className="col-md-2">
                    <Boton
                        id="btnNotificacionD"
                        class="btn btn-warning" 
                        text="Boton D"
                        
                    />
                </div>
            </div>           
        );
    }
}

