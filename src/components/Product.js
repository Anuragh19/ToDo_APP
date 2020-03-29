import React from "react"

function Product(props)
{
    console.log(props)
    return (
        <div>
            <h3>{props.product.id}</h3>
            <h3>{props.product.name}</h3>
            <h3>{props.product.price}</h3>
            <h3>{props.product.description}</h3>
        </div>
    )
}

export default Product