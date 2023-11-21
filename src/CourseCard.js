// CourseCard.js
import React from 'react';
import './CourseCard.css';

const CourseCard = ({ courseName, teacherName, subjectCode }) => {

  return (
    <div className="course-card">
      <h1>{courseName}</h1>
      <p>Teacher: {teacherName}</p>
      <p>Subject Code: <b>{subjectCode}</b> </p>
    </div>
  );
};

export default CourseCard;
