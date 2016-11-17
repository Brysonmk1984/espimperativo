import React from "react";

export default class Header extends React.Component{
    
    render(){
        return (
            <header>
                <strong>español - Imperativo</strong>
                <div id="headerButtonContainer">
                    <div className="button_wrapper" title="Randomize cards" onClick={this.props.randomize}><fa className="fa fa-random fa-lg"></fa></div>
                    <div className="button_wrapper" title="Flip all cards" onClick={this.props.flipAll}><fa className="fa fa-retweet fa-lg"></fa></div>
                </div>
            </header>
            
        );
    };
}