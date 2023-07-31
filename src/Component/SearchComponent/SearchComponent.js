import React, { useEffect } from 'react'
import { fetchSearchProduct,clearSearch } from './searchSlice'
import { STATUS } from '../../CommonUtils/status';
import { useSelector,useDispatch } from 'react-redux'
import { ProductListItem } from '../Product/ProductListItem';
import Loader from '../Loader/Loader';
import { Link, useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
const SearchComponent = () => {
   const dispatch=useDispatch();
   const Params=useParams();
   const SerachKey=Params.searchTerm;

  useEffect(()=>{
         dispatch(clearSearch())
        dispatch(fetchSearchProduct(SerachKey))

   },[SerachKey])

   const searchProduct=useSelector((state)=>state.search.search)
   const searchProductStatus=useSelector((state)=>state.search.searchStatus)

   if(searchProduct.length===0){
    return(
      <div className='container'>
         <div className='text-danger mt-5'>
         <Alert  variant="danger">
          No Product Found
        </Alert>
         <Link to="/" style={
          {
            textDecoration:"none",
            background:"#ec5156",
            padding:"10px 10px",
            margin:"10px 10px",
            display:"inline-block",
            color:"#ffffff",
            textTransform:"capitalize",
            border:"1px solid #ec5156",
            transition: "0.3s",
            borderRadius:"3px"

          }
         }>Go to home page</Link>
         </div>
      </div>
    )
   }
  return (
   <>
   {searchProductStatus===STATUS.LOADING?<Loader></Loader>:<ProductListItem categories={SerachKey} product={searchProduct}></ProductListItem>}
   </>
  )
}

export default SearchComponent