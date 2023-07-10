import polaroid from "../modules/polaroid";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    polaroid,
  },
});

export default store;
