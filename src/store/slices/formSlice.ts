import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface DataType {
  key: number;
  name: string;
  gender: string;
  code: string;
  tel: string;
  nationality: string;
  idcard: string;
  salary: string;
  date: string;
  passport?: string;
}

export interface TableType {
  data: Array<DataType>;
}

const initialValue: TableType = {
  data: [],
};

const formSlice = createSlice({
  name: "form",
  initialState: initialValue,
  reducers: {
    addForm: (state: TableType, action: PayloadAction<DataType>) => {
      state.data.push(action.payload);
      localStorage.setItem("dataTable", JSON.stringify(state.data));
    },
    removeForm: (state: TableType, action: PayloadAction<number[]>) => {
      state.data = state.data.filter(
        (item) => !action.payload.includes(item.key)
      );
      localStorage.setItem("dataTable", JSON.stringify(state.data));
    },
    localCheck: (state: TableType, action: PayloadAction<DataType[]>) => {
      state.data = action.payload;
    },
    updateForm: (state: TableType, action: PayloadAction<DataType>) => {
      const updatedData = state.data.map((item) =>
        item.key === action.payload.key ? action.payload : item
      );
      state.data = updatedData;
      localStorage.setItem("dataTable", JSON.stringify(state.data));
    },
  },
});

export const { addForm, removeForm, localCheck, updateForm } = formSlice.actions;
export const formSelector = (store: RootState) => store.formSlice;
export default formSlice.reducer;
