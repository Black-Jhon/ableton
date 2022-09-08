import React from "react";
import seven from "../../assets/images/seven.jpg";
import { BiChevronRight } from "react-icons/bi";

const SeventhSection = () => {
  return (
    <div>
      <div className="lg:my-40">
        <div className="flex justify-center">
          <h1 className="lg:w-[50rem] md:w-[40rem] w-80 lg:text-xl md:text-lg text-sm lg:tracking-wider lg:leading-loose font-bold font-mono">
            We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.{" "}
          </h1>
        </div>

        <p className="lg:w-[50rem] md:w-[40rem] lg:text-inherit md:text-lg text-sm w-80 flex m-auto mt-5 font-thin lg:leading-loose lg:tracking-wider">
          If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect
          comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team
          outings throughout the year as well as a variety of fun, informal small-group activities.
        </p>
      </div>

      <div className="md:grid grid-cols-2 lg:mx-32 md:mx-24 lg:my-40 my-10">
        <div className="">
          <img src={seven} className="lg:h-[40rem] object-cover" alt="" />
        </div>

        <div className="bg-[#b1c5ff] lg:h-[40rem] flex justify-center items-center">
          <div className="grid gap-5 lg:my-0 my-10">
            <div className="lg:w-[25rem] md:w-72 w-80 lg:text-xl lg:tracking-wider lg:leading-loose font-bold font-mono">
              We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.
            </div>

            <div className="flex items-center gap-5 text-[#0000ff] cursor-pointer">
              <h1 className="font-bold font-mono">See latest jobs </h1>
              <BiChevronRight className="text-xl" />
            </div>
          </div>
        </div>
      </div>
      <hr className="text-gray-900 my-40" />
    </div>
  );
};

export default SeventhSection;
