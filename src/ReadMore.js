import React from 'react';
import Course from './Course';
import courses from './courseData';

function ReadMore() {
  return (
    <div>
        {courses.map((course, index) => {
            if(course.courseCode === 'CUTM5678'){
                return <Course key={index} course={course} />;
            }
            else{
                return null;
            }
        })}
    </div>
  );
}

export default ReadMore;