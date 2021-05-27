import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx'
import CourseCreateForm from './components/CourseCreationForm.jsx'
import React from 'react';
import SignIn from './components/SignIn';

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <SignIn/>

      <CourseCreateForm/>
    </div>

    
  );
}