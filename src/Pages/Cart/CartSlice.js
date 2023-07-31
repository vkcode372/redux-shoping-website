import { createSlice } from "@reduxjs/toolkit";

const calculateDiscountPrice=(item)=>{
    let price=item.price;
    let discount=item.discountPercentage;
    return Math.floor(price - (price*(discount/100)));
}

const setLocalItem=(cart,totalPrice,totalQuantity)=>{
     localStorage.setItem("cart", JSON.stringify(cart));
         localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
         localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
}

// Load cart data from local storage (if available)
const savedCart = localStorage.getItem("cart");
const savedTotalPrice = localStorage.getItem("totalPrice");
const savedTotalQuantity = localStorage.getItem("totalQuantity");
const initialState={
    cart: savedCart ? JSON.parse(savedCart) : [],
    cartStatus: "",
    CartSuccessMsg:false,
    totalPrice: savedTotalPrice ? JSON.parse(savedTotalPrice) : 0,
    totalQuantity: savedTotalQuantity ? JSON.parse(savedTotalQuantity) : 0,
}


export const CartSlice=createSlice({
 name:"cart",
 initialState,
 reducers:{
     addTocart:(state,action)=>{
         let find=state.cart.findIndex((item)=>item.id===action.payload.id);
       
          if(find>=0){
            state.cart[find].quantity+=1
           
          }else{
            state.cart.push({...action.payload,quantity:1})
           
          }
         
         state.totalPrice+=calculateDiscountPrice(action.payload);
         state.totalQuantity+=1
          setLocalItem(state.cart,state.totalPrice,state.totalQuantity);
          state.CartSuccessMsg=true

     },
     removeItem:(state,action)=>{
    //   console.log(action.payload.quantity)
        const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
          state.cart=state.cart.filter((item)=>item.id!==action.payload.id);
          state.totalPrice -=calculateDiscountPrice(action.payload)*action.payload.quantity;
          state.totalQuantity -= 1*action.payload.quantity;
       
      }
     setLocalItem(state.cart,state.totalPrice,state.totalQuantity);
     },
     incrementByValue:(state,action)=>{
        let find=state.cart.findIndex((item)=>item.id===action.payload.id);
        if(find>=0){
            state.totalQuantity += 1;
            state.cart[find].quantity+=1
            state.totalPrice +=calculateDiscountPrice(action.payload);
        }
        setLocalItem(state.cart,state.totalPrice,state.totalQuantity);
     },
     decreseByValue:(state,action)=>{
        let find=state.cart.findIndex((item)=>item.id===action.payload.id);
        if(find>=0 && state.cart[find].quantity >1){
            state.totalQuantity -= 1;
            state.cart[find].quantity-=1
            state.totalPrice -=calculateDiscountPrice(action.payload);
        }
        setLocalItem(state.cart,state.totalPrice,state.totalQuantity);
     },
     cartSeccessMsgon:(state,action)=>{
          state.CartSuccessMsg=true;
     },
     cartSeccessMsgoff:(state,action)=>{
          state.CartSuccessMsg=false;
     }

 }

})

export const {addTocart,removeItem,incrementByValue, decreseByValue,cartSeccessMsgoff, cartSeccessMsgon}=CartSlice.actions;

export default CartSlice.reducer;

