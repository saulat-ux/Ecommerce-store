import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cartService from './cartService';
import { toast } from "react-toastify"


const initialState = {
    
   product: null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message: "",
    counter:0,
};

// send product
export const sendProductToCart = createAsyncThunk(
    "cart/sendProductToCart",
    async (userData, thunkAPI) => {
        try {
                return await cartService.sendProductToCart(userData)
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }
)
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    RESET_CART(state){
       state.isError=false;
       state.isSuccess=false;
       state.isLoading=false;
       state.message= "";
       state.counter= 0;
    }
  },
    extraReducers: (builder) => {
        

        builder
        // send product
        .addCase(sendProductToCart.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(sendProductToCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isLoggedIn = true;
                state.product = action.payload;
                state.counter--;
                toast.success("product sent to cart successfully");
            })
            .addCase(sendProductToCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.product = null;
                state.counter--;
                toast.success(action.payload);
            })
    }
});

export const {RESET_CART} = cartSlice.actions

export default cartSlice.reducer