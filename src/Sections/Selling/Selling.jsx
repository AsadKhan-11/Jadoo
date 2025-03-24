import React from "react";
import rome1 from "../../assets/rome1.jpg";
import rome2 from "../../assets/rome2.jpg";
import rome3 from "../../assets/rome3.jpg";
import sellingData from "../../data/SellingData";

const Selling = () => {
  return (
    <section className="py-[50px] lg:pb-[100px]">
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
          <div className="flex gap-[35px] flex-wrap lg:mx-[-35px] lg:gap-0 justify-center  ">
            {sellingData.map((info, index) => (
              <div className="w-full lg:w-[25%] lg:px-4 " key={index}>
                <div className="selling-card-shadow rounded-3xl overflow-hidden hover:translate-y-[-10%] transition-all duration-[1s]">
                  <div className="h-[327px]">
                    <img
                      src={info.image}
                      alt="rome-image"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="px-[20px] pt-[27px] pb-[20px]   poppins-text font-normal text-[#5E6282]">
                    <div className="flex items-center justify-between  mb-[19px]  text-[16px]">
                      <div>{info.place}</div>
                      <div>${info.price}K</div>
                    </div>
                    <div className="flex text-[14px] items-center gap-[14px] ">
                      {" "}
                      <ion-icon
                        name="navigate"
                        className="text-black"
                      ></ion-icon>{" "}
                      {info.time} Days Trip
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Selling;
