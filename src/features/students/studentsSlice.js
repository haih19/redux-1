import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Jaden Smith", stuClass: "a1" },
  { id: "2", name: "Charlie Heaton", stuClass: "a2" },
  { id: "3", name: "David Ornstein", stuClass: "a1" },
  { id: "4", name: "jacob steinberg", stuClass: "a2" },
];

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addAStudent(state, action) {
      state.push(action.payload);
    },
  },
});

// export const { stuAdded } = stuAdded.actions;
// export const addAStudent = addAStudent.action;
export const { addAStudent } = studentsSlice.actions;

export default studentsSlice.reducer;
