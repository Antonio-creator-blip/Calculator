import React from 'react'
import './Keyboard.css';

class Keyboard extends React.Component{

    render(){
        return(
            <section class="keyboard">
                <button value="(" onClick={this.props.OnPress}>(</button>
                <button value=")" onClick={this.props.OnPress}>)</button>
                <button value="AC" onClick={this.props.OnAllDelete}>AC</button>
                <button value="+" onClick={this.props.OnPress}>+</button>
                <button value="1" onClick={this.props.OnPress}>1</button>
                <button value="2" onClick={this.props.OnPress}>2</button>
                <button value="3" onClick={this.props.OnPress}>3</button>
                <button value="-" onClick={this.props.OnPress}>-</button>
                <button value="4" onClick={this.props.OnPress}>4</button>
                <button value="5" onClick={this.props.OnPress}>5</button>
                <button value="6" onClick={this.props.OnPress}>6</button>
                <button value="*" onClick={this.props.OnPress}>*</button>
                <button value="7" onClick={this.props.OnPress}>7</button>
                <button value="8" onClick={this.props.OnPress}>8</button>
                <button value="9" onClick={this.props.OnPress}>9</button>
                <button value="/" onClick={this.props.OnPress}>/</button>
                <button value="0" onClick={this.props.OnPress}>0</button>
                <button value="." onClick={this.props.OnPress}>.</button>
                <button value="CE" onClick={this.props.OnOneDelete}>CE</button>
                <button value="=" onClick={this.props.OnResult}>=</button>
            </section>
        )
    }
}

export default Keyboard