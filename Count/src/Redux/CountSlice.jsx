import {createSlice}  from "@reduxjs/toolkit"


const CountSlice=createSlice({
    name:"count",
    initialState:{
        count:0,
    },
    reducers:{
        add:(state,action)=>{
            state.count=state.count+1
        },
        substract:(state,action)=>{
            state.count=state.count-1
        },
        reset:(state,action)=>{
            state.count=0
        }
    }

})

export const {add,substract,reset}=CountSlice.actions

export default CountSlice.reducer
