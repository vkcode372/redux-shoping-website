import React from 'react';
import { Link } from 'react-router-dom';
import "./SingleProduct.css"
import { formatPrice } from '../../CommonUtils/commanUnits';
const SingleProduct = ({product}) => {
  return (
 <>
 <Link to={`/product/${product?.id}`} className='w-20'  key={product.id}>
              <div className="card" >
                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light position-relative"
                  data-mdb-ripple-color="light">
                  <img style={{height:"237px",objectFit:"fill"}}src={`${product.thumbnail}`}
                    className="w-100" />
                 
                    <div className="mask position-absolute bottom-0">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5><span className="badge bg-danger ms-2" style={{fontSize:"16px"}}>({product.discountPercentage} % Off)</span></h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div className="mask" style={{backgroundColor:"rgba(251,251,251,0.15"}}></div>
                    </div>
                
                </div>
                <div className="card-body">
                    <h5 className="card-title" style={{fontSize:"16px"}}>{product.title}</h5>
                    <hr></hr>
                 
                    <p>{product.category}</p>
                  
                  <h6 className="mb-3"><s style={{fontSize:"16px"}}>{formatPrice(product?.price)}</s><strong className="ms-2 text-danger">${Math.floor(product.price-(product.price*(product.discountPercentage/100)))}</strong></h6>
                </div>
              </div>
      </Link>
    </>
  );
}

export default SingleProduct;
