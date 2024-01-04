import { createSlice , PayloadAction  } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface modeEditType {
  data: boolean;
}

const initialValue: modeEditType = {
  data: false,
};

const modeEditSlice = createSlice({
  name: "form",
  initialState: initialValue,
  reducers: {
    setModeEdit: (state: modeEditType, action: PayloadAction<boolean>) => {
      state.data = action.payload;
    },
  },
});

export const { setModeEdit } = modeEditSlice.actions;
export const modeEditSelector = (store: RootState) => store.modeEditSlice;
export default modeEditSlice.reducer;
