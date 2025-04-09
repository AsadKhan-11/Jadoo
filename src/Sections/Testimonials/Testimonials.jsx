import React from "react";
import Header from "../../Components/Header/Header";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

import image1 from "../../assets/test1.jpg";
import image2 from "../../assets/test2.jpg";
import image3 from "../../assets/test3.jpg";

const testimonials = [
  {
    name: "John Doe",
    text: "This service is fantastic. Highly recommended!",
    img: image1,
  },
  {
    name: "Jane Smith",
    text: "Amazing experience, will definitely use it again!",
    img: image2,
  },
  {
    name: "Ali Khan",
    text: "Exceptional quality and attention to detail.",
    img: image3,
  },
];

const Testimonials = () => {
  return (
    <section className="py-[50px]">
      <div className="max-w-[80rem] h-auto px-12 mx-auto  lg:px-16">
        <div className="flex flex-col relative">
          <Header
            subHeader={"TESTIMONIALS"}
            header={"What people say about Us."}
            position={"text-start"}
          />
          {/* Back Card */}
          <div className="relative">
            <div className="absolute top-11 left-0 right-0 mx-auto z-0 scale-[0.95] opacity-70 bg-white shadow-md rounded-2xl p-6">
              <p className="text-gray-500">back.text</p>
              <p className="text-sm text-gray-400 mt-2">- back.name</p>
            </div>

            {/* Front Card */}
            <div className="relative z-10 bg-white shadow-lg rounded-2xl p-6">
              <p className="text-lg font-semibold">front.text</p>
              <p className="text-sm text-gray-600 mt-2">- front.name</p>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex flex-col items-center mt-6 gap-2">
            <button className="text-blue-500 hover:text-blue-700 text-2xl">
              <FaChevronUp />
            </button>
            <button className="text-blue-500 hover:text-blue-700 text-2xl">
              <FaChevronDown />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
