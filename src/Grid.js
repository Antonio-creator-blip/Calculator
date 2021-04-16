import React from 'react'
import Calculate from './Calculate'
import Keyboard from './Keyboard'


class Grid extends React.Component{
    constructor(){
        super ()
        this.state = {
            charPressed : '0'
        }
    }

    press = (e) =>{
        if(this.state.charPressed === '0'){
            this.setState({
                charPressed: e.target.value 
            })
        }
        else{
            this.setState({
                charPressed: this.state.charPressed + e.target.value 
            })
        }
    }

    allDelete = (e) =>{
        this.setState({
            charPressed: '0'
        })
    }
    oneDelete = (e) =>{
        if (this.state.charPressed.length > 1){
            this.setState({
                charPressed: (this.state.charPressed).substring(0, (this.state.charPressed.length-1))
            })
        }
        else{
            this.setState({
                charPressed: '0'
            })
        }
    }

    result = (e) =>{
        this.setState({
            charPressed: eval(this.state.charPressed)
        })
    }
    
 
    render (){
        return(
            <>
                <Calculate char={this.state.charPressed}></Calculate>
                <Keyboard   OnPress={this.press} 
                            OnAllDelete={this.allDelete} 
                            OnOneDelete={this.oneDelete}
                            OnResult={this.result}
                ></Keyboard>
            </>
        )
    }
}

export default Grid;