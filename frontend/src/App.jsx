import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [students, setStudents] = useState([]);

  useEffect(() => {

    fetch("https://experiment-15-backend.onrender.com/students")
      .then(response => response.json())
      .then(data => {
        setStudents(data);
      })
      .catch(error => {
        console.log("Error:", error);
      });

  }, []);

  return (
    <div className="container">

      <h1>Student Details</h1>

      {students.map(student => (

        <div className="card" key={student.id}>

          <h2>{student.name}</h2>

          <p>ID: {student.id}</p>

          <p>Course: {student.course}</p>

        </div>

      ))}

    </div>
  );
}

export default App;