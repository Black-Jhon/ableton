import React from "react";

const HeroDescription = () => {
  return (
    <div className="lg:my-40 my-10">
      <div className="flex justify-center">
        <h1 className="lg:w-[50rem] md:w-[40rem] w-80 lg:text-xl md:text-lg text-sm lg:tracking-wider lg:leading-loose font-bold font-mono">
          We make <span className="text-[#0851FF] cursor-pointer">Live</span>, <span className="text-[#0851FF] cursor-pointer">Push</span> and{" "}
          <span className="text-[#0851FF] cursor-pointer">Link</span> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing
          things.
        </h1>
      </div>

      <p className="lg:w-[50rem] md:w-[40rem] w-80 flex m-auto mt-5 font-thin lg:leading-loose lg:tracking-wider">
        Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.
      </p>
    </div>
  );
};

export default HeroDescription;
