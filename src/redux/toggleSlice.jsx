import { createSlice } from "@reduxjs/toolkit";

const  initialState={
    isblack:true,
}

 const toggleSlice=createSlice({
    name:"toggle",
    initialState,
    reducers:{
        toggle:(state)=>{
            state.isblack=!state.isblack
        }
    }
})
export const {toggle}=toggleSlice.actions;
export default toggleSlice.reducer
