import React from "react";
import image1 from "../../assets/Traveller.png";
import image2 from "../../assets/Plane1.png";
import image3 from "../../assets/Plane2.png";

const Hero = () => {
  return (
    <div
      className={`relative pt-[150px] pb-[50px] bg-[url(/Decore.png),url(/Ellipse.png)]   bg-[100%_0%] bg-[auto] 
 bg-no-repeat `}
    >
      <div className="max-w-[80rem] h-auto px-8 mx-auto flex flex-row justify-start items-center lg:px-16">
        <div className="">
          <div className="flex flex-col justify-center items-center gap-[24px] ">
            <div className="order-10">
              <div className=" flex flex-col gap-y-7">
                <div className="text-[#DF6951] font-bold text-xl">
                  Best Destinations around the world
                </div>

                <h1 className="text-[84px] leading-[89px] font-bold text-[#181E4B]">
                  Travel, enjoy and live a new and full life
                </h1>
                <div className="text-[#5E6282] text-lg leading-8 max-w-[477px]">
                  <p className="">
                    Built Wicket longer admire do barton vanity itself do in it.
                    Preferred to sportsmen it engrossed listening. Park gate
                    sell they west hard for the.
                  </p>
                </div>
                <div>
                  <a href="">Find out more</a>
                  <a href="">Play demo</a>
                </div>
              </div>
            </div>
            <div className="order-1">
              <div className="relative overflow-hidden">
                <img
                  src={image1}
                  alt="Traveller Image"
                  className="relative z-30"
                />
                <img
                  src={image2}
                  alt="Plane Image"
                  className="absolute top-0 left-0 h-full w-full z-0 animate-[moveX_5s_ease-in-out_infinite_alternate] "
                />
                <img
                  src={image3}
                  alt="Plane Image"
                  className="absolute top-0 left-0 h-full w-full z-0 animate-[moveX_5s_ease-in-out_infinite_alternate] delay-100"
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
