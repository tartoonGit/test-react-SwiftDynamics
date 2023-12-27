import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface DataType {
  data: Array<{
    key: React.Key | number;
    name: string;
    gender: string;
    code: string;
    tel: string;
    nationality: string;
    idcard: string;
    salary: string;
    date: Date;
    passport?: string;
  }>;
}

const initialValue: DataType = {
  data: [],
};

const formSlice = createSlice({
  name: "form",
  initialState: initialValue,
  reducers: {},
});

// export const { } = formSlice.actions;
export const formSelector = (store: RootState) => store.formSlice;
export default formSlice.reducer;
