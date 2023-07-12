import polaroid from "../modules/polaroid";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    polaroid,
  },
  // Redux Dev Tools, Development server에서만 실행되게 설정하기
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
