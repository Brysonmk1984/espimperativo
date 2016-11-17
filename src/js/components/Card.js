import React from "react";

export default class Card extends React.Component{

    
    render(){
        let classes = `flip-container card ${this.props.data.flipped ? 'spanish' : 'english'}`;
            
        
        return (
            <li id={"card" + this.props.data.id} key={this.props.data.id} className={classes} onClick={this.props.flip} >
            	<div className="flipper">
            		<div className="front">
            		    <div className="card_count">{this.props.data.id} / {this.props.totalCards}</div>
            			<div className="card_text">{this.props.data.english}</div>
            		</div>
            		<div className="back">
            		<div className="card_count">{this.props.data.id} / {this.props.totalCards}</div>
            			<div className="card_text">{this.props.data.spanish}</div>
            		</div>
            	</div>
            </li>
        );
    }
}