import React from "react";

export default class Card extends React.Component{
    
    render(){
        return <li id={"card" + this.props.data.id} key={this.props.data.id} className="card" >{this.props.data.english} - {this.props.data.spanish}</li>;
    }
}