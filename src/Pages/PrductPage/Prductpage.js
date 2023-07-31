import React, { useEffect } from 'react'
import { ProductListItem } from '../../Component/Product/ProductListItem'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleCategories,fetchCategroies } from '../../Component/Category/categorySlice'
import { STATUS } from '../../CommonUtils/status';
import Loader from '../../Component/Loader/Loader'

const Prductpage = () => {
    const params=useParams();
    
   const categoryName=params.catname
   const catProduct=useSelector((state)=>state.category.categoriesSingle);
   const catProductStatus=useSelector((state)=>state.category. categoriesSingleStatus);
  const dispatch= useDispatch()
   useEffect(()=>{
      dispatch(fetchSingleCategories(categoryName))
      dispatch(fetchCategroies())
   },[categoryName])
  return (
   <>
   {catProductStatus===STATUS.LOADING?<Loader></Loader>:<ProductListItem categories={categoryName} product={catProduct}></ProductListItem>}
   </>
  )
}

export default Prductpage