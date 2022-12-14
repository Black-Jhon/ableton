import React from "react";
import ReactPlayer from "react-player";

const VideoSection = () => {
  return (
    <div className="grid justify-center">
      <div data-aos="fade-up" data-aos-duration="3000">
        <div className="flex justify-center mt-10">
          <h1
            className="lg:w-[50rem] md:w-[40rem] w-80 lg:text-xl md:text-lg text-sm lg:tracking-wider lg:leading-loose font-bold font-mono">
            Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly
            rewarding.
          </h1>
        </div>

        <p className="lg:w-[50rem] md:w-[40rem] w-80 flex m-auto mt-5 font-thin lg:leading-loose lg:tracking-wider">
          We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what
          we make, and the people we make it for.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-duration="3000" className="lg:my-24 my-10">
        <ReactPlayer url="https://www.youtube.com/watch?v=Y7j7-8tc2gU" width={"auto"} controls muted />
      </div>

      <div data-aos="fade-up" data-aos-duration="3000">
        <div className="flex justify-center mt-10">
          <h1
            className="lg:w-[50rem] md:w-[40rem] w-80 lg:text-xl mg:text-lg lg:tracking-wider lg:leading-loose font-bold font-mono">
            We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our
            offices in Los Angeles and Tokyo.{" "}
          </h1>
        </div>

        <p className="lg:w-[50rem] md:w-[40rem] w-80 flex m-auto mt-5 font-thin lg:leading-loose lg:tracking-wider">
          Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from
          a wide range of cultural and professional backgrounds. Some of us have PhDs,
          some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each
          of us has the skills and knowledge to contribute to something big: helping to
          shape the future of music culture.
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
