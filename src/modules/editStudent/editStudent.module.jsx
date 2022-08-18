import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateAStudent } from "../../redux/features/students/studentsSlice";

export const EditStudentModule = () => {
  const { id } = useParams();

  const students = useSelector((state) => state.students);

  let student = students.find((stu) => stu.id === id);

  const [name, setName] = useState(student?.name);
  const [stuClass, setStuClass] = useState(student?.stuClass);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnchangeName = (e) => setName(e.target.value);
  const handleOnChangeStuClass = (e) => setStuClass(e.target.value);

  const handleOnclickSave = () => {
    if (name && stuClass) {
      dispatch(updateAStudent({ id: id, name, stuClass }));
      navigate("/student");
    }
  };

  if (!student) {
    return (
      <div className="container">
        <h2>Student not found!</h2>
      </div>
    );
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className="w-50">
        <div>
          <h2>Edit Student</h2>
        </div>
        Student Name:
        <input
          onChange={handleOnchangeName}
          className="form-control"
          value={name}
        />
        Class:
        <input
          onChange={handleOnChangeStuClass}
          className="form-control"
          value={stuClass}
        />
        <button onClick={handleOnclickSave} className="w-100">
          Save
        </button>
      </div>
    </div>
  );
};
