import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  likedProducts: Object[];
}

const initialState: InitialState = {
  likedProducts: [],
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    likeProduct: (state, action) => {
      const { id } = action.payload;
      const existingProductIndex = state.likedProducts.findIndex(
        (product) => product.id === id
      );
      if (existingProductIndex === -1) {
        state.likedProducts.push(action.payload);
        
        console.log(action.payload);
        
      }
    },
    dislikeProduct:(state, action) => {
      const { id } = action.payload;
      state.likedProducts = state.likedProducts.filter(product => product.id !== id);
    }
  },
});

export default likeSlice.reducer;
export const { likeProduct,dislikeProduct } = likeSlice.actions;
