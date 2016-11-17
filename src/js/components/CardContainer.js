import React from "react";

import Card from "./Card";

export default class CardContainer extends React.Component{
    render(){
        
        let cardNodes = this.props.data.map(card =>{
            return <Card key={card.id} data={card} spanish={false} flip={this.props.flip} totalCards={this.props.totalCards} />;
        });

        return <ul id="cardContainer">{cardNodes}</ul>
        
    }
}
