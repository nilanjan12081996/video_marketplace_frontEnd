import React, { useRef, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Button,
  Modal,
  Label,
  TextInput,
  Checkbox,
} from "flowbite-react";
import logo from "../../assets/imagesource/logo.png";
import {
  AiOutlineGoogle,
  AiOutlineSearch,
  BiLinkExternal,
  BiLogoGithub,
  FaSortDown,
} from "../../assets/icons";
import { bannerImg, login_img } from "../../assets/images/images";

const Header = () => {
  const navigate = useNavigate();
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const handleMenuItemClick = (menuItem, flag = null) => {
    setActiveMenuItem(menuItem);
    console.log("nenuItem", menuItem);
    if (flag == "blog") {
      location.href = "https://aioasis.com/blog/";
    }
  };
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);

  const onLogin = () => {
    navigate("/login");
  };
  const onSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="header_section w-full pb-0 bg-[#ff1a03]">
        <div className="pt-0 pb-0 px-3 md:px-3 md:py-0 lg:px-0 flex max-w-7xl mx-auto">
          <div className="w-full">
            <div className="header_top flex justify-between items-center flex-row-reverse md:flex-row xl:flex">
              <div className="hidden md:block w-[120px] text-center lg:text-left">
                <Link to="/">
                  <img src={logo} className="my-0 inline-block" />
                </Link>
              </div>

              <div className="main_menu">
                <Navbar fluid rounded className="bg-transparent">
                  <div className="mobile_icon flex md:order-2">
                    <Navbar.Toggle />
                  </div>
                  <Navbar.Collapse className="w-80 rounded-xl border border-gray-700 md:border-0 absolute right-6 top-16 z-10 bg-white md:bg-transparent md:static px-4 pb-2 md:px-0 md:pb-0 lg:bg-transparent">
                    <li>
                      <NavLink
                        className={
                          activeMenuItem === "item1"
                            ? "active"
                            : "text-[#ececec]"
                        }
                        onClick={() => handleMenuItemClick("item1")}
                        active
                        to="/about-us"
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          activeMenuItem === "item2"
                            ? "active"
                            : "text-[#ececec]"
                        }
                        onClick={() => handleMenuItemClick("item2")}
                        to="/contact-us"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          activeMenuItem === "item6"
                            ? "active"
                            : "text-[#ececec]"
                        }
                        onClick={() => handleMenuItemClick("item8")}
                        to="/how-it-works"
                      >
                        How It Works
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          activeMenuItem === "item2"
                            ? "active"
                            : "text-[#ececec]"
                        }
                        onClick={() => handleMenuItemClick("item2")}
                        to="/blog"
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li className="dropdown_menu lg:hidden">
                      <NavLink
                        className={
                          activeMenuItem === "item2"
                            ? "active"
                            : "text-[#ececec]"
                        }
                        onClick={() => handleMenuItemClick("item2")}
                        to="/"
                      >
                        Categories
                      </NavLink>
                      <ul className="dropdown_menu_list">
                        <li>
                          <Link>Family</Link>
                        </li>
                        <li>
                          <Link>Drone</Link>
                        </li>
                        <li>
                          <Link>Politics</Link>
                        </li>
                        <li>
                          <Link>Social</Link>
                        </li>
                        <li>
                          <Link>Food</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="lg:hidden">
                      <NavLink
                        className={
                          activeMenuItem === "item2"
                            ? "active"
                            : "text-[#ececec]"
                        }
                        onClick={() => handleMenuItemClick("item2")}
                        to="/price"
                      >
                        Price
                      </NavLink>
                    </li>
                  </Navbar.Collapse>
                </Navbar>
              </div>

              <div className="block md:hidden w-4/12">
                <Link to="/">
                  <img src={logo} className="lg:w-full my-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#484747] py-[10px]">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div>
              <div className="main_menu second_menu hidden lg:block">
                <Navbar fluid rounded className="bg-transparent">
                  <div className="mobile_icon flex md:order-2">
                    <Navbar.Toggle />
                  </div>
                  <Navbar.Collapse className="w-80 rounded-xl border border-gray-700 md:border-0 absolute right-6 top-16 z-10 bg-white md:bg-transparent md:static px-4 pb-2 md:px-0 md:pb-0 lg:bg-transparent">
                    <li className="dropdown_menu">
                      <NavLink
                        className={
                          activeMenuItem === "item2"
                            ? "active"
                            : "text-[#ececec]"
                        }
                        onClick={() => handleMenuItemClick("item2")}
                        to="/categories"
                      >
                        <div className="flex">
                          Categories <FaSortDown className="text-xl ml-0.5" />
                        </div>
                      </NavLink>
                      <ul className="dropdown_menu_list">
                        <li>
                          <Link>Family</Link>
                        </li>
                        <li>
                          <Link>Drone</Link>
                        </li>
                        <li>
                          <Link>Politics</Link>
                        </li>
                        <li>
                          <Link>Social</Link>
                        </li>
                        <li>
                          <Link>Food</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        className={
                          activeMenuItem === "item2"
                            ? "active"
                            : "text-[#ececec]"
                        }
                        onClick={() => handleMenuItemClick("item2")}
                        to="/price"
                      >
                        Price
                      </NavLink>
                    </li>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </div>
            <div>
              <button
                onClick={onLogin}
                className="text-[#ececec] bg-[#ff1a03] airbnbcereal_regular font-medium rounded-md px-2.5 py-1 lg:px-5 lg:py-2 hover:bg-[#333333] hover:text-white mr-4"
              >
                Log In
              </button>
              <button
                onClick={onSignup}
                className="text-white airbnbcereal_regular bg-[#ff1a03] font-medium rounded-md px-2.5 py-1 lg:px-5 lg:py-2 hover:bg-[#333333] hover:text-white"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Login modal start here */}
      {/* <Modal
        size="7xl"
        show={openLoginModal}
        onClose={() => setOpenLoginModal(false)}
      >
        <Modal.Header className="border-0 p-0 m-0 absolute right-0 top-0">
          &nbsp;
        </Modal.Header>
        <Modal.Body className="">
          <div className="flex">
            <div className="w-6/12">
              <img src={login_img} alt="login_img" />
            </div>
            <div className="w-6/12 flex justify-center items-center">
              <div className="px-20 w-full">
                <div className="w-full">
                  <h1 className="font-roboto font-semibold text-black text-4xl text-center mb-12">
                    Log In
                  </h1>
                  <div className="border-2 border-[#A7A7A7] rounded-lg w-full h-[50px] relative p-3 mb-7">
                    <label className="text-[#A7A7A7] text-base font-medium bg-white absolute left-3 top-[-13px] px-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="block w-full border-0 relative z-10 p-0 m-0"
                    />
                  </div>
                  <div className="border-2 border-[#A7A7A7] rounded-lg w-full h-[50px] relative p-3 mb-3">
                    <label className="text-[#A7A7A7] text-base font-medium bg-white absolute left-3 top-[-13px] px-2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="block w-full border-0 relative z-10 p-0 m-0"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me! </Label>
                      </div>
                    </div>
                    <div>
                      <Link className="text-sm text-[#E72051] font-normal hover:text-black">
                        Forget Password?
                      </Link>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={onSubmit}
                      className="bg-[#E72051] text-white text-[18px] py-3 font-medium rounded-md w-full hover:bg-black"
                      type="submit"
                    >
                      Log In
                    </button>
                  </div>
                  <div className="continue_with_area text-center my-7 w-10/12 mx-auto">
                    <p className="text-sm text-[#525252] font-normal bg-white relative z-20 inline-block px-4">
                      Or Continue With
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <button className="bg-white border-2 border-[#74747] text-[#232323] font-medium py-2 px-4 rounded-md hover:bg-black hover:text-white flex items-center">
                      <BiLogoGithub className="text-xl mr-2" />
                      Github
                    </button>
                    <button className="bg-white border-2 border-[#74747] text-[#232323] font-medium py-2 px-4 rounded-md hover:bg-black hover:text-white flex items-center">
                      <AiOutlineGoogle className="text-xl mr-2" />
                      Google
                    </button>
                  </div>
                  <div className="text-center mt-20">
                    <p className="text-sm text-[#615D5D] font-roboto font-medium">
                      Don’t have an account?{" "}
                      <Link className="text-black hover:text-[#E72051]">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
      {/* Login modal ends here */}
      {/* Sign Up modal start here */}
      {/* <Modal
        size="7xl"
        show={openSignupModal}
        onClose={() => setOpenSignupModal(false)}
      >
        <Modal.Header className="border-0 p-0 m-0 absolute right-0 top-0">
          &nbsp;
        </Modal.Header>
        <Modal.Body className="">
          <div className="flex">
            <div className="w-6/12">
              <img src={login_img} alt="login_img" />
            </div>
            <div className="w-6/12 flex justify-center items-center">
              <div className="px-20 w-full">
                <div className="w-full">
                  <h1 className="font-roboto font-semibold text-black text-3xl text-center mb-10">
                    Sign Up
                  </h1>
                  <div className="flex gap-4">
                    <div className="border-2 border-[#A7A7A7] rounded-lg w-full h-[50px] relative p-3 mb-7">
                      <label className="text-[#A7A7A7] text-base font-medium bg-white absolute left-3 top-[-13px] px-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="block w-full border-0 relative z-10 p-0 m-0"
                      />
                    </div>
                    <div className="border-2 border-[#A7A7A7] rounded-lg w-full h-[50px] relative p-3 mb-7">
                      <label className="text-[#A7A7A7] text-base font-medium bg-white absolute left-3 top-[-13px] px-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="block w-full border-0 relative z-10 p-0 m-0"
                      />
                    </div>
                  </div>
                  <div className="border-2 border-[#A7A7A7] rounded-lg w-full h-[50px] relative p-3 mb-7">
                    <label className="text-[#A7A7A7] text-base font-medium bg-white absolute left-3 top-[-13px] px-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="block w-full border-0 relative z-10 p-0 m-0"
                    />
                  </div>
                  <div className="border-2 border-[#A7A7A7] rounded-lg w-full h-[50px] relative p-3 mb-7">
                    <label className="text-[#A7A7A7] text-base font-medium bg-white absolute left-3 top-[-13px] px-2">
                      Username
                    </label>
                    <input
                      type="text"
                      className="block w-full border-0 relative z-10 p-0 m-0"
                    />
                  </div>
                  <div className="border-2 border-[#A7A7A7] rounded-lg w-full h-[50px] relative p-3 mb-7">
                    <label className="text-[#A7A7A7] text-base font-medium bg-white absolute left-3 top-[-13px] px-2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="block w-full border-0 relative z-10 p-0 m-0"
                    />
                  </div>
                  <div className="border-2 border-[#A7A7A7] rounded-lg w-full h-[50px] relative p-3 mb-7">
                    <label className="text-[#A7A7A7] text-base font-medium bg-white absolute left-3 top-[-13px] px-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="block w-full border-0 relative z-10 p-0 m-0"
                    />
                  </div>
                  <div>
                    <button
                      className="bg-[#E72051] text-white text-[18px] py-3 font-medium rounded-md w-full hover:bg-black"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="continue_with_area text-center my-7 w-10/12 mx-auto">
                    <p className="text-sm text-[#525252] font-normal bg-white relative z-20 inline-block px-4">
                      Or Continue With
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <button className="bg-white border-2 border-[#74747] text-[#232323] font-medium py-2 px-4 rounded-md hover:bg-black hover:text-white flex items-center">
                      <BiLogoGithub className="text-xl mr-2" />
                      Github
                    </button>
                    <button className="bg-white border-2 border-[#74747] text-[#232323] font-medium py-2 px-4 rounded-md hover:bg-black hover:text-white flex items-center">
                      <AiOutlineGoogle className="text-xl mr-2" />
                      Google
                    </button>
                  </div>
                  <div className="text-center mt-5">
                    <p className="text-sm text-[#615D5D] font-roboto font-medium">
                      Don’t have an account?{" "}
                      <Link className="text-black hover:text-[#E72051]">
                        Log In
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
      {/* Sign Up modal ends here */}
    </>
  );
};

export default Header;
