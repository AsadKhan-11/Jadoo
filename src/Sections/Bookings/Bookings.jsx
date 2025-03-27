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
        <div className="row flex flex-wrap max-w-full items-start">
          <div className="col w-[50%] relative">
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
                  <ion-icon name="leaf" className="step-icon "></ion-icon>
                </div>
                <div className="step-icon-container">
                  <ion-icon name="map" className="step-icon"></ion-icon>
                </div>
                <div className="step-icon-container">
                  <ion-icon name="navigate" className="step-icon"></ion-icon>
                </div>
              </div>

              <div>
                <div className="text-[#84829A]">
                  <ion-icon name="business"></ion-icon>

                  <div>24 people going</div>
                </div>
                <ion-icon name="heart-outline"></ion-icon>
              </div>
            </div>
            <div className="bg-[url(/stepsShadow.png) z-[-1] absolute top-[0%] left-[0%] h-[350px] w-[350px] bg-cover opacity-100 "></div>

            <div
              className="flex max-w-[260px] w-full py-[18px] px-5 bg-white selling-card-shadow rounded-[18px] absolute bottom-[10%] left-[58%] z-50  overflow-hidden gap-2.5
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
