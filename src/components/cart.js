import React, { useState } from 'react';

export default function Cart(props) {
    const { cartItems, onAdd, onRemove, onRemoveAll } = props;
    const [totalcost, setTotalCost] = useState();
    var finalcost = 0;

    const cart = cartItems.map((item) => (
        <div key={item.id} className="row">
            <div className="col-2">
                <button onClick={() => onRemoveAll(item)} className="badge">x</button>
            </div>
            <div className="col-2">{item.name}</div>
            <div className="col-2">
                ${item.price.toFixed(2)}
            </div>
            <div className="col-2">
                <button onClick={() => onAdd(item)} className="add">+</button>
                <button className="add">{item.qty}</button>
                <button onClick={() => onRemove(item)} className="remove">-</button>
            </div>
            <div className="col-2 text-right">
                ${item.qty * item.price}
            </div>
            <br />
        </div>
    ));

    const Cost = cartItems.map((item) => {
        finalcost = finalcost + (item.qty * item.price)
    });

    return (
        <aside className="block-cart col-1">
            <h2>
                Cart Items
            </h2>
            <div>
                {cartItems.length === 0 && <div>Cart is Empty</div>}
            </div>

            <div>
                {cartItems.length !== 0 &&
                    <div className="row">
                        <h4>Cancel</h4>
                        <h4>Name</h4>
                        <h4>Price</h4>
                        <h4 >Quantity</h4>
                        <h4>Total Price</h4>
                    </div>}
            </div>

            {cart}

            <div>
                {cartItems.length !== 0 &&
                    <div>
                        <hr></hr>
                        <div className="row">
                            <h4>Total Cost</h4>
                            <h4 className="text-right">{Cost}${finalcost}</h4>
                        </div>
                    </div>}
            </div>
        </aside>
    );
}