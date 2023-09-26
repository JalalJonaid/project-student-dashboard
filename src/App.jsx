import { useState } from "react";
import data from "./data/data.json";
import StudentList from "./Components/StudentList";
import MenuCohortList from "./Components/MenuCohortList";

import NavBar from "./Components/NavBar";

function App() {
  console.log(data);

  const [students, setStudents] = useState(data);
  const [cohortName, setCohortName] = useState("All Students");

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <MenuCohortList data={data} setCohortName={setCohortName} />
        <StudentList data={data} students={students} cohortName={cohortName} />
      </main>
    </div>
  );
}
export default App;
