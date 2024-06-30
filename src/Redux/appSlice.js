import {createSlice} from '@reduxjs/toolkit';

const slices=createSlice({
    name:"app",
    initialState:{
        loginlogOut:true,
        switchs:true  
    },
    reducers:{
        Setloginlogout:(state)=>{
            state.loginlogOut=!state.loginlogOut;
        },
        Setswithes:(state)=>{
            state.switchs=!state.switchs;
        }
    }
})


export const { Setloginlogout,Setswithes } = slices.actions;
export default slices.reducer;