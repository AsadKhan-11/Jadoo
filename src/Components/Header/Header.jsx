import React from "react";

const Header = ({ subHeader, header, position }) => {
  return (
    <div className={`${position} capitalize  `}>
      <div className="text-[#5E6282] text-[14px] font-semibold poppins-text mb-2.5 lg:text-lg  ">
        {subHeader}{" "}
      </div>
      <h2 className="text-[#14183E] text-3xl font-bold volkhov-text lg:text-[50px] lg:pr-15">
        {header}{" "}
      </h2>
    </div>
  );
};

export default Header;
