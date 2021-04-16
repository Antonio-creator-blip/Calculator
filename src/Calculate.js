import React from 'react'

class Calculate extends React.Component{
    constructor(){
        super ()
        this.state = {
            result: '' 
        }
    }

    change=()=> {
        this.setState({
            result: this.props.char
        })
    }

    render() {
        
        return (
            <div onChange={this.change}>{this.props.char}</div>
        );
    }
}

export default Calculate;