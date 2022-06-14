import React, { Component } from 'react'

export default class Cell extends Component {
    
    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }
    
    updateColor = () => {
        return this.setState({
            color: '#333'
          });
    }
    
    render(){
        console.log(this.state.color)
        return (
            <div onClick={this.updateColor} className="cell" style={{backgroundColor: this.state.color}}></div>
        )
    }
}