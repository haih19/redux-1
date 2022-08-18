import { StudentsList } from "../../features/students/StudentsList";
import { AddStudentForm } from "../../features/students/AddStudentForm";
export const StudentModule = () => {
  return (
    <div className="container">
      <AddStudentForm />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <StudentsList />
      </table>
    </div>
  );
};
