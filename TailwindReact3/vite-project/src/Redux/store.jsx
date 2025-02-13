import {configureStore} from "@reduxjs/toolkit"
import  productSlice  from "./ProductSlice";
import sepetSlice from "./SepetSlice"

export const store = configureStore(
    {
        reducer:{
           product:productSlice,
           sepet:sepetSlice
        }
    }
)
export default store;