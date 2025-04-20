import React from "react";
import Data from "../../data/FooterData";
import Image1 from "../../assets/Google.png";
import Image2 from "../../assets/Store.png";
const Footer = () => {
  return (
    <section className="py-[50px] lg:pt-[100px]">
      <div className="max-w-[80rem] h-auto px-12 mx-auto w-full lg:px-16">
        <div className="flex flex-col gap-6 flex-wrap md:flex-row md:justify-between md:px-12 ">
          <div className="flex flex-col gap-2">
            <h2 className="text-[44px] poppins-text text-[#181E4B] ">Jadoo.</h2>
            <div className="w-[207px] text-[13px] text-[#5E6282]">
              Book your trip in minute, get full Control for much longer.
            </div>
          </div>

          <div className="flex flex-col gap-10 md:flex-row md:justify-between ">
            {Data.map((data, index) => (
              <ul key={index} className="flex flex-col gap-2 ">
                <li className="poppins-text text-[21px] font-bold pb-2">
                  {data.headers}
                </li>
                {data.links.map((links, i) => (
                  <li key={i} className="text-[#5E6282]">
                    {links}
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z"></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
              </svg>
            </div>
            <div className="text-[20px] poppins-text text-[#5E6282]">
              Discover Our App
            </div>
            <div className="flex gap-3.5">
              <div>
                <img src={Image1} alt="Google Play" />
              </div>
              <div>
                <img src={Image2} alt="Apple Store" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
