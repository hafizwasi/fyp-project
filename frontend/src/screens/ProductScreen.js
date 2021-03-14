import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Products';
import Rating from '../components/Rating';
import data from '../data';

export default function ProductScreen(Props) {
    const product = data.products.find((x) => x._id === Props.match.params.id);
    if (!product) {
        return (<div>
            Product not found
        </div>)
    }
    return (<div>
        <Link to="/" > Back </Link>
        <div className="row top">
            <div className="col-1">
                <img className="large" src={product.image} alt={product.name}></img>

            </div>
            <div className="col-2">
                <ul>
                    <li><h1>{product.name}</h1></li>
                    <li>
                        <Rating
                            rating={product.rating}
                            numReviews={product.numReviews}>

                        </Rating>
                    </li>
                    <li>
                        price :{product.price}Rs
    </li>

                </ul>

            </div>
            <div className="col-3">
                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div>Price</div>
                                <div className="price">{product.price}Rs</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Status</div>
                                <div >
                                    {product.countInStock > 0 ? <div className="success">In Stock</div>
                                        : <div className="error"> Unavailable </div>
                                    }
                                </div>
                            </div>
                        </li>
                        <li>
                            <button className="primary block">Add to cart</button>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    </div>
    )
}
