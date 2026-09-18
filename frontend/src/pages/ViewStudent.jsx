import { useEffect, useState } from "react";

import {
  Link,
  useParams
} from "react-router-dom";

import {
  getStudentById
} from "../services/studentService";

function ViewStudent() {

  const { id } = useParams();

  const [student, setStudent] = useState(null);

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    getStudentById(id)
      .then(data => {

        setStudent(data);

        setLoading(false);

      })
      .catch(error => {

        console.error(error);

        setLoading(false);

      });

  }, [id]);


  if (loading) {

    return (
      <div className="loading">
        Loading student...
      </div>
    );

  }


  if (!student) {

    return (

      <div className="container">

        <h2>
          Student not found
        </h2>

        <Link
          to="/students"
          className="btn-primary"
        >
          Back to Students
        </Link>

      </div>

    );

  }


  return (

    <div className="container">

      <div className="profile-card">


        {/* Profile Header */}

        <div className="profile-header">

          {student.photo ? (

            <img
              src={student.photo}
              alt={student.name}
              className="profile-photo"
            />

          ) : (

            <div className="profile-photo no-profile-photo">
              👤
            </div>

          )}


          <div>

            <h1>
              {student.name}
            </h1>

            <p>
              Register No:
              {" "}
              {student.registerNumber || "-"}
            </p>

            <span
              className={
                student.status === "Active"
                  ? "status-active"
                  : "status-inactive"
              }
            >
              {student.status || "-"}
            </span>

          </div>

        </div>


        {/* Personal Details */}

        <div className="profile-section">

          <h2>
            Personal Details
          </h2>

          <div className="details-grid">

            <div>
              <strong>Student ID</strong>
              <span>{student.id}</span>
            </div>

            <div>
              <strong>Name</strong>
              <span>{student.name}</span>
            </div>

            <div>
              <strong>Email</strong>
              <span>{student.email || "-"}</span>
            </div>

            <div>
              <strong>Phone</strong>
              <span>{student.phone || "-"}</span>
            </div>

            <div>
              <strong>Date of Birth</strong>
              <span>{student.dateOfBirth || "-"}</span>
            </div>

            <div>
              <strong>Gender</strong>
              <span>{student.gender || "-"}</span>
            </div>

            <div>
              <strong>Blood Group</strong>
              <span>{student.bloodGroup || "-"}</span>
            </div>

          </div>

        </div>


        {/* Academic Details */}

        <div className="profile-section">

          <h2>
            Academic Details
          </h2>

          <div className="details-grid">

            <div>
              <strong>Register Number</strong>
              <span>
                {student.registerNumber || "-"}
              </span>
            </div>

            <div>
              <strong>Department</strong>
              <span>
                {student.department || "-"}
              </span>
            </div>

            <div>
              <strong>Year</strong>
              <span>
                {student.year || "-"}
              </span>
            </div>

            <div>
              <strong>Semester</strong>
              <span>
                {student.semester || "-"}
              </span>
            </div>


            <div>
              <strong>Admission Date</strong>
              <span>
                {student.admissionDate || "-"}
              </span>
            </div>

            <div>
              <strong>Percentage</strong>
              <span>
                {student.percentage
                  ? `${student.percentage}%`
                  : "-"}
              </span>
            </div>

          </div>

        </div>


        {/* Parent Details */}

        <div className="profile-section">

          <h2>
            Parent / Guardian Details
          </h2>

          <div className="details-grid">

            <div>
              <strong>Father Name</strong>
              <span>
                {student.fatherName || "-"}
              </span>
            </div>

            <div>
              <strong>Occupation</strong>
              <span>
                {student.occupation || "-"}
              </span>
            </div>

          </div>

        </div>


        {/* Address */}

        <div className="profile-section">

          <h2>
            Address
          </h2>

          <div className="details-grid">

            <div>
              <strong>Address</strong>
              <span>
                {student.address || "-"}
              </span>
            </div>

            <div>
              <strong>City</strong>
              <span>
                {student.city || "-"}
              </span>
            </div>

            <div>
              <strong>State</strong>
              <span>
                {student.state || "-"}
              </span>
            </div>

            <div>
              <strong>Pincode</strong>
              <span>
                {student.pincode || "-"}
              </span>
            </div>

          </div>

        </div>


        {/* Buttons */}

        <div className="profile-actions">

          <Link
            to={`/edit-student/${student.id}`}
            className="btn-edit"
          >
            Edit Student
          </Link>

          <Link
            to="/students"
            className="btn-secondary"
          >
            Back to Students
          </Link>

        </div>

      </div>

    </div>

  );
}

export default ViewStudent;