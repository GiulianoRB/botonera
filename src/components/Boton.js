import React, { Component } from 'react';

export default class Boton extends Component{    

    render(){
        return(
            <button
                id={this.props.id}
                style={this.props.style}
                className={this.props.class}
            >
                {this.props.text}
            </button>
        )
    }
}