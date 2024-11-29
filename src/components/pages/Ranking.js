import React from "react";
import { students } from "../data/studentsDb";
import Footer from "../Footer";

function Ranking() {
  // Sort students by GPA in descending order
  const sortedStudents = [...students].sort((a, b) => parseFloat(b.gpa || 0) - parseFloat(a.gpa || 0));

  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", padding: "10px", marginTop:"-60px"}}>
      <div style={{ width: "60%", textAlign: "center" }}>
        <h1>Student Rankings</h1>
        <table style={{ width: "100%", borderCollapse: "collapse", margin: "0 auto" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>Position</th>
              <th style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>Registration Number</th>
              <th style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>First Name</th>
              <th style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>Last Name</th>
              <th style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>GPA</th>
            </tr>
          </thead>
          <tbody>
            {sortedStudents.map((student, index) => (
              <tr key={student.studentId}>
                <td style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>{index + 1}</td>
                <td style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>{student.studentId}</td>
                <td style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>{student.firstName}</td>
                <td style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>{student.lastName}</td>
                <td style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>{student.gpa || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Ranking;
