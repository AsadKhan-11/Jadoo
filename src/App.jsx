import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Sections/Hero/Hero";
import Services from "./Sections/Services/Services";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}

export default App;
