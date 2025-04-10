import React from "react";
import Header from "../../Components/Header/Header";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

import image1 from "../../assets/test1.jpg";
import image2 from "../../assets/test2.jpg";
import image3 from "../../assets/test3.jpg";

const testimonials = [
  {
    name: "John Doe",
    text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    img: image1,
  },
  {
    name: "Jane Smith",
    text: "On the Windows talking painted pasture yet its express parties use.!",
    img: image2,
  },
  {
    name: "Ali Khan",
    text: "On the Windows talking painted pasture yet its express parties use.!",
    img: image3,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const front = testimonials[current];
  const back = testimonials[(current + 1) % testimonials.length];

  return (
    <section className="py-[50px]">
      <div className="max-w-[80rem] h-auto px-12 mx-auto  lg:px-16">
        <div className="flex flex-col relative ">
          <Header
            subHeader={"TESTIMONIALS"}
            header={"What people say about Us."}
            position={"text-start"}
          />
          <div className="flex items-center justify-center gap-5 mt-10 ">
            <div className="mr-15 text-[#5e6282] text-[16px] font-normal">
              {/* Back Card */}
              <div className="relative rounded-[20px]">
                <div className="absolute bottom-0 left-0 translate-y-1/2 translate-x-1/6  mx-auto z-0 scale-[0.95] opacity-70 bg-white shadow-md rounded-2xl p-6">
                  <p className="text-gray-500">{back.text}</p>
                  <p className="text-[18px] text-gray-400 mt-2 font-semibold">
                    {back.name}
                  </p>
                </div>

                {/* Front Card */}
                <div className="relative z-10 bg-white shadow-lg rounded-2xl p-9 max-w-[402px]  ">
                  <img
                    src={front.img}
                    alt="testimonial image"
                    className="rounded-full h-16 w-16 object-cover absolute top-0 left-0 -translate-1/2"
                  />
                  <p className=" ">{front.text}</p>
                  <p className="text-[18px] text-gray-600 mt-2 font-semibold">
                    {front.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Arrows */}
            <div className="flex flex-col items-center mt-6 gap-2">
              <button
                className="text-blue-500 hover:text-blue-700 text-2xl "
                onClick={prev}
              >
                <FaChevronUp />
              </button>
              <button
                className="text-blue-500 hover:text-blue-700 text-2xl"
                onClick={next}
              >
                <FaChevronDown />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
