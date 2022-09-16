import React from "react";
import one from "../../assets/images/one.jpg";
import two from "../../assets/images/two.jpg";
import three from "../../assets/images/three.jpg";

const FourthSection = () => {
  return (
    <div className="lg:my-24 my-10 lg:mr-32 flex relative">
      <div className="bg-[#B6FFC0] lg:w-[65%] md:w-[70%] w-60">
        <div data-aos="fade-right" data-aos-duration="3000"
             className="lg:grid flex flex-col lg:h-auto md:h-96 h-80 lg:gap-40 gap-10 lg:max-w-[50%] md:max-w-[35%] max-w-[60%] object-cover lg:ml-32 md:ml-20 ml-5 ">
          <img src={one} className="lg:mt-32 mt-10" alt="" />
          <img src={two} className="mb-40" alt="" />
        </div>
      </div>

      <div data-aos="fade-left" data-aos-duration="3000"
           className="lg:max-w-[40rem] md:max-w-[24rem] max-w-[10rem] lg:top-72 md:top-20 top-[35%] absolute lg:ml-[55%] md:ml-96 ml-48">
        <img src={three} className="" alt="" />
      </div>
    </div>
  );
};

export default FourthSection;
