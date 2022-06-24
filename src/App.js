import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderMain from './Container/HeaderMain';
import FooterMain from './Container/FooterMain';
import Home from './Container/Home'
import Departments from './Container/Departments';
import Doctors from './Container/Doctors';
import Medicine from './Container/Medicine';
import About from './Container/About';
import Contact from './Container/Contact';
import Appointment from './Container/Appointment';
import Login from './Container/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HeaderMain />} >
          <Route exact path='/' element={<FooterMain />} >
            <Route index element={<Home />} />
            <Route exact path='/departments' element={<Departments />} />
            <Route exact path='/doctors' element={<Doctors />} />
            <Route exact path='/medicine' element={<Medicine />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/appointment' element={<Appointment />} />
            <Route exact path='/login' element={<Login />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App