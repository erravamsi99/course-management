// src/components/CourseDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CourseDetails.css';
const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await axios.get(`http://localhost:3001/courses/${courseId}`);
      setCourse(response.data);
    };
    fetchCourse();
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{course.name}</h1>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Enrollment Status: {course.status}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Pre-requisites: {course.preRequisites}</p>
      <div>
        <h2>Syllabus</h2>
        <ul>
          {course.syllabus.map((item, index) => (
            <li key={index}>{item.week}: {item.topic} - {item.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
