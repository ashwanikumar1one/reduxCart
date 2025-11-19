import { createSlice } from "@reduxjs/toolkit";

// Let's assume this is the Item Shape :
// const item1 = {
//   id: "1234",
//   title: "My First Book",
//   description: "my first book i ever wrote",
//   price: 6,
// };

// Let's assume this is the Cart Shape
// const cart = {
//   items: [
//     {
//       item: {},
//       quantity: 0,
//     },
//   ],
//   totalQuantity: 0,
// };

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changeFlag: false,
  },
  reducers: {
    addItem(state, action) {
      // Get the product index if product is in the cart
      const itemIndex = state.items.findIndex(
        (item) => item.item.id === action.payload.id
      );

      // If Product is already available increase the quantity
      if (itemIndex > -1) {
        state.items[itemIndex].quantity += 1;
      }

      // If Product is not available add it as new product
      else {
        state.items.push({ item: action.payload, quantity: 1 });
      }

      state.totalQuantity++;
      state.changeFlag = true;
    },

    removeItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.item.id === action.payload
      );

      // If Product is not in the Cart
      if (itemIndex === -1) {
        return;
      }

      // If Product quantity > 1 then reduce the quantity
      if (state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
      }

      // if Product quantity = 1 then remove the item
      else {
        state.items.splice(itemIndex, 1);
      }

      state.totalQuantity--;
      state.changeFlag = true;
    },

    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items || [];
      state.changeFlag = false;
    },
  },
});

export const { addItem, removeItem, replaceCart } = cartSlice.actions;
export default cartSlice.reducer;
