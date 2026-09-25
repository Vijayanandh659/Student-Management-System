import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStudents } from "../services/studentService";

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents()
      .then(setStudents)
      .catch((error) => console.error(error));
  }, []);

  const activeStudents = students.filter((student) => student.status === "Active").length;
  const maleStudents = students.filter((student) => student.gender === "Male").length;
  const femaleStudents = students.filter((student) => student.gender === "Female").length;
  const stats = [
    { label: "Total students", value: students.length, icon: "✦", tone: "violet", note: "Enrolled in the college" },
    { label: "Active students", value: activeStudents, icon: "↗", tone: "mint", note: "Currently active" },
    { label: "Male students", value: maleStudents, icon: "◉", tone: "blue", note: "Across all records" },
    { label: "Female students", value: femaleStudents, icon: "◉", tone: "coral", note: "Across all records" },
  ];

  return (
    <main className="container dashboard-page">
      <section className="dashboard-welcome">
        <div className="welcome-copy">
          <span className="eyebrow">STUDENT MANAGEMENT</span>
          <h1>Your campus,<br />at a glance.</h1>
          <p>Keep track of your student community and everything happening across campus.</p>
          <Link className="welcome-action" to="/students">Explore students <span aria-hidden="true">→</span></Link>
        </div>
        <div className="welcome-art" aria-hidden="true">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-spark">✦</div>
          <div className="art-number">SRCE</div>
          <div className="art-caption">LEARN · GROW · LEAD</div>
        </div>
        <div className="welcome-index">01 <span>/ OVERVIEW</span></div>
      </section>

      <section className="dashboard-overview" aria-labelledby="overview-title">
        <div className="overview-heading">
          <div>
            <span className="eyebrow">THE BIG PICTURE</span>
            <h2 id="overview-title">Student overview</h2>
          </div>
          <Link to="/add-student" className="overview-link">＋ Add a student</Link>
        </div>
        <div className="dashboard-cards">
          {stats.map((stat, index) => (
            <article className={`stat-card stat-${stat.tone}`} key={stat.label}>
              <div className="stat-topline"><span className="stat-icon" aria-hidden="true">{stat.icon}</span><span className="stat-index">0{index + 1}</span></div>
              <p className="stat-value">{stat.value}</p>
              <h3>{stat.label}</h3>
              <p className="stat-note">{stat.note}</p>
            </article>
          ))}
        </div>
      </section>
      <footer className="dashboard-footer"><span>SRI RAMAKRISHNA COLLEGE OF ENGINEERING</span><span>BUILDING TOMORROW, TOGETHER</span></footer>
    </main>
  );
}

export default Dashboard;
