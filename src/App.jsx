
import './App.css'
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DegreeCollege from './Sections/Degree_College';
import ITICollege from './components/ITI_college'
import Home from './Sections/Home';

function App() {

  return (
    <>
    <Router>  
      <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/degree-college" element={<DegreeCollege />} /> */}
      <Route path="/iti-college" element={<ITICollege />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>

      <div>
        
        </div>
    </>
  )
}

export default App
