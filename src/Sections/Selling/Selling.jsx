import React from "react";
import rome1 from "../../assets/rome1.jpg";
import rome2 from "../../assets/rome2.jpg";
import rome3 from "../../assets/rome3.jpg";

const Selling = () => {
  return (
    <section className="py-[50px]">
      <div className="max-w-[80rem] h-auto px-12 mx-auto lg:px-16">
        <div className="text-center">
          <div className="text-[#5E6282] text-[14px] font-semibold poppins-text mb-2.5 lg:text-lg  ">
            TOP SELLING
          </div>
          <h2 className="text-[#14183E] text-3xl font-bold volkhov-text lg:text-[50px]">
            TOP DESTINATIONS
          </h2>
        </div>

        <div className="pt-[60px]">
          <div className="h-[457px] flex gap-[35px] flex-wrap ">
            <div className="w-full ">
              <div className="selling-card-shadow rounded-3xl overflow-hidden  ">
                <div className="h-[327px]">
                  <img
                    src={rome1}
                    alt="rome-image"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <div className="pl-[20px] pt-[27px] pb-[20px]   poppins-text">
                    <div className="flex items-center justify-between  pb-[22px] pr-[26px] text-[16px]">
                      <div>Rome,Italy</div>
                      <div>$5,42K</div>
                    </div>
                    <div className="text-[14px]">10 Days Trip</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Selling;
