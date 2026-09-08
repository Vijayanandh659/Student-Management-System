import { useEffect, useState } from "react";
import { getStudents } from "../services/studentService";

function Dashboard() {

  const [students, setStudents] = useState([]);

  useEffect(() => {

    getStudents()
      .then(data => {
        setStudents(data);
      })
      .catch(error => {
        console.error(error);
      });

  }, []);

  const activeStudents =
    students.filter(
      student => student.status === "Active"
    ).length;

  const maleStudents =
    students.filter(
      student => student.gender === "Male"
    ).length;

  const femaleStudents =
    students.filter(
      student => student.gender === "Female"
    ).length;

  return (

    <div className="container">

      <h1>Dashboard</h1>

      <div className="dashboard-cards">

        <div className="card">
          <h3>Total Students</h3>
          <p>{students.length}</p>
        </div>

        <div className="card">
          <h3>Active Students</h3>
          <p>{activeStudents}</p>
        </div>

        <div className="card">
          <h3>Male Students</h3>
          <p>{maleStudents}</p>
        </div>

        <div className="card">
          <h3>Female Students</h3>
          <p>{femaleStudents}</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;