import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx'
import CourseCreateForm from './components/CourseCreationForm.jsx'
import React from 'react';
import SignIn from './components/SignIn';
import Login from './components/Login'
import SignUp from './components/SignUp';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CourseList from './components/CourseList.jsx'
import CourseDetails from './components/CourseDetails.jsx'
import GetLesson from './components/GetLesson';



export default function App() {
  return (
    <div className="App">
      <Router>

        <Navbar/>
          {/* <SignIn/> */}
        <Route exact path='/signin' component={Login}/>

        <Route exact path='/signup' component={SignUp}/>

        <Route exact path='/' component={CourseList}/>
        <Route path='/courses/:courseId' component={CourseDetails} />
        <Route exact path='/lessons/:lessonId' component={GetLesson}/>





      </Router>

      {/* <CourseCreateForm/> */}
    </div>

    
  );
}