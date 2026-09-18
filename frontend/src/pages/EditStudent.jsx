import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import {
  getStudentById,
  updateStudent
} from "../services/studentService";


function EditStudent() {

  const { id } = useParams();

  const navigate = useNavigate();


  const [student, setStudent] = useState({
    id:"",
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

  useEffect(() => {
  const loadStudent = async () => {
    try {
      const data = await getStudentById(id);
      setStudent(data);
    } catch (error) {
      console.error(error);
    }
  };

  loadStudent();
}, [id]);

  const [loading, setLoading] =
    useState(true);


  // Get student
  useEffect(() => {

    getStudentById(id)
      .then(data => {

        setStudent({
          id: data.id || "",
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          dateOfBirth: data.dateOfBirth || "",
          gender: data.gender || "",
          bloodGroup: data.bloodGroup || "",

          registerNumber:
            data.registerNumber || "",

          department:
            data.department || "",


          year:
            data.year || "",

          semester:
            data.semester || "",

          admissionDate:
            data.admissionDate || "",

          percentage:
            data.percentage || "",

          status:
            data.status || "Active",

          fatherName:
            data.fatherName || "",

          occupation:
            data.occupation || "",

          address:
            data.address || "",

          city:
            data.city || "",

          state:
            data.state || "",

          pincode:
            data.pincode || "",

          photo:
            data.photo || ""

        });

        setLoading(false);

      })
      .catch(error => {

        console.error(error);

        alert("Unable to load student");

        setLoading(false);

      });

  }, [id]);


  // Handle inputs
  const handleChange = (e) => {

    setStudent({

      ...student,

      [e.target.name]:
        e.target.value

    });

  };


  // Handle photo
  const handlePhotoChange = (e) => {

    const file =
      e.target.files[0];

    if (!file) {
      return;
    }


    // Check image type
    if (!file.type.startsWith("image/")) {

      alert(
        "Please select an image file"
      );

      return;
    }


    // Check image size
    if (file.size > 2 * 1024 * 1024) {

      alert(
        "Image size must be less than 2MB"
      );

      return;
    }


    const reader =
      new FileReader();


    reader.onloadend = () => {

      setStudent({

        ...student,

        photo:
          reader.result

      });

    };


    reader.readAsDataURL(file);

  };


  // Update
  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      await updateStudent(
        id,
        student
      );


      alert(
        "Student updated successfully!"
      );


      navigate("/students");

    } catch (error) {

      console.error(error);

      alert(
        "Failed to update student"
      );

    }

  };


  if (loading) {

    return (

      <div className="loading">
        Loading student...
      </div>

    );

  }


  return (

    <div className="container">

      <h1>
        Edit Student
      </h1>


      <form
        className="student-form large-form"
        onSubmit={handleSubmit}
      >


        {/* PERSONAL */}

        <h2>
          Personal Details
        </h2>
         <label>Student ID</label>
                
          <input
            type="number"
            name="id"
            value={student.id || ""}
            onChange={handleChange}
            required
          />

        <label>
          Student Name
        </label>

        <input
          name="name"
          value={student.name}
          onChange={handleChange}
          required
        />


        <label>
          Email
        </label>

        <input
          name="email"
          type="email"
          value={student.email}
          onChange={handleChange}
          required
        />


        <label>
          Phone
        </label>

        <input
          name="phone"
          value={student.phone}
          onChange={handleChange}
        />


        <label>
          Date of Birth
        </label>

        <input
          name="dateOfBirth"
          type="date"
          value={student.dateOfBirth}
          onChange={handleChange}
        />


        <label>
          Gender
        </label>

        <select
          name="gender"
          value={student.gender}
          onChange={handleChange}
        >

          <option value="">
            Select Gender
          </option>

          <option value="Male">
            Male
          </option>

          <option value="Female">
            Female
          </option>

        </select>


        <label>
          Blood Group
        </label>

        <select
          name="bloodGroup"
          value={student.bloodGroup}
          onChange={handleChange}
        >

          <option value="">
            Select Blood Group
          </option>

          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>

        </select>


        {/* ACADEMIC */}

        <h2>
          Academic Details
        </h2>


        <label>
          Register Number
        </label>

        <input
          name="registerNumber"
          value={student.registerNumber}
          onChange={handleChange}
        />


        <label>
          Department
        </label>

        <select
          name="department"
          value={student.department}
          onChange={handleChange}
        >

          <option value="">
            Select Department
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


        <label>
          Year
        </label>

        <select
          name="year"
          value={student.year}
          onChange={handleChange}
        >

          <option value="">
            Select Year
          </option>

          <option value="1">
            First Year
          </option>

          <option value="2">
            Second Year
          </option>

          <option value="3">
            Third Year
          </option>

          <option value="4">
            Fourth Year
          </option>

        </select>


        <label>
          Semester
        </label>

        <select
          name="semester"
          value={student.semester}
          onChange={handleChange}
        >

          <option value="">
            Select Semester
          </option>

          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>

        </select>

        <label>
          Admission Date
        </label>

        <input
          name="admissionDate"
          type="date"
          value={student.admissionDate}
          onChange={handleChange}
        />


        <label>
          Percentage
        </label>

        <input
          name="percentage"
          type="number"
          step="0.01"
          value={student.percentage}
          onChange={handleChange}
        />


        <label>
          Status
        </label>

        <select
          name="status"
          value={student.status}
          onChange={handleChange}
        >

          <option value="Active">
            Active
          </option>

          <option value="Inactive">
            Inactive
          </option>

        </select>


        {/* PARENT */}

        <h2>
          Parent Details
        </h2>


        <label>
          Father Name
        </label>

        <input
          name="fatherName"
          value={student.fatherName}
          onChange={handleChange}
        />
        <label>
          Occupation
        </label>

        <input
          name="occupation"
          value={student.occupation}
          onChange={handleChange}
        />


        {/* ADDRESS */}

        <h2>
          Address
        </h2>


        <label>
          Address
        </label>

        <textarea
          name="address"
          value={student.address}
          onChange={handleChange}
          rows="4"
        />


        <label>
          City
        </label>

        <input
          name="city"
          value={student.city}
          onChange={handleChange}
        />


        <label>
          State
        </label>

        <input
          name="state"
          value={student.state}
          onChange={handleChange}
        />


        <label>
          Pincode
        </label>

        <input
          name="pincode"
          value={student.pincode}
          onChange={handleChange}
        />


        {/* PHOTO */}

        <h2>
          Profile Photo
        </h2>


        <label>
          Current / New Photo
        </label>


        {student.photo ? (

          <div className="photo-preview">

            <img
              src={student.photo}
              alt={student.name}
              className="edit-photo"
            />

          </div>

        ) : (

          <div className="no-photo-large">
            No Photo
          </div>

        )}


        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
        />


        {/* BUTTONS */}

        <div className="form-buttons">

          <button
            type="submit"
            className="btn-primary"
          >
            Update Student
          </button>

          <Link to="/students" className="secondary-btn">
            Cancel
          </Link>
        </div>

      </form>

    </div>

  );
}

export default EditStudent;