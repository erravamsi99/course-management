// src/redux/actions.js
import axios from 'axios';

export const fetchCourses = () => async dispatch => {
  const response = await axios.get('http://localhost:3001/courses');
  dispatch({ type: 'FETCH_COURSES', payload: response.data });
};



