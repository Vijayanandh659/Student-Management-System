import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../services/studentService";

function AddStudent() {

  const navigate = useNavigate();

  const [student, setStudent] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",

    registerNumber: "",
    department: "",
    year: "",
    semester: "",
    admissionDate: "",
    percentage: "",
    status: "Active",

    fatherName: "",
    occupation: "",

    address: "",
    city: "",
    state: "",
    pincode: "",

    photo: ""
  });


  const handleChange = (e) => {

    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });

  };


  const handlePhotoChange = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {

      setStudent({
        ...student,
        photo: reader.result
      });

    };

    reader.readAsDataURL(file);
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await addStudent(student);

      alert("Student added successfully!");

      navigate("/students");

    } catch (error) {

      console.error(error);

      alert("Failed to add student");

    }
  };


  return (

    <div className="container">

      <h1>Add Student</h1>

      <form
        className="student-form"
        onSubmit={handleSubmit}
      >

        <h2>Personal Details</h2>
        <input
            type="number"
            name="id"
            value={student.id}
            onChange={handleChange}
            placeholder="Enter Student ID"
            required
          />
        <input
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          value={student.phone}
          onChange={handleChange}
        />

        <input
          name="dateOfBirth"
          type="date"
          value={student.dateOfBirth}
          onChange={handleChange}
        />

        <select
          name="gender"
          value={student.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select
          name="bloodGroup"
          value={student.bloodGroup}
          onChange={handleChange}
        >
          <option value="">Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>


        <h2>Academic Details</h2>

        <input
          name="registerNumber"
          placeholder="Register Number"
          value={student.registerNumber}
          onChange={handleChange}
        />

        <input
          name="department"
          placeholder="Department"
          value={student.department}
          onChange={handleChange}
        />

        <input
          name="year"
          placeholder="Year"
          value={student.year}
          onChange={handleChange}
        />

        <input
          name="semester"
          placeholder="Semester"
          value={student.semester}
          onChange={handleChange}
        />

       <input
          name="admissionDate"
          type="date"
          value={student.admissionDate}
          onChange={handleChange}
        />

        <input
          name="percentage"
          type="number"
          placeholder="Percentage"
          value={student.percentage}
          onChange={handleChange}
        />

        <select
          name="status"
          value={student.status}
          onChange={handleChange}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>


        <h2>Parent Details</h2>

        <input
          name="fatherName"
          placeholder="Father Name"
          value={student.fatherName}
          onChange={handleChange}
        />

        <input
          name="occupation"
          placeholder="Parent Occupation"
          value={student.occupation}
          onChange={handleChange}
        />


        <h2>Address</h2>

        <textarea
          name="address"
          placeholder="Address"
          value={student.address}
          onChange={handleChange}
        />

        <input
          name="city"
          placeholder="City"
          value={student.city}
          onChange={handleChange}
        />

        <input
          name="state"
          placeholder="State"
          value={student.state}
          onChange={handleChange}
        />

        <input
          name="pincode"
          placeholder="Pincode"
          value={student.pincode}
          onChange={handleChange}
        />


        <h2>Profile Photo</h2>

        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
        />

        {student.photo && (

          <img
            src={student.photo}
            alt="Preview"
            className="student-photo-large"
          />

        )}


        <button
          type="submit"
          className="btn-primary"
        >
          Add Student
        </button>

      </form>

    </div>
  );
}

export default AddStudent;