import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import formSlice from "./slices/formSlice";
import updateDataSlice from "./slices/updateDataSlice";
import modeEditSlice from "./slices/modeEditSlice";

const reducer = {
  formSlice,
  updateDataSlice,
  modeEditSlice,
};

export const store = configureStore({
  reducer
});

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
