import React, { useEffect } from 'react'

import { ProductListItem } from '../../Component/Product/ProductListItem';
import { Slider } from '../../Component/SliderSection/Slider';

import { fetchCategroies } from '../../Component/Category/categorySlice';
import { fetchProduct } from '../../Component/Product/ProductSlice';

import { useDispatch ,useSelector} from 'react-redux';
import { STATUS } from '../../CommonUtils/status';

import Loader from '../../Component/Loader/Loader'

const Home = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(fetchProduct(100))
  },[]);
  const products=useSelector((state)=>state.product.products);
  const productStatus=useSelector((state)=>state.product.productStatus);
  const categories=useSelector((state)=>state.category.categories);
  

  let categorybaseProduct_1=products.filter(product => product.category === categories[0]);
  let categorybaseProduct_2=products.filter(product => product.category === categories[1]);
  let categorybaseProduct_3=products.filter(product => product.category === categories[2]);
  let categorybaseProduct_4=products.filter(product => product.category === categories[3]);
  let categorybaseProduct_5=products.filter(product => product.category === categories[4]);
  let categorybaseProduct_6=products.filter(product => product.category === categories[5]);
  let categorybaseProduct_7=products.filter(product => product.category === categories[6]);
  let categorybaseProduct_8=products.filter(product => product.category === categories[7]);
  let categorybaseProduct_9=products.filter(product => product.category === categories[8]);
  let categorybaseProduct_10=products.filter(product => product.category === categories[9]);

  return (
    <div>
      <Slider></Slider>
      {productStatus===STATUS.LOADING?<Loader></Loader>:<ProductListItem categories={categories[0]} product={categorybaseProduct_1}></ProductListItem>}
      {productStatus===STATUS.LOADING?<Loader></Loader>:<ProductListItem categories={categories[1]} product={categorybaseProduct_2}></ProductListItem>}
      {productStatus===STATUS.LOADING?<Loader></Loader>:<ProductListItem categories={categories[2]} product={categorybaseProduct_3}></ProductListItem>}
      {productStatus===STATUS.LOADING?<Loader></Loader>:<ProductListItem categories={categories[3]} product={categorybaseProduct_4}></ProductListItem>}
      {productStatus===STATUS.LOADING?<Loader></Loader>:<ProductListItem categories={categories[4]} product={categorybaseProduct_5}></ProductListItem>}
      {productStatus===STATUS.LOADING?<Loader></Loader>:<ProductListItem categories={categories[5]} product={categorybaseProduct_6}></ProductListItem>}
      {productStatus===STATUS.LOADING?<Loader></Loader>:<ProductListItem categories={categories[6]} product={categorybaseProduct_7}></ProductListItem>}
      {productStatus===STATUS.LOADING?<Loader></Loader>:<ProductListItem categories={categories[7]} product={categorybaseProduct_8}></ProductListItem>}
      {productStatus===STATUS.LOADING?<Loader></Loader>:<ProductListItem categories={categories[8]} product={categorybaseProduct_9}></ProductListItem>}
      {productStatus===STATUS.LOADING?<Loader></Loader>:<ProductListItem categories={categories[9]} product={categorybaseProduct_10}></ProductListItem>}
    </div>
  )
}

export default Home