import { createSlice } from "@reduxjs/toolkit";

const initialState={name:"sona"}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setName:(state ,action)=>{
          state.name=action.payload
        }

    }
})
export const {setName}=userSlice.actions
export default userSlice.reducer;