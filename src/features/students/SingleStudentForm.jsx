import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";

export const EditStudentPage = () => {
  const { id } = useParams();

  const students = useSelector((state) => state.students);

  let student = students.find((stu) => stu.id === id);
  if (!student) {
    return (
      <div>
        <h2>Student not found!</h2>
      </div>
    );
  }

  return (
    <div className="w-50">
      <div>
        <h2>Edit Student</h2>
      </div>
      Student Name:
      <input className="form-control" value={student?.name} />
      Class:
      <input className="form-control" value={student?.stuClass} />
    </div>
  );
};
