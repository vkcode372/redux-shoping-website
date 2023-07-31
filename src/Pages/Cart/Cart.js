import React from 'react'
import "./Cart.css"
import { useSelector,useDispatch } from 'react-redux'
import {decreseByValue, incrementByValue, removeItem} from  '../../Pages/Cart/CartSlice'
import { Link } from 'react-router-dom'
import CardMessage from '../../Component/CardMessage/CardMessage'
export const Cart = () => {
  const dispatch=useDispatch();
  const cartProduct=useSelector((state)=>state.Cart.cart)
  const totalPrice=useSelector((state)=>state.Cart.totalPrice);
  const totalQuantity=useSelector((state)=>state.Cart.totalQuantity);

    if(cartProduct.length==0){
      return(
        <div className='cantainer'>
          <div className='no-cart'>
        <div className='cart-shop'>
        <i className="fa-solid fa-cart-shopping cart"></i>
        <span className='cart-empty'>Your Cart Is Empty.</span>
        </div>
        <div>
         <Link className='link-btn' to="/">Continue shopping Now</Link>
        </div>
        </div>
    </div>
      )
   
 }
  return (
    <section className="h-100 gradient-custom">
   
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0 color-black">Cart -{cartProduct.length} item</h5>
          </div>
          <div className="card-body">
            {
              cartProduct.map((item)=>{
                let  discountPric=Math.floor((item.price-(item.price *(item.discountPercentage/100))));
                return(
                  <div className="row" key={item.id} >
                  <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                
                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                      <Link to={`/product/${item?.id}`}>
                      <img src={`${item.thumbnail}`}  className="w-100" alt="Blue Jeans Jacket" />
                      </Link>
                      <a href="#!">
                        <div className="mask" style={{backgroundColor:"rgba(252,252,251,0.2"}}></div>
                      </a>
                    </div>
                    
                  </div>
    
                  <div className="col-lg-5 col-md-6 mb-4 mb-lg-0 text-start">
                   
                    <p className='p-0'><strong>{item.title}</strong></p>
                    <p className='p-0'>{item.description}</p>
                    <p className='p-0'><strong>Brand:</strong>{item.brand}</p>
                    <p className='p-0'><strong>Rating:</strong>{item.rating}</p>
                    <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                      title="Remove item" onClick={()=>dispatch(removeItem(item))}>
                      <i className="fas fa-trash"></i>
                    </button>
                  
                  </div>
    
                  <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                   
                    <div className="d-flex mb-4" style={{maxWidth:"300px"}}>
                      <button className="btn btn-primary px-3 me-2 h-25"
                       onClick={()=>dispatch(decreseByValue(item))}>
                        <i className="fas fa-minus"></i>
                      </button>
    
                      <div className="form-outline">
                        <input id="form1" min="0"  value={item.quantity} type="number" className="form-control" />
                        <label className="form-label" htmlfor="form1">Quantity</label>
                      </div>
    
                      <button className="btn btn-primary px-3 ms-2 h-25"
                          onClick={()=>dispatch(incrementByValue(item))}>
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                   
                    <p className="text-start text-md-center">
                      <strong>{
                        
                         item.quantity>1 ? `$${item.quantity*discountPric}`:`$${discountPric}`
                        }</strong>
                    </p>
                  
                  </div>
                  <hr className="my-4" />
                </div>
                )
              })
            }
            
         


           
           
        
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0 color-black">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
               Total Products item
                <span>{totalQuantity}</span>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span>

                  <strong>${totalPrice} </strong>
                  </span>
              </li>
            </ul>

            <button type="button" className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
