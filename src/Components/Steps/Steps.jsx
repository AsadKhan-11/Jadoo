import React from "react";

const Steps = ({ header, desc, icon, color }) => {
  return (
    <div className="flex gap-[21px] items-center  ">
      <div
        style={{ backgroundColor: `#${color}` }}
        className="rounded-[13px] h-[48px] w-[48px] flex justify-center items-center flex-none"
      >
        <img src={icon} alt="Booking steps icon" />
      </div>

      <div className="text-[#5e6282] text-[16px] poppins-text ">
        <div className="font-bold ">{header}</div>
        <div className="leading-[124.5%] font-normal max-w-[327px]">{desc}</div>
      </div>
    </div>
  );
};

export default Steps;
