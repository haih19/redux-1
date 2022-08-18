import { useSelector, useDispatch } from "react-redux";
import "./studentsList.module.scss";
import { Link } from "react-router-dom";
import { deleteAStudent } from "../../redux/features/students/studentsSlice";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./studentPaging.scss";

export const StudentsList = () => {
  const students = useSelector((state) => state.students);

  const dispatch = useDispatch();

  // const [searchList, setSearchList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const handleOnclickDelete = (student) => {
    dispatch(deleteAStudent(student));
  };
  const pageCount = Math.ceil(students.length / usersPerPage);

  const handleChangePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayStudents = students
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((student) => {
      return (
        <tr key={student.id}>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.stuClass}</td>
          <td>
            <div className="d-sm-inline-block">
              <button>
                <Link
                  className="text-decoration-none"
                  to={`/students/${student.id}`}
                >
                  edit
                </Link>
              </button>
            </div>
            <div className="d-sm-inline-block">
              <button onClick={() => handleOnclickDelete(student)}>
                delete
              </button>
            </div>
          </td>
        </tr>
      );
    });

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{displayStudents}</tbody>
      </table>
      <div id="paging">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handleChangePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
};
