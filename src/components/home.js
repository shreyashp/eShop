import React from 'react';
import Product from './Product';

export default function Home(props) {
    const { products , onAdd} = props;

    const productList = products.map((product) => {
        return (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
        );
    });

    return (
        <main className="block-products col-2">
            <h2>Products</h2>
            <div >
                {productList}
            </div>
        </main>
    );
}