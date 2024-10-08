import React, { useState } from "react";
import { signupBanner } from "../../assets/images/images";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaGoogle } from "../../assets/icons";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { registerUser } from "../../reducers/AuthSlice";
import { FaEyeSlash } from "react-icons/fa6";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const password = watch("password");
  const onSubmit = (data) => {
    dispatch(registerUser(data)).then((res) => {
      console.log("Res: ", res);
    });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };
  return (
    <div className="bg-[#f6f6f6] pb-16">
      <div>
        <img className="w-full" src={signupBanner} alt="signupBanner" />
      </div>
      <div className="pt-0 mt-[-95px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="signup-wrapper">
            <h3>Sign Up</h3>
            <button className="bg-[#ff1a03] font-roboto text-center text-white font-medium text-base w-full py-3 rounded-md hover:bg-[#484747] mb-4 flex items-center justify-center">
              <FaGoogle className="text-base mr-1.5" />
              Continue with Google
            </button>
            <div className="text-[#1d2245] text-base font-semibold text-center mb-2 devider_area">
              Or
            </div>
            <div className="mb-3">
              <div className="mb-1 block">
                <Label
                  htmlFor="name"
                  value="Name"
                  className="text-[#1d2245] text-base font-medium font-roboto"
                />
              </div>
              <TextInput
                id="email1"
                type="text"
                placeholder="Enter name"
                {...register("name", { required: true })}
              />
              {errors?.name?.message && (
                <h6 className="text-danger">{errors.name.message}</h6>
              )}
            </div>
            <div className="mb-3">
              <div className="mb-1 block">
                <Label
                  htmlFor="email1"
                  value="Email"
                  className="text-[#1d2245] text-base font-medium font-roboto"
                />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="Enter email"
                {...register("email", { required: true })}
              />
              {errors?.email?.message && (
                <h6 className="text-danger">{errors.email.message}</h6>
              )}
            </div>
            <div className="mb-3">
              <div className="mb-1 block">
                <Label
                  htmlFor="password1"
                  value="Password"
                  className="text-[#1d2245] text-base font-medium font-roboto"
                />
              </div>
              <div className="relative">
                <TextInput
                  id="password1"
                  //type="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  {...register("password", { required: true })}
                />
                <div className="absolute right-4 top-[15px]">
                  <button type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <FaEyeSlash className="text-[#a2a2a2] text-[18px]" />
                    ) : (
                      <FaEye className="text-[#a2a2a2] text-[18px]" />
                    )}
                  </button>
                </div>
                {errors?.password?.message && (
                  <h6 className="text-danger">{errors.password.message}</h6>
                )}
              </div>
            </div>
            <div className="mb-3">
              <div className="mb-1 block">
                <Label
                  htmlFor="password1"
                  value="Confirm Password"
                  className="text-[#1d2245] text-base font-medium font-roboto"
                />
              </div>
              <div className="relative">
                <TextInput
                  id="password1"
                  type={showPassword ? "text" : "password"}
                  placeholder="Re-enter password"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === password || "Password do not Match",
                  })}
                />
                <div className="absolute right-4 top-[15px]">
                  <button type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <FaEyeSlash className="text-[#a2a2a2] text-[18px]" />
                    ) : (
                      <FaEye className="text-[#a2a2a2] text-[18px]" />
                    )}
                  </button>
                </div>
                {errors?.confirm_password?.message && (
                  <h6 className="text-red-600">
                    {errors.confirm_password.message}
                  </h6>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-start gap-2">
                <Checkbox id="remember" className="mt-1" />
                <Label
                  htmlFor="remember"
                  className="text-[#1d2245] text-base font-medium font-roboto"
                >
                  Creating an account means you’re okay with our{" "}
                  <Link className="text-[#0f2abb] hover:text-[#ff1a03]">
                    Terms & Conditions
                  </Link>{" "}
                  &{" "}
                  <Link className="text-[#0f2abb] hover:text-[#ff1a03]">
                    Privacy Policy
                  </Link>
                  .
                </Label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#ff1a03] uppercase text-center text-white text-[18px] w-full py-3 font-medium rounded-md hover:bg-[#484747] mb-4"
            >
              Sign Up
            </button>
            <p className="text-[#1d2245] text-base font-medium text-center font-roboto">
              Already Have An Account?
              <Link
                to="/login"
                className="text-[#0f2abb] hover:text-[#ff1a03] ml-0.5"
              >
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
