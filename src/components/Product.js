import React from 'react'

export default function Product(props) {
    const { product , onAdd} = props;
    return (
        <div className="row center">
            <div>
                <h3>{product.name}</h3> ${product.price}
            </div>
            <div>
                <button onClick={() => onAdd(product)}>Add to Cart</button>
            </div>
        </div>
    )
}
