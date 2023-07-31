import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../CommonUtils/apiurl";
import {STATUS} from "../../CommonUtils/status";
const initialState={
     search:[],
     searchStatus:'',
}

const searchSlice=createSlice({
    name:"search",
    initialState,
    reducers:{
        clearSearch: (state, action) => {
            state.search = [];
        }
    },

    extraReducers:(builder)=>{
       builder
       .addCase(fetchSearchProduct.pending,(state)=>{
        state.searchStatus=STATUS.LOADING
       })
       .addCase(fetchSearchProduct.fulfilled,(state,action)=>{
        state.search=action.payload;
        state.searchStatus=STATUS.SUCCEEDED
       })
       .addCase(fetchSearchProduct.rejected,(state)=>{
        state.searchStatus=STATUS.FAILD
       })
    }  
})


export const fetchSearchProduct=createAsyncThunk('search/fetch',async (searchTerms)=>{
    const response= await fetch(`${BASE_URL}/products/search?q=${searchTerms}`);
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

export const {clearSearch}=searchSlice.actions;
export default searchSlice.reducer;