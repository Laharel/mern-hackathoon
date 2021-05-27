import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx'
import CourseCreateForm from './components/CourseCreationForm.jsx'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CourseCreateForm/>
    </div>
  );
}

export default App;
