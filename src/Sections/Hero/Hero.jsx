import React from "react";
import image1 from "../../assets/Traveller.png";
import image2 from "../../assets/Plane1.png";
import image3 from "../../assets/Plane2.png";

const Hero = () => {
  return (
    <div
      className={`relative pt-[150px] pb-[50px] bg-[url(/Decore.png),url(/Ellipse.png)]   bg-[100%_0%] bg-[auto] 
 bg-no-repeat lg:pb-[97px] `}
    >
      <div className="max-w-[80rem] h-auto px-8 mx-auto flex flex-row justify-start items-center lg:px-16">
        <div className="">
          <div className="flex flex-col justify-center items-center gap-[24px] lg:flex-row">
            <div className="order-10 lg:order-1 lg:w-[50%]">
              <div className=" flex flex-col gap-y-7">
                <div className="text-[#DF6951] font-bold text-lg lg:text-xl poppins-text">
                  Best Destinations around the world
                </div>

                <h1 className="text-[35px] leading-[38px] font-bold text-[#181E4B] volkhov-text lg:text-[84px] lg:leading-[89px] lg:tracking-[-4%]">
                  Travel,{" "}
                  <span className="bg-[url(/text-decore.svg)] bg-[10%_80%] bg-[length:150%] bg-no-repeat">
                    enjoy
                  </span>{" "}
                  and live a new and full life
                </h1>
                <div className="text-[#5E6282] text-[16px] leading-8 max-w-[477px] poppins-text">
                  <p className="">
                    Built Wicket longer admire do barton vanity itself do in it.
                    Preferred to sportsmen it engrossed listening. Park gate
                    sell they west hard for the.
                  </p>
                </div>
                <div className="flex gap-4 items-center justify-start lg:gap-11">
                  <a
                    href=""
                    className="w-[170px] bg-[#F1A501] text-[14px] text-white rounded-[10px] py-[18px] px-[26px] flex justify-center items-center font-medium shadow-[0px_20px_35px_0px_rgba(241,165,1,0.15)]
                    lg:text-lg"
                  >
                    Find out more
                  </a>
                  <a
                    href=""
                    className="text-[14px] font-medium text-[#686D77] poppins-text lg:text-[17px]"
                  >
                    <span
                      className="h-10 w-10 bg-[#DF6951] text-white font-medium rounded-[50%] inline-flex justify-center items-center mr-[12px] 
                    lg:w-[52px] lg:h-[52px] lg:mr-[21px]"
                    >
                      <ion-icon name="play-sharp"></ion-icon>
                    </span>
                    Play demo
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-10 ">
              <div className="relative overflow-hidden ">
                <img
                  src={image1}
                  alt="Traveller Image"
                  className="relative z-30 h-full w-full "
                />
                <img
                  src={image2}
                  alt="Plane Image"
                  className="absolute top-0 left-0 h-full w-full z-0 animate-moveX"
                />
                <img
                  src={image3}
                  alt="Plane Image"
                  className="absolute top-0 left-0 h-full w-full z-0 animate-moveX delay "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
