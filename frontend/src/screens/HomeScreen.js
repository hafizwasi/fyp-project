import React from 'react';
import Product from '../components/Products';
import data from '../data';


export default function HomeScreen(){
    return( <div>
        <h2>Our Prodcuts</h2>
        <div className="row center">
          {data.products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    )
}
