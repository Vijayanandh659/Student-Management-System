import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getStudents,
  deleteStudent
} from "../services/studentService";

function Students() {

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  // Load students
  const loadStudents = async () => {

    try {

      const data = await getStudents();

      setStudents(data);

    } catch (error) {

      console.error(error);
      alert("Unable to load students");

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    loadStudents();

  }, []);


  // Delete student
  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) {
      return;
    }

    try {

      await deleteStudent(id);

      setStudents(
        students.filter(
          student => student.id !== id
        )
      );

      alert("Student deleted successfully!");

    } catch (error) {

      console.error(error);
      alert("Failed to delete student");

    }
  };


  // Search + Filter
  const filteredStudents = students.filter(student => {

    const searchText = search.toLowerCase();

    const matchesSearch =
      student.name?.toLowerCase().includes(searchText) ||
      student.email?.toLowerCase().includes(searchText) ||
      student.registerNumber?.toLowerCase().includes(searchText)

    const matchesDepartment =
      department === "" ||
      student.department === department;

    const matchesStatus =
      status === "" ||
      student.status === status;

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesStatus
    );

  });


  if (loading) {

    return (
      <div className="loading">
        Loading students...
      </div>
    );

  }


  return (

    <div className="container students-page">

      {/* Header */}

      <div className="page-header student-page-header">

        <div>
          <h1>Students</h1>

          <p className="student-total"><span>{students.length}</span> total students</p>
        </div>

        <Link
          to="/add-student"
          className="btn-primary"
        >
          + Add Student
        </Link>

      </div>


      {/* Search and Filters */}

      <div className="filters">

        <input
          className="search-box"
          type="text"
          placeholder="Search name, email, register number..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />


        <select
          value={department}
          onChange={(e) =>
            setDepartment(e.target.value)
          }
        >

          <option value="">
            All Departments
          </option>

          <option value="Computer Science">
            Computer Science
          </option>

          <option value="Artificial Intelligence">
            Artificial Intelligence
          </option>

          <option value="Electronics">
            Electronics
          </option>

          <option value="Mechanical">
            Mechanical
          </option>

          <option value="Civil">
            Civil
          </option>

        </select>


        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >

          <option value="">
            All Status
          </option>

          <option value="Active">
            Active
          </option>

          <option value="Inactive">
            Inactive
          </option>

        </select>

      </div>


      {/* Student Table */}

      {filteredStudents.length === 0 ? (

        <div className="no-data">
          No students found.
        </div>

      ) : (

        <div className="table-container">

          <table className="student-table">

            <thead>

              <tr>

                <th>Photo</th>

                <th>ID</th>

                <th>Register No</th>

                <th>Name</th>

                <th>Department</th>

                <th>Year</th>

                <th>Phone</th>

                <th>Status</th>

                <th>Actions</th>

              </tr>

            </thead>


            <tbody>

              {filteredStudents.map(student => (

                <tr key={student.id}>

                  {/* Photo */}

                  <td>

                    {student.photo ? (

                      <img
                        src={student.photo}
                        alt={student.name}
                        className="student-photo"
                      />

                    ) : (

                      <div className="no-photo">
                        👤
                      </div>

                    )}

                  </td>


                  {/* ID */}

                  <td>
                    {student.id}
                  </td>


                  {/* Register Number */}

                  <td>
                    {student.registerNumber || "-"}
                  </td>


                  {/* Name */}

                  <td>
                    <strong>
                      {student.name}
                    </strong>
                  </td>


                  {/* Department */}

                  <td>
                    {student.department || "-"}
                  </td>



                  {/* Year */}

                  <td>
                    {student.year || "-"}
                  </td>


                  {/* Phone */}

                  <td>
                    {student.phone || "-"}
                  </td>


                  {/* Status */}

                  <td>

                    <span
                      className={
                        student.status === "Active"
                          ? "status-active"
                          : "status-inactive"
                      }
                    >
                      {student.status || "-"}
                    </span>

                  </td>


                  {/* Actions */}

                  <td className="actions">

                    <Link
                      to={`/view-student/${student.id}`}
                      className="btn-view"
                    >
                      View
                    </Link>


                    <Link
                      to={`/edit-student/${student.id}`}
                      className="btn-edit"
                    >
                      Edit
                    </Link>


                    <button
                      className="btn-delete"
                      onClick={() =>
                        handleDelete(student.id)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>

  );
}

export default Students;
