import { createSlice } from "@reduxjs/toolkit";



const getBasketStoreage = ()=>{
    if(localStorage.getItem("basket"))
    {
        return JSON.parse(localStorage.getItem("basket"))
    }
    return [];
}



const initialState = {
     selectedProduct:getBasketStoreage(),
     totalAmount : 0
}

const writeBasketStoreage = (basket)=>{
    localStorage.setItem("basket",JSON.stringify(basket))
    
}




export const sepetSlice = createSlice({
    name:"sepet",
    initialState,
    reducers:{


//Add Basket     
addToBasket:(state,action)=>{

const findProduct = state.selectedProduct && state.selectedProduct.find((product)=>product.id === action.payload.id);

  if(findProduct)       
  {
const extractedProduct = state.selectedProduct.filter((product)=> product.id !== action.payload.id);

findProduct.count  += action.payload.count;
state.selectedProduct=[...extractedProduct,findProduct];

writeBasketStoreage(state.selectedProduct);

  }

  else{
    state.selectedProduct = [...state.selectedProduct,action.payload];
    writeBasketStoreage(state.selectedProduct);
    }
 },

 //Remove Basket
 removeFromBasket:(state,action)=>{
  state.selectedProduct = state.selectedProduct.filter((product)=>product.id !== action.payload.id);
  
  localStorage.setItem("basket",JSON.stringify(state.selectedProduct));
  
  
 },
 complete:(state,action)=>{
    state.selectedProduct=[];
    localStorage.removeItem("basket");
 }       
    }
}
)

export const {addToBasket,removeFromBasket,complete} = sepetSlice.actions;
export default sepetSlice.reducer;