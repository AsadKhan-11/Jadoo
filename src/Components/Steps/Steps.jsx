import React from "react";

const Steps = ({ header, desc, icon, color }) => {
  return (
    <div className="flex gap-[21px] items-start w-[395px]">
      <div
        style={{ backgroundColor: `#${color}` }}
        className="rounded-[13px] h-[48px] w-[100px] flex justify-center items-center"
      >
        <img src={icon} alt="Booking steps icon" />
      </div>

      <div className="text-[#5e6282] text-[16px] poppins-text">
        <div className="font-bold ">{header}</div>
        <div className="leading-[124.5%]">{desc}</div>
      </div>
    </div>
  );
};

export default Steps;
