import React from "react";
import fifth from "../../assets/images/fifth.jpg";

const FifthSection = () => {
  return (
    <div>
      <div className="my-40">
        <div className="flex justify-center">
          <h1 className="w-[50rem] text-xl tracking-wider leading-loose font-bold font-mono">
            We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.
          </h1>
        </div>

        <p className="w-[50rem] flex m-auto mt-5 font-thin leading-loose tracking-wider">
          Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams
          that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.{" "}
        </p>
      </div>

      <div className="my-40 flex justify-center">
        <img src={fifth} alt="" />
      </div>
    </div>
  );
};

export default FifthSection;
