import React from "react";

import "./App.css";
import AboutPage from "./components/AboutPage/AboutPage";
import MainPage from "./components/MainPage/MainPage";
import NavbarMain from "./components/NavbarMain/NavbarMain";
import SkillsPage from "./components/SkillsPage/SkillsPage";

function App() {
  return (
    <>
      <NavbarMain></NavbarMain>
      <MainPage></MainPage>
      <AboutPage></AboutPage>
      <SkillsPage></SkillsPage>
    </>
  );
}

export default App;
