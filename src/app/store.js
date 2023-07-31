import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Component/Product/ProductSlice";
import categoryReducer from "../Component/Category/categorySlice";
import CartReducer from    "../Pages/Cart/CartSlice";
import searchReducer from "../Component/SearchComponent/searchSlice";
import userReducer from    "../Pages/User/UserSlice";
const store=configureStore({
    reducer:{
       product:productReducer ,
       category:categoryReducer,
       Cart:CartReducer,
       search:searchReducer,
       user:userReducer,
    }
})

export default store;