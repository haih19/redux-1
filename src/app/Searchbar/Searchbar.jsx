import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchStudent } from "../../features/students/studentsSlice";

export const Searchbar = () => {
  //   const students = useSelector((state) => state.students);
  const [searchInput, setSearchInput] = useState("");
  //   const [filteredResults, setFilteredResults] = useState([]);

  const handleOnChangeSearch = (event) => {
    console.log("event", event.target.value);
    setSearchInput(event.target.value);
  };

  //   useEffect(() => {
  //     if (searchInput !== "") {
  //       const filteredData = students.filter((element) => {
  //         return element.stuClass.includes(searchInput);
  //       });
  //       setFilteredResults(filteredData);
  //     } else {
  //       setFilteredResults(students);
  //     }
  //   }, [searchInput]);

  const dispatch = useDispatch();

  const handleOnclickSearch = (event) => {
    dispatch(searchStudent(searchInput));
    setSearchInput("");
  };

  return (
    <div className="input-group">
      <input
        onChange={handleOnChangeSearch}
        value={searchInput}
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        name="search"
      />
      <button
        onClick={handleOnclickSearch}
        type="button"
        className="btn btn-outline-primary"
      >
        search
      </button>
    </div>
  );
};
