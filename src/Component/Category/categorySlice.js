import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../CommonUtils/apiurl";
import {STATUS} from "../../CommonUtils/status";
const initialState={
     categories:[],
     categoriesStatus:'',
     categoriesSingle:[],
     categoriesSingleStatus:"",
}

const categoriesSlice=createSlice({
    name:"category",
    initialState,
    reducers:{},

    extraReducers:(builder)=>{
       builder
       .addCase(fetchCategroies.pending,(state)=>{
        state.categoriesStatus=STATUS.LOADING
       })
       .addCase(fetchCategroies.fulfilled,(state,action)=>{
        state.categories=action.payload;
        state.categoriesStatus=STATUS.SUCCEEDED
       })
       .addCase(fetchCategroies.rejected,(state)=>{
        state.categoriesStatus=STATUS.FAILD
       })
       .addCase(fetchSingleCategories.pending,(state,action)=>{    //single prouduct fetch
        state.categoriesSingleStatus=STATUS.LOADING
       })
       .addCase(fetchSingleCategories.fulfilled,(state,action)=>{
        state.categoriesSingle=action.payload;
        state.categoriesSingleStatus=STATUS.SUCCEEDED
       })
       .addCase(fetchSingleCategories.rejected,(state,action)=>{
        state.categoriesSingleStatus=STATUS.FAILD
       })
    }  
})


export const fetchCategroies=createAsyncThunk('categories/fetch',async ()=>{
    const response= await fetch(`${BASE_URL}/products/categories`);
    const data= await response.json();
    return data;
});

export const fetchSingleCategories=createAsyncThunk('category/fetch',async(categories)=>{
    const response= await fetch(`${BASE_URL}/products/category/${categories}`);
    const data= await response.json();
    return data.products;
});

// export const getAllcategories=(state)=>state.product.categories
// export const getAllcategoriesSatus=(state)=>state.product.categoriestatus

export const getSinglecategories=(state)=>state.product.categoriesingle
export const getSinglecategoriesSatus=(state)=>state.product.ProudctSingleStatus


export default categoriesSlice.reducer