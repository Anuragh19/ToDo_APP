import React,{Component} from 'react'

class State extends Component{
    constructor()
    {
        super()
        this.mul=this.mul.bind(this)
        this.state={
            val:1
        }
    }
    mul()
    {
        this.setState(prevState=>{
            return {
               val: prevState*2
            }
        })
    }
    render()
    {
        return(
        <div>
            <h1>{this.state.val}</h1>
            <button onClick={this.mul}>Mulby2</button>
        </div>
        )
    }
}

export default State;