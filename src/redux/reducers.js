// src/redux/reducers.js
const coursesReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_COURSES':
        return action.payload;
      default:
        return state;
    }
  };
  
  const rootReducer = combineReducers({
    courses: coursesReducer,
    // other reducers...
  });