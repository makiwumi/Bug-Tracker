import {createSlice} from '@reduxjs/toolkit';
const slice = createSlice({
    name: "user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:"Marian Akiwumi"})
            state.push({name:"Francesco Adefila"})
        }
    }
})

export default slice.reducer;

export const {getUser} = slice.actions;