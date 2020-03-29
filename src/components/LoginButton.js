import React from 'react'

function LoginButton(props){
    console.log(props)
    return <input type="button" value={props.text} onClick={()=>props.handleChange()}/>
}

export default LoginButton