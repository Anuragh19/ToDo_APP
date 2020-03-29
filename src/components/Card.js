import React from "react"

function Card(props)
{
    return (
        <div>
            <h6>{props.details.id}</h6>
            <h4>{props.details.name}</h4>
        </div>
    )
}

export default Card;