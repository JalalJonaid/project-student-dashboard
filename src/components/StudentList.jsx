import StudentCard from "./StudentCard";

export default function StudentList({ data, students, cohortName }) {
  const filteredStudents = cohortName === "All Students"
    ? students
    : students.filter(student => student.cohort.cohortCode === cohortName);

  return (
    <div className="student-list">
      <h2 className="color-student-list">
  {cohortName === "All Students"
    ? "All Students"
    : `${cohortName.split(/[0-9]/).filter(Boolean).join(' ')}${cohortName.slice(-4)}`}
</h2>
      <br />
      <p>
        <span className="student-total-color">
          Total Students: <span>{cohortName === "All Students" ? data.length : filteredStudents.length}</span>
        </span>
      </p>

      {filteredStudents.map(student => (
        <div key={student.id}>
          <StudentCard key={student.id} student={student} />
        </div>
      ))}
    </div>
  );
}
