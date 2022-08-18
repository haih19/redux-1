import { StudentsList } from "../../Components/StudentsList/StudentsList";
import { AddStudentForm } from "../../Components/Add/AddStudentForm";
export const StudentModule = () => {
  return (
    <div className="container">
      <AddStudentForm />
      {/* <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
      </table> */}
      <StudentsList />
    </div>
  );
};
