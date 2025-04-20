import React from "react";
import Header from "../../Components/Header/Header";
import Steps from "../../Components/Steps/Steps";
import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.png";
import greece from "../../assets/greece.jpg";
import Rome from "../../assets/Rome.jpg";

const Bookings = () => {
  return (
    <section className="py-[50px] lg:pb-[100px]">
      <div className="max-w-[80rem] h-auto px-12 mx-auto w-full lg:px-16">
        <div className="flex-col flex flex-wrap max-w-full items-start md:flex-row">
          <div className="flex flex-col w-full lg:w-1/2 relative">
            <Header
              subHeader={"Easy and Fast"}
              header={"Book Your next trip in 3 easy steps"}
              position={"text-start"}
            />
            <div className="pt-[30px] flex flex-col gap-12">
              <Steps
                header={"Choose Destination"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
                }
                color={"F0BB1F"}
                icon={step1}
              />
              <Steps
                header={"Make Payment"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
                }
                color={"F15A2B"}
                icon={step2}
              />
              <Steps
                header={"Reach Airport On Selected Date"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
                }
                color={"006380"}
                icon={step3}
              />
            </div>
          </div>
          <div className="col max-w-[485px] my-10 mx-auto relative ">
            <div className="card selling-card-shadow poppins-text text-[#84829A] text-[16px] max-w-[370px] rounded-3xl py-[20px] px-[25px] z-10 relative ">
              <div className=" max-h-[161px] overflow-hidden rounded-3xl mb-7">
                <img
                  src={greece}
                  alt="Photo of greece"
                  className=" object-contain w-full h-full"
                />
              </div>
              <div className="text-lg text-[#080809] mb-3">Trip To Greece</div>
              <div className="flex gap-3 mb-5">
                <div className="">14-19 June|</div>
                <div>by Robbin joseph</div>
              </div>
              <div className="mb-7 flex gap-[18px]">
                <div className="step-icon-container ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 step-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
                    />
                  </svg>
                </div>
                <div className="step-icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 step-icon "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                    />
                  </svg>
                </div>
                <div className="step-icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 step-icon rotate-320"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="text-[#84829A] flex gap-3.5 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                    />
                  </svg>

                  <div>24 people going</div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-[#4152CA]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-[url(/stepsShadow.png) z-[-1] absolute top-[0%] left-[0%] h-[350px] w-[350px] bg-cover opacity-100 "></div>

            <div
              className="max-w-[260px] hidden w-full py-[18px] px-5 bg-white selling-card-shadow rounded-[18px] absolute bottom-[11%] left-[58%] z-20  overflow-hidden gap-2.5 md:flex 
            poppins-text "
            >
              <div className="h-[50px] w-[50px] rounded-full overflow-hidden">
                <img
                  src={Rome}
                  alt="Rome image"
                  className="object-cover h-full w-full"
                />
              </div>

              <div>
                <div className="text-[#84829A] text-[14px] mb-1.5">Ongoing</div>
                <div className="text-[#080809] text-lg mb-3">Trip to rome</div>
                <div className="text-[#080809] text-[14px] mb-3">
                  {" "}
                  <span className="text-[#8A79DF]">40%</span> completed
                </div>
                <div className="bg-[#F5F5F5] w-[156px] h-[5px] rounded-[30px] ">
                  <div className="w-[40%] bg-[#8A79DF] h-full  rounded-[30px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookings;
