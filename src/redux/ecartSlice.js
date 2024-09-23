import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cartCount : 0 ,
  cartItem: {
    Shoes: { name: "", count: 0, price: 0 },
    Clothes: { name: "", count: 0, price: 0 },
    Watches: { name: "", count: 0, price: 0 },
    Bags: { name: "", count: 0, price: 0 }
  },
};

export const ecartSlice = createSlice({
  name: "ecart",
  initialState,
  reducers: {
    handleCartCount: (state, action) => {
        if(action.payload === true){
        state.cartCount -= 1
        }
        else {
            state.cartCount += 1
        }
        
    },

    handleCartItem: (state, action) => {
        
        const{item , remove} = action.payload
       
        if(remove){
            state.cartItem = {...state.cartItem ,
                [item.productName] : {count : state.cartItem[item.productName].count - 1 , price : state.cartItem[item.productName].price - item.price ,  name:item.productName , image : item.productImg , }
        };
        }
        else {
            state.cartItem = {...state.cartItem ,
                [item.productName] : {count : state.cartItem[item.productName].count + 1 , price : state.cartItem[item.productName].price + item.price ,  name:item.productName , image :item.productImg}
        };
        }

      
    }
  },
});

export const { handleCartCount , handleCartItem } = ecartSlice.actions;
export default ecartSlice.reducer;
