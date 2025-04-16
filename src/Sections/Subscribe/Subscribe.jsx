import React from "react";
import subscribe1 from "../../assets/subscribe1.png";
import subscribe2 from "../../assets/subscribe2.png";
import subscribe3 from "../../assets/subscribe3.png";
import subscribe4 from "../../assets/subscribe4.png";

const Subscribe = () => {
  return (
    <section className="py-[50px]">
      <div className="max-w-[80rem] h-auto px-12 mx-auto  lg:px-16">
        <div className="w-full relative">
          <img
            src={subscribe4}
            alt="subsribe design"
            className="absolute bottom-0 right-0 translate-1/2 translate-y-20"
          />
          <img
            src={subscribe3}
            alt="subscribe image"
            className="absolute top-0 right-0 translate-x-1/2 -translate-y-5 z-20 h-12 w-12 lg:h-16 lg:w-16 "
          />
          <div className="py-14 overflow-hidden rounded-tl-[100px] rounded-b-2xl  relative w-full flex flex-col  items-center bg-[#DFD7F9] ">
            <div className="absolute left-0 bottom-0 -translate-x-24">
              <img src={subscribe1} alt="design1" />
            </div>
            <div className="absolute right-0 top-0">
              <img src={subscribe2} alt="design2" />
            </div>
            <div className="max-w-[880px] pb-12 px-4  text-lg text-center poppins-text font-semibold md:text-2xl lg:text-3xl text-[#5E6282] lg:leading-14 ">
              Subscribe to get information, latest news and other interesting
              offers about Jadoo
            </div>
            <div className="flex gap-2.5 px-4 ">
              <div className="flex gap-2.5 items-center  bg-white rounded-[10px] w-full lg:w-[420px] pl-3 z-10 lg:pl-8 ">
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>

                <input
                  type="text"
                  className="w-full sub-input"
                  placeholder="Your email"
                />
              </div>
              <button className="bg-[#FF7D68] text-white  py-3 px-3 rounded-[10px] z-10 lg:px-12 lg:py-5 lg:font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
