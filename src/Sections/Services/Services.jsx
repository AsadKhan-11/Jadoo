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
          <div>
            <div>
              <div>
                <img src={image1} alt="weather forecaster" />
                <div> Calculated Weather </div>
                <div>
                  Built Wicket longer admire do barton vanity itself do in it.
                </div>
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
            <div>
              <div>
                <img src={image2} alt="flights" />
                <div> Best Flights </div>
                <div>
                  Engrossed listening. Park gate sell they west hard for the.
                </div>
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
            <div>
              <div>
                <img src={image3} alt="microphone" />
                <div> Local Events </div>
                <div>
                  Barton vanity itself do in it. Preferd to men it engrossed
                  listening.
                </div>
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
            <div>
              <div>
                <img src={image4} alt="bolt image" />
                <div> Customization </div>
                <div>
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
