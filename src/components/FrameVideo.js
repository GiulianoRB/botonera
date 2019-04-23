import React, { Component } from 'react';
import "../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

export default class FrameVideo extends Component{
    render(){
        return(
            <div className="row">
                <div className="col">
                    <div style={{paddingLeft: 10}}>
                        <Player
                            playsInline
                            poster="/assets/poster.png"
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            fluid={false}
                            width={1200}
                            heigth={768}
                            
                        />
                    </div>
                </div>
            </div>
        );
    }
}