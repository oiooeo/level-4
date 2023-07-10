import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    title: "내 베푸",
    contents: "우리 넘 기여운듯~",
    image:
      "https://i.pinimg.com/564x/39/f4/53/39f453d50a8060205fc7e9bc47d67a7f.jpg",
    user: "가",
  },
];

const polaroidSlice = createSlice({
  name: "polaroid",
  initialState: initialState,
  reducers: {
    addPolaroid: (state, action) => {
      state.push(action.payload);
    },
    removePolaroid: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    // switchPolaroid: (state, action) => {
    //   return state.map((item) => {
    //     if (item.id === action.payload) {
    //       return { ...item, isDone: !item.isDone };
    //     } else {
    //       return item;
    //     }
    //   });
    // },
  },
});

// export const { addPolaroid, removePolaroid, switchPolaroid } = polaroidSlice.actions;
export const { addPolaroid, removePolaroid } = polaroidSlice.actions;
export default polaroidSlice.reducer;
