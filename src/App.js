import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AboutApplication from './Components/AboutApplication';
import BackgroundImage from './Components/BackgroundImage';
import Navbar from './Components/Navbar';
import AddTask from './Components/AddTask';
import Footer from './Components/Footer';
import DisplayTask from './Components/DisplayTask';
import UpdateTask from './Components/UpdateTask';



function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={(
            <>
              <BackgroundImage />
              <AboutApplication />
            </>
          )} />

          <Route path='/AddTask' element={<AddTask />} />
          <Route path='/DisplayTask' element={<DisplayTask />} />
          <Route path='/UpdateTask' element={<UpdateTask />} />

          

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
