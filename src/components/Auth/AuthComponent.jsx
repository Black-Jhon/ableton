// @ts-nocheck
import React, { useMemo, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const AuthComponent = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [isSignedUp, setIsSignedUp] = useState(true);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <div className="flex justify-center my-10">
      <div className="grid gap-5">
        <h1 className="capitalize font-bold font-mono text-4xl">{isSignedUp ? "register" : "login"}</h1>
        <hr />

        <form className="grid gap-3 lg:w-96">
          <h1 className="text-[#0000ff] text-sm cursor-pointer" onClick={() => setIsSignedUp((prev) => !prev)}>
            {isSignedUp ? "Click here to login if you already have an account." : "New customer? Please click here to create an account."}
          </h1>
          <p className="text-sm">Your account lets you authorize and download Live plus your included library content.</p>

          <div className="grid gap-5">
            <div className="grid gap-1">
              <label htmlFor="email" className="text-sm font-bold font-mono">
                {isSignedUp ? " Email" : " Email or username"}
              </label>
              <input type="email" className="px-3 py-2 bg-[#eeeeee] focus:outline-none" name="email" placeholder="Email" />
            </div>

            <div className="grid gap-1">
              <label htmlFor="email" className="text-sm font-bold font-mono">
                Password
              </label>
              <input type="password" className="px-3 py-2 bg-[#eeeeee] focus:outline-none" name="password" placeholder="Password" />
            </div>

            {/* Is only shown during a user's registration */}
            {isSignedUp && (
              <div className="grid gap-3">
                <div className="grid gap-1">
                  <label htmlFor="email" className="text-sm font-bold font-mono">
                    First Name
                  </label>
                  <input type="text" className="px-3 py-2 bg-[#eeeeee] focus:outline-none" name="firstname" placeholder="Optional" />
                </div>

                <p className="text-xs text-[#42A3B0] font-bold font-mono">So that we know what to call you if we email you.</p>

                <div className="grid gap-1">
                  <label htmlFor="email" className="text-sm font-bold font-mono">
                    Last Name
                  </label>
                  <input type="text" className="px-3 py-2 bg-[#eeeeee] focus:outline-none" name="lastname" placeholder="Optional" />
                </div>

                <div className="grid gap-1">
                  <label htmlFor="email" className="text-sm font-bold font-mono">
                    Country or Region
                  </label>
                  <Select options={options} value={value} onChange={changeHandler} className="" />
                </div>

                <div className="flex gap-3">
                  <div>
                    <input type="checkbox" name="checkbox" className="" />
                  </div>
                  <div className="text-sm font-mono">
                    <span className="font-bold">Sign up to the Ableton newsletter to stay up to date with the latest special offers, tutorial videos, downloads, surveys and other news.</span>
                    <span> It’s free and you can unsubscribe at any time. Further information is available in our</span> <br />
                    <span className="text-[#0000ff]">Privacy Policy.</span>
                  </div>
                </div>
              </div>
            )}

            <button className="bg-[#0000ff] capitalize w-40 py-2 text-white font-bold">{isSignedUp ? "create account" : "login"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthComponent;
