import { configureStore,combineReducers } from "@reduxjs/toolkit";
import counterReducer from './CounderSlice'
import userReducer from './UserSlice'
import toggleReducer from './toggleSlice'


const store=configureStore({
  reducer:{
    counter:counterReducer,
    users:userReducer,
    toggle:toggleReducer,
  },
})
//*
export default store;

// const rootstor=configureStore({
//   counter:counterReducer;
// user:userReducer
// })

// const store=configureStore({
//   reducer:{
//     rootstor
//   }
// })

// export default store;



