import {createSlice} from '@reduxjs/toolkit'

const initialState ={count:0};

const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.count += action.payload;
        },
        decrement:(state,action)=>{
            state.count-=action.payload;
        },
         reset:(state)=>{
            state.count=0;
         }
    }

})
export const{ increment,decrement,reset}=counterSlice.actions;
export default counterSlice.reducer



// import { createSlice } from "@reduxjs/toolkit"; 

// export const counterSlice=createSlice({
//     name:'count' ,
//     initialState:{
//         val:5
//     },
//     reducers:{
//         increse:(state)=>{
//             state.val+=1
//         },
//         decrease:(state)=>{
//             state.val-=1

//     }, 
// }
// })
// export  const{ increse, decrease } =counterSlice.actions 
// export default counterSlice.reducer