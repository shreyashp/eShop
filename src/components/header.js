import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
    const { cartQuantity } = props;
    return (
        <header className=" row block-head center">
            <div>
                <a href="#/"><h1>eShop</h1></a>
            </div>
            <div>
                <Link to="/">Products</Link>
            </div>
            <div>
                <Link to="/cart">Cart</Link> {cartQuantity !== 0 && <button className="badge">{cartQuantity}</button>}
            </div>
        </header>
    );
}
