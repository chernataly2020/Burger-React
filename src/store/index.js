import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from './category/categorySlice.js';
import productReducer from "./product/productSlice.js";
import orderReducer, { localStorageMiddleware } from "./order/orderSlice.js";

export const store = configureStore({
  reducer:{
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
  },

  middleware: getDefaultMiddleware => {
    const mdws = getDefaultMiddleware().concat(localStorageMiddleware);

    console.log(mdws);
    return mdws;
  }
})