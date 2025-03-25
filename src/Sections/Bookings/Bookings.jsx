import React from "react";
import Header from "../../Components/Header/Header";
import Steps from "../../Components/Steps/Steps";
import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.png";

const Bookings = () => {
  return (
    <section className="py-[50px] lg:pb-[100px]">
      <div className="max-w-[80rem] h-auto px-12 mx-auto w-full lg:px-16">
        <Header
          subHeader={"Easy and Fast"}
          header={"Book Your next trip in 3 easy steps"}
          position={"text-start"}
        />
        <div className="pt-[30px] flex flex-col gap-12">
          <Steps
            header={"Choose Destination"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cumque iusto dolor impedit!"
            }
            color={"F0BB1F"}
            icon={step1}
          />
          <Steps
            header={"Make Payment"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cumque iusto dolor impedit!"
            }
            color={"F15A2B"}
            icon={step2}
          />
          <Steps
            header={"Reach Airport On Selected Date"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cumque iusto dolor impedit!"
            }
            color={"006380"}
            icon={step3}
          />
        </div>
      </div>
    </section>
  );
};

export default Bookings;
