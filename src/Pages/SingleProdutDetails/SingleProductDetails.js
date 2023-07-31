import React, { useEffect, useMemo, useState } from 'react';
import './SingleProductDetails.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../../Component/Product/ProductSlice';
import { formatPrice } from '../../CommonUtils/commanUnits';
import { addTocart,cartSeccessMsgoff, cartSeccessMsgon } from '../Cart/CartSlice';

const SingleProductDetails = () => {
    const SinglePrduct = useSelector((state) => state.product.productSingle);
    const showSuccessMessage = useSelector((state) => state.Cart.CartSuccessMsg);
    const dispatch = useDispatch();
    const Params = useParams();
    const productId = Params.id;

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  },[]);
  useMemo(()=>{
    if(showSuccessMessage){
   setTimeout(() => {
     dispatch(cartSeccessMsgoff());
   }, 2000);
 }
},[showSuccessMessage])

  return (
    <section className="sp-100 ">
    <div className="container">
      <div className="heading-section">
        <h2>Product Details</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div id="slider" className="owl-carousel product-slider">
            <div className="item productimg">
              <img src={`${SinglePrduct.thumbnail}`} alt="Product Thumbnail" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-dtl">
            <div className="product-info">
              <div className="product-name">{SinglePrduct.title}</div>
              <div className="reviews-counter">
                <div className="rate">
                  <input type="radio" id="star5" name="rate" value="5" checked />
                  <label htmlFor="star5" title="text">5 stars</label>
                  <input type="radio" id="star4" name="rate" value="4" checked />
                  <label htmlFor="star4" title="text">4 stars</label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label htmlFor="star3" title="text">3 stars</label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label htmlFor="star2" title="text">2 stars</label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label htmlFor="star1" title="text">1 star</label>
                </div>
                <span>{SinglePrduct.rating} Reviews</span>
              </div>
              <div className="product-price-discount">
                <span>
                  ${Math.floor(SinglePrduct.price - (SinglePrduct.price * (SinglePrduct.discountPercentage / 100)))}
                </span>
                <span className="line-through">{formatPrice(SinglePrduct?.price)}</span>
              </div>
            </div>
            <p>{SinglePrduct.description}</p>
            <div className="row">
              <div className="col-md-12" style={{ textAlign: "left" }}>
                <div>
                  <span className='textred'>Brand:</span>
                  <span className='textnormal'>{SinglePrduct.brand}</span>
                </div>
                <div>
                  <span className='textred'>Category:</span>
                  <span className='textnormal'>{SinglePrduct.category}</span>
                </div>
                <div>
                  <span className='textred'>Old Price:</span>
                  <span className='textnormal'>{formatPrice(SinglePrduct?.price)}</span>
                </div>
                <div>
                  <span className='textred'>Discount:</span>
                  <span className='textnormal'>{SinglePrduct.discountPercentage}%</span>
                </div>
              </div>
            </div>
            <div className="product-count">
                {
                    showSuccessMessage &&(
                        <div className="alert alert-success" role="alert">
              Item added to cart successfully!
            </div>
                    )
                }
              <div className="round-black-btn" onClick={() => dispatch(addTocart(SinglePrduct),cartSeccessMsgon(true))}>Add to Cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default SingleProductDetails;
