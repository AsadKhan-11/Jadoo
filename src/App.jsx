import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Sections/Hero/Hero";
import Services from "./Sections/Services/Services";
import Selling from "./Sections/Selling/Selling";
import Bookings from "./Sections/Bookings/Bookings";
import Testimonials from "./Sections/Testimonials/Testimonials";
import Subscribe from "./Sections/Subscribe/Subscribe";
import Footer from "./Sections/Footer/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
      <Selling />
      <Bookings />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
