// CourseList.js
import React from 'react';
import CourseCard from './CourseCard';
import './CourseList.css';


const CourseList = () => {

  const courses = [
    { courseName: 'Data Structures', teacherName: 'Amit Kumar', subjectCode: 'CUTM1234' },
{ courseName: 'Database Management', teacherName: 'Priya Sharma', subjectCode: 'CUTM5678' },
{ courseName: 'Computer Networks', teacherName: 'Rajesh Singh', subjectCode: 'CUTM9012' },
{ courseName: 'Software Engineering', teacherName: 'Neha Gupta', subjectCode: 'CUTM3456' },
{ courseName: 'Algorithms Design', teacherName: 'Anand Verma', subjectCode: 'CUTM7890' },
{ courseName: 'Operating Systems', teacherName: 'Sarika Patel', subjectCode: 'CUTM2345' },
{ courseName: 'Artificial Intelligence', teacherName: 'Rahul Joshi', subjectCode: 'CUTM6789' },
{ courseName: 'Web Development', teacherName: 'Kavita Shah', subjectCode: 'CUTM0123' },
{ courseName: 'Computer Architecture', teacherName: 'Vikram Raj', subjectCode: 'CUTM4567' },
{ courseName: 'Cybersecurity', teacherName: 'Suman Gupta', subjectCode: 'CUTM8901' },
{ courseName: 'Machine Learning', teacherName: 'Deepak Kumar', subjectCode: 'CUTM2345' },
{ courseName: 'Network Security', teacherName: 'Asha Sharma', subjectCode: 'CUTM6789' },
{ courseName: 'Cloud Computing', teacherName: 'Rajat Verma', subjectCode: 'CUTM0123' },
{ courseName: 'Mobile App Development', teacherName: 'Nisha Singh', subjectCode: 'CUTM4567' },
{ courseName: 'Computer Graphics', teacherName: 'Aditya Tiwari', subjectCode: 'CUTM8901' },
{ courseName: 'Embedded Systems', teacherName: 'Preeti Kapoor', subjectCode: 'CUTM2345' },
{ courseName: 'Data Science', teacherName: 'Sanjay Patel', subjectCode: 'CUTM6789' },
{ courseName: 'Internet of Things', teacherName: 'Anjali Gupta', subjectCode: 'CUTM0123' },
{ courseName: 'Computer Vision', teacherName: 'Rohit Kumar', subjectCode: 'CUTM4567' },
{ courseName: 'Robotics Engineering', teacherName: 'Meera Yadav', subjectCode: 'CUTM8901' },
{ courseName: 'Distributed Systems', teacherName: 'Rahul Singh', subjectCode: 'CUTM2341' },
{ courseName: 'Natural Language Processing', teacherName: 'Sneha Verma', subjectCode: 'CUTM5678' },
{ courseName: 'Human-Computer Interaction', teacherName: 'Vivek Sharma', subjectCode: 'CUTM9012' },
{ courseName: 'Big Data Analytics', teacherName: 'Pooja Patel', subjectCode: 'CUTM3456' },
{ courseName: 'Mobile Computing', teacherName: 'Ravi Kumar', subjectCode: 'CUTM7890' },
{ courseName: 'Computer Ethics', teacherName: 'Aarti Singh', subjectCode: 'CUTM2345' },
{ courseName: 'Software Testing', teacherName: 'Nitin Gupta', subjectCode: 'CUTM6789' },
{ courseName: 'Cyber-Physical Systems', teacherName: 'Shikha Verma', subjectCode: 'CUTM0123' },
{ courseName: 'Information Retrieval', teacherName: 'Arun Raj', subjectCode: 'CUTM4567' },
{ courseName: 'Blockchain Technology', teacherName: 'Divya Sharma', subjectCode: 'CUTM8901' },
    // Add more courses as needed
  ];


  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          {...course}
        />
      ))}
    </div>
  );
};

export default CourseList;
