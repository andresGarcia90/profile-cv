import React, { createRef, useRef } from "react";

import "./App.css";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import MainPage from "./components/MainPage/MainPage";
import NavbarMain from "./components/NavbarMain/NavbarMain";
import SkillsPage from "./components/SkillsPage/SkillsPage";

function App() {

  const mainRef = useRef();
  const aboutRef = createRef();
  const skillsRef = createRef();
  const contactRef = createRef();


  const handleClickNavbar = event => {
    const key = event.target.text.toLowerCase();
    console.log(key);

    console.log(aboutRef);

    switch (key) {
      // case 'home':
      //   mainRef.current.scrollIntoView();
      //   break;
      case 'about':
        aboutRef.current.scrollIntoView();
        break;
        case 'skills':
          skillsRef.current.scrollIntoView();
        break;
        case 'contact':
          contactRef.current.scrollIntoView();
        break;
        
      default:
        break;
    }
  }

  return (
    <>
      <NavbarMain clickNavbar={handleClickNavbar}></NavbarMain>
      <MainPage innerRef={mainRef}></MainPage>
      <AboutPage ref={aboutRef}></AboutPage>
      <SkillsPage ref={skillsRef}></SkillsPage>
      <ContactPage ref={contactRef}></ContactPage>
    </>
  );
}

export default App;
