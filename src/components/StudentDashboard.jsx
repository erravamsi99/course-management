// src/components/StudentDashboard.js
import React, { useState } from 'react';
import './StudentDashboard.css';
const StudentDashboard = ({ enrolledCourses }) => {
  const [courses, setCourses] = useState(enrolledCourses);

  const markAsCompleted = (id) => {
    setCourses(courses.map(course =>
      course.id === id ? { ...course, completed: true } : course
    ));
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <img src={course.thumbnail} alt={course.name} />
            <h3>{course.name}</h3>
            <p>Instructor: {course.instructor}</p>
            <p>Due Date: {course.dueDate}</p>
            <div>
              <label>Progress: </label>
              <progress value={course.progress} max="100" />
            </div>
            <button onClick={() => markAsCompleted(course.id)}>
              {course.completed ? 'Completed' : 'Mark as Completed'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
