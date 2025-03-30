import React from "react";
import rome1 from "../../assets/rome1.jpg";
import rome2 from "../../assets/rome2.jpg";
import rome3 from "../../assets/rome3.jpg";
import sellingData from "../../data/SellingData";
import Header from "../../Components/Header/Header";

const Selling = () => {
  return (
    <section className="py-[50px] lg:pb-[100px]">
      <div className="max-w-[80rem] h-auto px-12 mx-auto lg:px-16">
        <Header
          subHeader={"Top Selling"}
          header={"Top Destinations"}
          position={"text-center"}
        />
        <div className="pt-[60px]">
          <div className="flex gap-[35px] flex-wrap lg:mx-[-35px] lg:gap-0 justify-center  ">
            {sellingData.map((info, index) => (
              <div className="w-full lg:w-[33.333%] lg:px-4 " key={index}>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-5 text-black"
                      >
                        <path
                          fillRule="evenodd"
                          d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
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
