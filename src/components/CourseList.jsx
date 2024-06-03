// src/components/CourseList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CourseList.css';
const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get('http://localhost:3001/courses');
      setCourses(response.data);
    };
    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search courses"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredCourses.map(course => (
          <li key={course.id}>
            <h3>{course.name}</h3>
            <p>Instructor: {course.instructor}</p>
            <a href={`/course/${course.id}`}>View Details</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;



