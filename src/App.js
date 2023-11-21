import './App.css';
import CourseList from './CourseList';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Course from './Course';

function App() {
  return (
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/" exact element={<CourseList />} />
    //       <Route path="/course" element={<Course />} />
    //     </Routes>
    //   </div>
    // </Router>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element = {<CourseList></CourseList>}></Route>
    //     <Route path='/course' element = {<Course></Course>}></Route>

    //   </Routes>
    // </BrowserRouter>

    <div>
      <CourseList></CourseList>
    </div>
  );
}

export default App;