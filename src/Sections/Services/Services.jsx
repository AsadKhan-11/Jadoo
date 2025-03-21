import React from "react";
import image1 from "../../assets/weather.svg";
import image2 from "../../assets/flights.svg";
import image3 from "../../assets/mic.svg";
import image4 from "../../assets/bolt.svg";

const Services = () => {
  return (
    <section>
      <div className="max-w-[80rem] h-auto px-12 mx-auto  lg:px-16">
        <div className="text-center">
          <div className="text-[#5E6282] text-[14px] poppins-text mb-2.5 ">
            CATEGORY
          </div>
          <h2 className="text-[#14183E] text-3xl font-semibold volkhov-text">
            WE OFFER BEST SERVICES
          </h2>
        </div>

        <div>
          <div className="flex flex-col gap-10 flex-wrap">
            <div>
              <div className="service-cards">
                <img
                  src={image1}
                  alt="weather forecaster"
                  className="service-images"
                />
                <div className="service-card-header"> Calculated Weather </div>
                <div className="service-card-text">
                  Built Wicket longer admire do barton vanity itself do in it.
                </div>
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
            <div>
              <div className="service-cards">
                <img src={image2} alt="flights" className="service-images" />
                <div className="service-card-header"> Best Flights </div>
                <div className="service-card-text">
                  Engrossed listening. Park gate sell they west hard for the.
                </div>
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
            <div>
              <div className="service-cards">
                <img src={image3} alt="microphone" className="service-images" />
                <div className="service-card-header"> Local Events </div>
                <div className="service-card-text">
                  Barton vanity itself do in it. Preferd to men it engrossed
                  listening.
                </div>
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
            <div>
              <div className="service-cards">
                <img src={image4} alt="bolt image" className="service-images" />
                <div className="service-card-header"> Customization </div>
                <div className="service-card-text">
                  We deliver outsourced aviation services for military customers
                </div>
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
