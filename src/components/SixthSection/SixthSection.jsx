import React from "react";
import sixa from "../../assets/images/six.jpg";
import sixb from "../../assets/images/sixb.jpg";

const SixthSection = () => {
  return (
    <div>
      <div className="my-40">
        <div className="flex justify-center">
          <h1 className="w-[50rem] text-xl tracking-wider leading-loose font-bold font-mono">
            We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.{" "}
          </h1>
        </div>

        <p className="w-[50rem] flex m-auto mt-5 font-thin leading-loose tracking-wider">
          If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect
          comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team
          outings throughout the year as well as a variety of fun, informal small-group activities.
        </p>
      </div>

      <div className="my-24 lg:mr-32 flex relative">
        <div className="bg-[#d5b3ff] w-[65%]">
          <div className="grid gap-32 max-w-[50%] h-[80%] object-cover lg:ml-32 mb-32">
            <img src={sixa} className="mt-32" alt="" />
          </div>
        </div>

        <div className="max-w-[40rem] top-72 absolute lg:ml-[55%]">
          <img src={sixb} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
