import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
    <div>
      <div>
        <Navbar />
      </div>
      <div>
      <section id="profile">
      <div class="section__pic-container">
        <img src="./assets/profile-pic.jpg" alt="profile picture" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Aashima Mahajan</h1>
        <p class="section__text__p2">Frontend Developer</p>
        <div class="btn-container">
          {/* <button
            class="btn btn-color-2"
            onClick="window.open('./assets/resume-example.pdf')"
          >
            Download CV
          </button> */}
          <button class="btn btn-color-1" onclick="location.href='./#contact'">
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <Link to="https://www.linkedin.com/in/aashima-mahajan-1aa06a248/">
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            class="icon"
            onclick="location.href='https://linkedin.com/'"
          />
          </Link>
          <Link to="https://github.com/Aashima-123">
          <img
            src="./assets/github.png"
            alt="My Github profile"
            class="icon"
            // onClick={()=>{location.href='https://github.com/Aashima-123'}}
          /></Link>
        </div>
      </div>
    </section>
      </div>
      <Routes>
    <Route exact path="/AboutUs" element={<AboutUs/>} />
    <Route exact path="/Experience" element={<Experience />} />
    <Route exact path="/Projects" element={<Projects />} />
    <Route exact path="/Contact" element={<Contact />} />
    </Routes>
      <div>
        <Footer />
      </div>
    </div>
    </Router>
  );
}

export default App;
