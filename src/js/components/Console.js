import React from "react";

export default class Console extends React.Component{
    
    render(){
        return (
            <div id="console">
                <div>
                    <button id="prevButton" onClick={this.props.prev}>Previous</button>
                    <button id="flipButton" onClick={this.props.flip}>Flip</button>
                    <button id="nextButton" onClick={this.props.next}>Next</button>
                </div>
                <div id="hotkeySection">
                        <div id="hotkeysPrev" className="hotkey_description">left arrow, "a"</div>
                        <div id="hotkeysFlip" className="hotkey_description">up arrow, down arrow, "w", "s" </div>
                        <div id="hotkeysNext" className="hotkey_description">right arrow, "d"</div>
                </div>
            </div>
        );
    }
}

