import React from "react";
import Jadoo from "../../assets/Jadoo.svg";
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-auto z-10 ml-auto mr-auto">
      <div className=" bg-white w-full pt-5 pb-5 shadow-[0px_30px_80px_1px_rgba(0,0,0,0.25)] ">
        <div className="w-7xl h-auto pl-8 pr-8 ml-auto mr-auto flex flex-row justify-start items-center">
          <img src={Jadoo} alt="Jadoo image" className="max-w-16 max-h-8" />

          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="   h-full w-80 fixed left-0 top-0 p-0 overflow-auto transition-all bg-white z-10 -translate-x-[150%]">
            <ul className="flex flex-col items-start justify-start gap-6 p-6">
              <li>
                <a href="">Destinations</a>
              </li>
              <li>
                <a href="">Hotels</a>
              </li>
              <li>
                <a href="">Flights</a>
              </li>
              <li>
                <a href="">Bookings</a>
              </li>
            </ul>
          </div>

          <div>
            <a href="">Login</a>
            <a href="">Signup</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
