import React from "react";

const AuthComponent = () => {
  return (
    <div className="flex justify-center my-24">
      <div className="grid gap-5">
        <h1 className="capitalize">register</h1>
        <hr />

        <form className="grid gap-3">
          <h1>New Customer? Please create an account.</h1>
          <p>Your account lets you authorize and download Live plus your included library content.</p>

          <div className="grid gap-5">
            <div className="grid gap-1">
              <label htmlFor="email" className="text-sm font-bold font-mono">
                Email
              </label>
              <input type="email" className="px-3 py-2 bg-[#eeeeee] focus:outline-none" name="email" placeholder="Email" />
            </div>

            <div className="grid gap-1">
              <label htmlFor="email" className="text-sm font-bold font-mono">
                Password
              </label>
              <input type="password" className="px-3 py-2 bg-[#eeeeee] focus:outline-none" name="password" placeholder="Password" />
            </div>

            <div className="grid gap-1">
              <label htmlFor="email" className="text-sm font-bold font-mono">
                First Name
              </label>
              <input type="text" className="px-3 py-2 bg-[#eeeeee] focus:outline-none" name="firstname" placeholder="Optional" />
            </div>

            <p className="">So that we know what to call you if we email you.</p>

            <div className="grid gap-1">
              <label htmlFor="email" className="text-sm font-bold font-mono">
                Email
              </label>
              <input type="email" className="px-3 py-2 bg-[#eeeeee] focus:outline-none" name="email" placeholder="Email" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthComponent;
