import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../CommonUtils/apiurl";
import {STATUS} from "../../CommonUtils/status";
const initialState={
     products:[],
     productStatus:'',
     productSingle:[],
     ProudctSingleStatus:"",
}

const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{

    },

    extraReducers:(builder)=>{
       builder
       .addCase(fetchProduct.pending,(state)=>{
        state.productStatus=STATUS.LOADING
       })
       .addCase(fetchProduct.fulfilled,(state,action)=>{
        state.products=action.payload;
        state.productStatus=STATUS.SUCCEEDED
       })
       .addCase(fetchProduct.rejected,(state)=>{
        state.productStatus=STATUS.FAILD
       })
       .addCase(fetchSingleProduct.pending,(state,action)=>{    //single prouduct fetch
        state.productSingle=STATUS.LOADING
       })
       .addCase(fetchSingleProduct.fulfilled,(state,action)=>{
        state.productSingle=action.payload;
        state.ProudctSingleStatus=STATUS.SUCCEEDED
       })
       .addCase(fetchSingleProduct.rejected,(state,action)=>{
        state.ProudctSingleStatus=STATUS.FAILD
       })
    }  
})


export const fetchProduct=createAsyncThunk('products/fetch',async (limit)=>{
    const response= await fetch(`${BASE_URL}/products?limit=${limit}`);
    const data= await response.json();
    return data.products;
});

export const fetchSingleProduct=createAsyncThunk('product-single/fetch',async(id)=>{
    const response= await fetch(`${BASE_URL}/product/${id}`);
    const data= await response.json();
    return data;
});

// export const getAllProducts=(state)=>state.product.products
// export const getAllProductsSatus=(state)=>state.product.productStatus

// export const getSingleProducts=(state)=>state.product.productSingle
// export const getSingleProductsSatus=(state)=>state.product.ProudctSingleStatus


export default productSlice.reducer