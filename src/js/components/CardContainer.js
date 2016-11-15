import React from "react";

import Card from "./Card";

export default class CardContainer extends React.Component{

    render(){
        return <ul id="cardContainer">{this.props.cards}</ul>
        
    }
}
