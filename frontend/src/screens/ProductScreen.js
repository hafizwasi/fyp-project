import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

import Rating from '../components/Rating';

export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id; 
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
      }, [dispatch, productId]);

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div>
                    <Link to="/" > Back </Link>
                    <div className="row top">
                        <div className="col-1">
                            <img className="large" src={product.image} alt={product.name}></img>

                        </div>
                        <div className="col-2">
                            <ul>
                                <li><h1>{product.name}</h1></li>
                                <li>
                                    <Rating className="stars"

                                        rating={product.rating}
                                        numReviews={product.numReviews}

                                    ></Rating>
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
            )}
        </div>
    );
}
