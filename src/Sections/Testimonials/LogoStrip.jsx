import React from "react";
import company1 from "../../assets/company1.png";
import company2 from "../../assets/company2.png";
import company3 from "../../assets/company3.png";
import company4 from "../../assets/company4.png";
import company5 from "../../assets/company5.png";
const LogoStrip = () => {
  return (
    <div className="w-full overflow-auto mt-15 flex justify-start">
      <div className="flex gap-4 w-max items-center lg:gap-18 ">
        <img
          src={company1}
          alt="Company logo"
          className="flex-none filter grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src={company2}
          alt="Company logo"
          className="flex-none filter grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src={company3}
          alt="Company logo"
          className="flex-none filter grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src={company4}
          alt="Company logo"
          className="flex-none filter grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src={company5}
          alt="Company logo"
          className="flex-none filter grayscale hover:grayscale-0 transition duration-300"
        />
      </div>
    </div>
  );
};

export default LogoStrip;
