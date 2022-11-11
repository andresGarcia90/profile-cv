import React from 'react';

import './App.css';
import AboutPage from './components/AboutPage/AboutPage';
import MainPage from './components/MainPage/MainPage';
import NavbarMain from './components/NavbarMain/NavbarMain';

function App() {
  return (
    <>
    <NavbarMain></NavbarMain>
    <MainPage></MainPage>
    <AboutPage></AboutPage>
    </>
  );
}

export default App;
