import React from "react";

const SmallNavbar = () => {
  return (
    <div className="flex gap-10 lg:mx-12 mx-2">
      <p className="capitalize text-[#ff764d] cursor-pointer text-sm font-bold font-mono">about</p>
      <p className="capitalize cursor-pointer text-sm font-bold font-mono">jobs</p>
      <p className="capitalize cursor-pointer text-sm font-bold font-mono">apprenticeships</p>
    </div>
  );
};

export default SmallNavbar;
