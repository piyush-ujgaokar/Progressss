import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import axios from "axios";

const fetchData = createAsyncThunk("coin/fetch", async (args, thunkApi) => {
  try {
    const response = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`,
    );

    return response.data
  } catch (error) {
    return rejectWithValue(error.message)
  }
});



const slice1=createSlice({
    name:"slice1",
    initialState:{
        data:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending,(state)=>{
            state.loading=true,
            state.error=null
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
        })
    }
})

export {fetchData}
export default slice1.reducer
