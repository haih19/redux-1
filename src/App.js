import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./app/Navbar/Navbar";
import { HomePage } from "./pages/home/homePage";
import { StudentPage } from "./pages/student/studentPage";
import { EditStudentPage } from "./pages/editSingleStudent/editStudentPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/student"} element={<StudentPage />} />
          <Route exact path="/students/:id" element={<EditStudentPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
