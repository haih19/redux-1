import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addAStudent } from "./studentsSlice";

export const AddStudentForm = () => {
  const [name, setName] = useState("");
  const [stuClass, setStuClass] = useState("");

  const dispatch = useDispatch();

  const handleOnchangeName = (e) => setName(e.target.value);
  const handleOnchangeClass = (e) => setStuClass(e.target.value);

  const handleOnclickSave = () => {
    if (name && stuClass) {
      dispatch(
        addAStudent({
          id: nanoid(),
          name,
          stuClass,
        })
      );
      setName("");
      setStuClass("");
    }
  };

  return (
    <div className="container">
      <h2>Add a Student</h2>
      <div className="container w-50">
        <form>
          <label htmlFor="postTitle">Student Name:</label>
          <input
            onChange={handleOnchangeName}
            className="form-control"
            type="text"
            id="name"
            name="postTitle"
            value={name}
          />
          <label htmlFor="postContent">Student Class:</label>
          <input
            onChange={handleOnchangeClass}
            className="form-control"
            id="stuClass"
            name="postContent"
            value={stuClass}
          />
          <button onClick={handleOnclickSave} type="button">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
