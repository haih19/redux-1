import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Jaden Smith", stuClass: "a1" },
  { id: "2", name: "Charlie Heaton", stuClass: "a2" },
  { id: "3", name: "David Ornstein", stuClass: "a1" },
  { id: "4", name: "jacob steinberg", stuClass: "a2" },
  { id: "5", name: "jacob steinberg", stuClass: "a3" },
  { id: "6", name: "jacob steinberg", stuClass: "a2" },
  { id: "7", name: "jacob steinberg", stuClass: "a4" },
  { id: "8", name: "jacob steinberg", stuClass: "a2" },
  { id: "9", name: "jacob steinberg", stuClass: "a3" },
  { id: "10", name: "jacob steinberg", stuClass: "a4" },
  { id: "11", name: "jacob steinberg", stuClass: "a5" },
  { id: "12", name: "jacob steinberg", stuClass: "a4" },
  { id: "13", name: "jacob steinberg", stuClass: "a3" },
  { id: "14", name: "jacob steinberg", stuClass: "a4" },
  { id: "15", name: "jacob steinberg", stuClass: "a2" },
  { id: "16", name: "jacob steinberg", stuClass: "a5" },
  { id: "17", name: "jacob steinberg", stuClass: "a6" },
  { id: "18", name: "jacob steinberg", stuClass: "a5" },
  { id: "19", name: "jacob steinberg", stuClass: "a6" },
  { id: "20", name: "jacob steinberg", stuClass: "a3" },
  { id: "21", name: "jacob steinberg", stuClass: "a1" },
  { id: "22", name: "jacob steinberg", stuClass: "a3" },
  { id: "23", name: "jacob steinberg", stuClass: "a2" },
  { id: "24", name: "jacob steinberg", stuClass: "a2" },
];

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addAStudent(state, action) {
      state.push(action.payload);
    },
    updateAStudent(state, action) {
      const { id, name, stuClass } = action.payload;
      const existingStudent = state.find((student) => student.id === id);
      if (existingStudent) {
        existingStudent.name = name;
        existingStudent.stuClass = stuClass;
      }
    },
    deleteAStudent: (state, action) => {
      const { id } = action.payload;
      return state.filter((student) => student.id !== id);
    },
  },
});

// export const { stuAdded } = stuAdded.actions;
// export const addAStudent = addAStudent.action;
export const { addAStudent, updateAStudent, deleteAStudent } =
  studentsSlice.actions;

export default studentsSlice.reducer;
