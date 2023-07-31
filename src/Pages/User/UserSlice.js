import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../CommonUtils/apiurl";
import {STATUS} from "../../CommonUtils/status";
const user=localStorage.getItem("user");
const initialState={
     UserDetails:user?JSON.parse(user):[],
     UserDetailsStatus:'',
}

const userSlice=createSlice({
    name:"UserDetails",
    initialState,
    reducers:{
        clearUser:(state)=>{
            console.log(state)
           state.UserDetails=[];
           localStorage.removeItem("user");
       }

    },

    extraReducers:(builder)=>{
       builder
       .addCase(fetchUserDetails.pending,(state)=>{
        state.UserDetailsStatus=STATUS.LOADING
       })
       .addCase(fetchUserDetails.fulfilled,(state,action)=>{
        state.UserDetails=action.payload;
        state.UserDetailsStatus=STATUS.SUCCEEDED;
       })
       .addCase(fetchUserDetails.rejected,(state)=>{
        state.UserDetailsStatus=STATUS.FAILD
       });
    }  
})


export const fetchUserDetails=createAsyncThunk('user/login',async (userDetails)=>{
    const response= await fetch(`${BASE_URL}/auth/login`,{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(userDetails)
    });
    const data= await response.json();
    if(data && data.message &&  data.message === 'Invalid credentials'){
        alert('You have enter wrong details',data.message)
    }

    return data;
});

export const {clearUser}=userSlice.actions;

export default userSlice.reducer