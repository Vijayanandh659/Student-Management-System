import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar">

      <h2>
        Sri Ramakrishna College of Engineering(Autonomous)
      </h2>

      <div className="nav-links">

        <Link to="/">
          Dashboard
        </Link>

        <Link to="/students">
          Students
        </Link>

        <Link to="/add-student">
          Add Student
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;