import './App.css'
import React, { useEffect } from 'react';
import Nav from '../components/Nav'
import About from '../components/About'
import Internship from '../components/Internship'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from '../components/Contact';


function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', color: '#f8f9fa' }}>
  <Nav />
  <About />
  <Internship />
  <Education />
  <Skills />
  <Projects/>
  <Contact/>
</div>

  )
}

export default App
