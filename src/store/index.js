import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from './category/categorySlice.js';
import productReducer from "./product/productSlice.js";
import modalReducer from "./modalDelivery/modalDeliverySlice.js";
import orderReducer, { localStorageMiddleware } from "./order/orderSlice.js";
import formReducer from "./form/formSlice.js";

export const store = configureStore({
  reducer:{
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
    modal: modalReducer,
    form: formReducer,
  },

  middleware: getDefaultMiddleware => {
    const mdws = getDefaultMiddleware().concat(localStorageMiddleware);
    return mdws;
  }
})