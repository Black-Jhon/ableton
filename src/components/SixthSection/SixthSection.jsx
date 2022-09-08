import React from "react";
import sixa from "../../assets/images/six.jpg";
import sixb from "../../assets/images/sixb.jpg";

const SixthSection = () => {
  return (
    <div>
      <div className="lg:my-40">
        <div className="flex justify-center">
          <h1 className="lg:w-[50rem] md:w-[40rem] w-80 lg:text-xl md:text-lg text-sm lg:tracking-wider lg:leading-loose font-bold font-mono">
            We’re passionate about what we do, but we’re equally passionate about improving who we are.
          </h1>
        </div>

        <p className="lg:w-[50rem] md:w-[40rem] lg:text-inherit md:text-lg text-sm w-80 flex m-auto mt-5 font-thin lg:leading-loose lg:tracking-wider">
          We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.
          <br /> <br /> Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition,
          staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.
        </p>
      </div>

      <div className="my-24 lg:mr-32 flex relative">
        <div className="bg-[#d5b3ff] w-[65%] lg:h-auto h-96">
          <div className="lg:grid flex lg:h-auto h-80 lg:gap-32 lg:max-w-[50%] max-w-[60%] object-cover lg:ml-32 md:ml-28 ml-5 mb-32">
            <img src={sixa} className="lg:mt-32 mt-16" alt="" />
          </div>
        </div>

        <div className="lg:max-w-[40rem] max-w-[10rem] md:max-w-[20rem] lg:top-72 md:top-20 top-36  absolute lg:ml-[55%] md:ml-96 ml-48">
          <img src={sixb} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
