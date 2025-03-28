import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Sections/Hero/Hero";
import Services from "./Sections/Services/Services";
import Selling from "./Sections/Selling/Selling";
import Bookings from "./Sections/Bookings/Bookings";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
      <Selling />
      <Bookings />
    </div>
  );
}

export default App;
