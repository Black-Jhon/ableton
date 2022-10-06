// @ts-nocheck
import React, { useMemo, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const AuthComponent = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [isSignedUp, setIsSignedUp] = useState(true);

  const [data, setData] = useState({ email: "", password: "", confirmPassword: "", firstname: "", lastname: "" });
  const [confirmPassword, setConfirmPassword] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignedUp) {
      if (data.password !== confirmPassword) {
        setConfirmPassword(false);
      }
    }
  };

  const resetForm = () => {
    setConfirmPassword(true);
    setData({
      email: "",
      password: "",
      confirmPassword: "",
      firstname: "",
      lastname: ""
    });
  };

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <div data-aos="flip-down" data-aos-duration="3000" className="flex justify-center my-10">
      <div className="grid gap-5 lg:w-auto w-[91%]">
        <h1 className="capitalize font-bold font-mono text-4xl">{isSignedUp ? "register" : "login"}</h1>
        <hr />

        <form className="grid gap-3 lg:w-96" onSubmit={handleSubmit}>
          <h1 className="text-[#0000ff] text-sm cursor-pointer" onClick={() => {
            setIsSignedUp((prev) => !prev);
            resetForm();
          }}>
            {isSignedUp ? "Click here to login if you already have an account." : "New customer? Please click here to create an account."}
          </h1>
          <p className="text-sm">Your account lets you authorize and download Live plus your included library
            content.</p>

          <div className="grid gap-5">
            <div className="grid gap-1">
              <label htmlFor="email" className="text-sm font-bold font-mono">
                {isSignedUp ? " Email" : " Email or username"}
              </label>
              <input type="email" className="px-3 py-2 bg-[#eeeeee] focus:outline-none" name="email"
                     placeholder="Email" onChange={handleChange} />
            </div>

            <div className="grid gap-1">
              <label htmlFor="email" className="text-sm font-bold font-mono">
                Password
              </label>
              <input type="password" className="px-3 py-2 bg-[#eeeeee] focus:outline-none" name="password"
                     placeholder="Password" onChange={handleChange} value={data.password} />
            </div>

            {/* Is only shown during a user's registration */}
            {isSignedUp && (
              <div className="grid gap-3">
                <div className="grid gap-1">
                  <label htmlFor="email" className="text-sm font-bold font-mono">
                    Confirm Password
                  </label>
                  <input type="password" className="px-3 py-2 bg-[#eeeeee] focus:outline-none" name="confirmPassword"
                         placeholder="Confirm Password" onChange={handleChange} value={data.confirmPassword} />
                </div>

                <span className="text-red-900" style={{ display: confirmPassword ? "none" : "block" }}>
                  * Confirm password is not same as the password you entered!
                </span>

                <div className="grid gap-1">
                  <label htmlFor="email" className="text-sm font-bold font-mono">
                    First Name
                  </label>
                  <input type="text" className="px-3 py-2 bg-[#eeeeee] focus:outline-none" name="firstname"
                         placeholder="Optional" onChange={handleChange} value={data.firstname} />
                </div>

                <p className="lg:text-left text-center text-xs text-[#42A3B0] font-bold font-mono">So that we know what
                  to call you if we email you.</p>

                <div className="grid gap-1">
                  <label htmlFor="email" className="text-sm font-bold font-mono">
                    Last Name
                  </label>
                  <input type="text" className="px-3 py-2 bg-[#eeeeee] focus:outline-none" name="lastname"
                         placeholder="Optional" onChange={handleChange} value={data.lastname} />
                </div>

                <div className="grid gap-1">
                  <label htmlFor="email" className="text-sm font-bold font-mono">
                    Country or Region
                  </label>
                  <Select options={options} value={value} onChange={changeHandler} className="" />
                </div>

                <div className="flex gap-3">
                  <div>
                    <input type="checkbox" name="checkbox" className="" onChange={handleChange} />
                  </div>
                  <div className="text-sm font-mono">
                    <span className="font-bold">Sign up to the Ableton newsletter to stay up to date with the latest special offers, tutorial videos, downloads, surveys and other news.</span>
                    <span> It’s free and you can unsubscribe at any time. Further information is available in our</span>
                    <br />
                    <span className="text-[#0000ff]">Privacy Policy.</span>
                  </div>
                </div>
              </div>
            )}

            <button
              className="bg-[#0000ff] capitalize w-40 py-2 text-white font-bold">{isSignedUp ? "create account" : "login"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthComponent;
