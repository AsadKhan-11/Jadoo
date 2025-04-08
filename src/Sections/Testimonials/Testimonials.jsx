import React from "react";
import Header from "../../Components/Header/Header";

const Testimonials = () => {
  return (
    <section className="py-[50px]">
      <div className="max-w-[80rem] h-auto px-12 mx-auto  lg:px-16">
        <Header
          subHeader={"TESTIMONIALS"}
          header={"What people say about Us."}
          position={"text-start"}
        />
      </div>
    </section>
  );
};

export default Testimonials;
