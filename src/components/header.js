import React from 'react';

export default function Header(props) {
    const { cartQuantity } = props;
    return (
        <header className=" row block-head center">
            <div>
                <a href="#/"><h1>eShop</h1></a>
            </div>
            <div>
                <a href="#/products"> Products</a>
                <a href="#/cart"> Cart {cartQuantity !== 0 && <div>{cartQuantity}</div>}</a>
            </div>
        </header>
    );
}