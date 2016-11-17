import React from "react";

export default class Console extends React.Component{
    
    render(){
        return (
            <div id="console">
                <button id="prevButton" onClick={this.props.prev}>Previous</button>
                <button id="flipButton" onClick={this.props.flip}>Flip</button>
                <button id="nextButton" onClick={this.props.next}>Next</button>
            </div>
        );
    }
}

