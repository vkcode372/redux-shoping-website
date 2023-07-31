import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Header from '../Component/Header/Header'
import Prductpage from '../Pages/PrductPage/Prductpage'
import SingleProductDetails from '../Pages/SingleProdutDetails/SingleProductDetails'
import { Cart } from '../Pages/Cart/Cart'
import PageNotFound from '../Pages/404Page/PageNotFound'
import SearchComponent from '../Component/SearchComponent/SearchComponent'
import Footer from '../Component/Footer/Footer'
import Login from '../Pages/Login/Login'
import User from '../Pages/User/User'
const RouteConfig = () => {
  return (
     <>
    
       <Header></Header>
         <Routes>
             <Route path='/' element={<Home></Home>}></Route>
             <Route path='/about' element={<About></About>}></Route>
              <Route path='/Contact' element={<Contact></Contact>}></Route>
              <Route path='/products/:catname' element={<Prductpage></Prductpage>}></Route>
              <Route path='/product/:id' element={<SingleProductDetails></SingleProductDetails>}></Route>
              <Route path='/cart' element={<Cart></Cart>}></Route>
              <Route path='/search/:searchTerm' element={<SearchComponent></SearchComponent>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/user' element={<User></User>}></Route>
              <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
         </Routes>
         <Footer/>
      
     </>
  )
}

export default RouteConfig