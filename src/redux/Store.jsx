import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounderSlice'
import userReducer from './UserSlice'

const store=configureStore({
  reducer:{
    counter:counterReducer,
    users:userReducer
  },
})
export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import{countreducer} from './CounderSlice'

// const store=configureStore({
//       reducer:{
//         count:countreducer,
//       }
// })
// export default store
