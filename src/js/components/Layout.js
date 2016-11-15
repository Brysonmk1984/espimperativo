import React from "react";

import Header from "./Header";
import CardContainer from "./CardContainer";
import Card from "./Card";
import Console from "./Console";
import Footer from "./Footer";

export default class Layout extends React.Component{
    constructor(){
        super();
        this.state = {
            items : [<Card key="0" data={{"id" : 0, "english" : "loading", "spanish" : "cargando"}}  />]
        }
            
    }
    
    fetch(){
        let that = this;
        let request = new XMLHttpRequest();
            request.open('GET', './words.json', true);
            
            request.onload = function() {
              if (request.status >= 200 && request.status < 400) {
                // Success!
                const data = JSON.parse(request.responseText);
                
                
                that.setState({
                    items : data.map(card =>{
                        return <Card key={card.id} data={card}  />;
                    })  
                });

              } else {
                // We reached our target server, but it returned an error
                console.log('error');
              }
            };
            
            request.onerror = function() {
              // There was a connection error of some sort
              console.log("Connection Error");
            };
            
            request.send();
    }
    
    componentDidMount(){
        setTimeout(()=>{
            this.fetch.call(this);
        },2000);
    }
    
    prevCard(){
        let cardArray = this.state.items;
        cardArray.push(cardArray.splice(0,1)[0]);
        this.setState({items : cardArray});
    }
    
    nextCard(){
        let cardArray = this.state.items;
        cardArray.unshift(cardArray.splice(cardArray.length-1,1)[0]);
        this.setState({items : cardArray});
    }
    
    render(){
        return (
            <div id="app">
                <Header />
                <CardContainer cards={this.state.items} />
                <Console prev={this.prevCard.bind(this)} next={this.nextCard.bind(this)} />
                <Footer />
            </div>
        );
    }
}



