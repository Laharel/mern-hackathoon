import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx'
import CourseCreateForm from './components/CourseCreationForm.jsx'
import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {BrowserRouter as Router, Route} from 'react-router-dom';


export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Route exact path='/signin'>
          <SignIn/>
        </Route>

        <Route exact path='/signup'>
          <SignUp/>
        </Route>

      </Router>

      {/* <CourseCreateForm/> */}
    </div>

    
  );
}