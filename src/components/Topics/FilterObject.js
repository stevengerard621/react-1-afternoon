import React, { Component } from 'react';

export default class FilterObject extends Component {

    constructor(){
        super();

        this.state = {
            paragliders: [
                {
                    brand: 'Advance',
                    model: 'Iota',
                    size: 26,
                },
                {
                    brand: 'Ozone',
                    model: 'Alpina',
                    size:   25
                },
                {
                    brand: 'Bruce Goldsmith Designs',
                    model: 'Punk',
                    size:   26,
                }
            ],

            userInput: '',
            filteredParagliders: []
        }
    }

    handleChange(val){
        this.setState({ userInput: val })
    }

    filteredParagliders(property){
        let paragliders = this.state.paragliders;
        let filteredParagliders = [];

        for(let i = 0; i < paragliders.length; i++){
            if(paragliders[i].hasOwnProperty(property)){
                filteredParagliders.push(paragliders[i]);
            }
        }
        this.setState({filteredParagliders: filteredParagliders})
    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Paragliders </h4>
        <span className="puzzleText"> Original: {JSON.stringify(this.state.paragliders, null, 10)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filteredParagliders(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredParagliders, null, 10) } </span>

            </div>
        )
    }
}