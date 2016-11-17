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
            data : [{"id" : 1, "english" : "loading", "spanish" : "cargando", "flipped" : false}]
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
                    data : data
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
        /*setTimeout(()=>{
            this.flipCard();
        },500);
        setTimeout(()=>{
            this.flipCard();
        },1000);*/
        setTimeout(()=>{
            this.fetch.call(this);
        },2000);
        
        console.log('state data',this.state.data);
    }
    
    prevCard(){
        let data = this.state.data;
        data.unshift(data.splice(data.length-1,1)[0]);
        this.setState({data : data});
    }
    
    nextCard(){
        let data = this.state.data;
        data.push(data.splice(0,1)[0]);
        this.setState({data : data});
    }
    
    flipCard(){
        let data = this.state.data;
        data[0].flipped = data[0].flipped === true ? false : true;
        this.setState({data : data});
    }
    
    
    render(){
        // Arrow key Functionality
        function keyClick(e){
            // left arrow click
            if(e.keyCode == '37' || e.keyCode == '65'){
                this.prevCard();
            // right arrow click
            }else if(e.keyCode == '39' || e.keyCode == '68'){
                this.nextCard();
            // space bar
            }else if(e.keyCode == '32' || e.keyCode == '38' || e.keyCode == '40' || e.keyCode == '83' || e.keyCode == '87'){
                e.preventDefault();
                e.stopPropagation();
                this.flipCard();
            }
        }
        document.onkeydown = keyClick.bind(this);

        return (
            <div id="app">
                <Header />
                <CardContainer data={this.state.data} flip={this.flipCard.bind(this)} totalCards={this.state.data.length} />
                <Console prev={this.prevCard.bind(this)} next={this.nextCard.bind(this)} flip={this.flipCard.bind(this)} />
                <Footer />
            </div>
        );
    }
}



