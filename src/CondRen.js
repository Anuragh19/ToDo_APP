import React from 'react'
import LoginButton from './components/LoginButton';

class CondRend extends React.Component{
    constructor(){
        super()
        this.state={
            in:false,
            text:"login"
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange()
    {
        this.setState(prevState =>{
            return {
                in: !(prevState.in),
                text:(prevState.text==="login"?"logout":"login")
            }
        })
    }
    render(){
        return (
            <div>
                <LoginButton in={this.state.in} text={this.state.text} handleChange={this.handleChange}/>
            </div>
        )
    }
}

export default CondRend;