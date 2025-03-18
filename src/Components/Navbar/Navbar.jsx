import React, { useEffect, useState } from "react";
import Jadoo from "../../assets/Jadoo.svg";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setMenu(false);
  }, []);

  return (
    <nav className="fixed top-0 w-full h-auto z-10 mx-auto ">
      <div className=" bg-white w-full pt-5 pb-5 shadow-[0px_30px_80px_1px_rgba(0,0,0,0.25)] ">
        <div className="w-full  h-auto px-8 mx-auto flex flex-row justify-start items-center">
          <img src={Jadoo} alt="Jadoo image" className="max-w-16 max-h-8" />
          {menu && (
            <div
              className="h-full w-full fixed top-0 left-0 opacity-35 bg-black z-10"
              onClick={() => setMenu(false)} // Clicking overlay closes menu
            ></div>
          )}

          <div
            className="relative block cursor-pointer p-1.5 mr-6 rounded-s-md -order-1"
            onClick={() => setMenu((prev) => !prev)}
          >
            <div className="h-5 w-5 relative">
              <span className="h-1 w-full absolute top-0 bg-black rounded-md"></span>
              <span className="h-1 w-4/5 absolute top-2 bg-black rounded-md"></span>
              <span className="h-1 w-full absolute top-4 bg-black rounded-md"></span>
            </div>
          </div>

          <div
            className={`h-full w-80 fixed left-0 top-0 p-0 overflow-auto transition duration-500 bg-white z-10 ${
              menu ? "translate-x-0" : "-translate-x-[150%]"
            }`}
          >
            <div className="flex justify-between items-center p-6  border-b-1  border-[rgba(0,0,0,0.2)] ">
              {" "}
              <img src={Jadoo} alt="Jadoo image" className="max-w-16 max-h-8" />
              <button
                className="h-5 w-5 cursor-pointer font-bold"
                onClick={() => setMenu(false)}
              >
                X
              </button>
            </div>

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

          <div className="ml-auto flex gap-7 items-center">
            <a
              href=""
              className="hover:text-[#DF6951] transition-all duration-500"
            >
              Login
            </a>
            <a
              href=""
              className="border rounded-md py-[9px] px-[21px] hover:bg-black hover:text-white transition-all duration-500"
            >
              Signup
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
