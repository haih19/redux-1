import { useSelector } from "react-redux";
import "./studentsList.module.scss";

export const StudentsList = () => {
  const students = useSelector((state) => state.students);

  const renderedStudents = students.map((student) => (
    <tr key={student.id}>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.stuClass}</td>
      <td>
        <div className="d-sm-inline-block">
          <button>edit</button>
        </div>
        <div className="d-sm-inline-block">
          <button>delete</button>
        </div>
      </td>
    </tr>
  ));
  return <tbody>{renderedStudents}</tbody>;
};
