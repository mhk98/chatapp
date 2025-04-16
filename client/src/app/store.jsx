// import cartSlice from "@/Redux-Thunk/reducers/cartSlice";

import { configureStore } from "@reduxjs/toolkit";
import { contactApi } from "../features/contact/contact";









const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,

   
  

  
  
  
 
  },

  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        contactApi.middleware,
      
    ),
});

export default store;