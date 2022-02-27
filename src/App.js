import './App.css';
import {Routes, Route} from "react-router-dom";
import React from "react";
import {
  Home, About, Events, Contact, Whoops404, Services, CompanyHistory, OurLocation
} from "./pages"

//https://api.github.com/users/valeriesutera


//we create a component by creating a function that returns jsx (this ui element we can add to the DOM)
function App() {

  return<div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}>
      <Route path="services" element={<Services />} />
      <Route path="history" element={<CompanyHistory />} />
      <Route path="location" element={<OurLocation />} />
      </Route>
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Whoops404 />} />
    </Routes>
  </div>

}

export default App; //this means it has to be imported
