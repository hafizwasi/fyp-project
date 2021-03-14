import React from 'react';
import Product from './components/Products';
import data from './data';

function App() {
  return (<div className="grid-container">
    <header className="row">
      <div>
        <a className="brand" href="/"> online <span className="spantitle">Bakery </span> </a>
      </div>
      <div>
        <a href="/aboutus">About us</a>
        <a href="/contactus">Contact us</a>
        <a href="/cart">Cart</a>
        <a href="/signin">Sign in</a>
      </div>
    </header>
    <main>
        <div>
          <h2>Our Prodcuts</h2>
          <div className="row center">
            {data.products.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
