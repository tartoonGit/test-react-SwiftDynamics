import { createSlice , PayloadAction  } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { DataType } from "./formSlice";

interface UpdateType {
  data: DataType;
}

const initialValue: UpdateType = {
  data: {
    key: -1,
    name: "",
    gender: "",
    code: "",
    tel: "",
    nationality: "",
    idcard: "",
    salary: "",
    date: "",
    passport: "",
  },
};

const updateDataSlice = createSlice({
  name: "form",
  initialState: initialValue,
  reducers: {
    updateData: (state: UpdateType, action: PayloadAction<DataType>) => {
      state.data = action.payload;
    },
    resetData: (state: UpdateType) => {
      state.data = initialValue.data;
    },
  },
});

export const { updateData, resetData } = updateDataSlice.actions;
export const updateDataSelector = (store: RootState) => store.updateDataSlice;
export default updateDataSlice.reducer;
