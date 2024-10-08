import { Avatar, Accordion } from "flowbite-react";
import React, { useRef, useEffect, useState, Suspense } from "react";
import { Link } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  AiOutlineCheck,
  AiOutlineSearch,
  BiLinkExternal,
  FaChevronRight,
  IoLocationSharp,
  MdOutlineWatchLater,
} from "../../assets/icons";
import {
  bannerImg,
  bigspring_logo,
  categories01,
  categories02,
  choose_bot06,
  clearbit_logo,
  knowledgeSourcesImg,
  mine_logo,
  qt_Img,
  quote,
  shake_logo,
  telegram,
  testiUser,
  tonkean_logo,
  UserSeven,
  video_image,
  whatsapp,
} from "../../assets/images/images";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  var Testimonialsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div>
      {/* Banner area start here */}
      <div className="md:pt-0">
        <div className="relative">
          <div className="banner_content_area w-full pt-10 mb-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <h1 className="text-white uppercase text-5xl font-medium pb-3">
                  Xtreme long shot
                </h1>
                <p className="text-white text-xl pb-3">
                  Your BIG SHOT is here!
                </p>
                <div className="bg-white w-9/12 mx-auto p-0 rounded-xl mb-5">
                  <form className="flex items-center w-full mx-auto">
                    <div className="relative w-[95%] ml-[2px]">
                      <input
                        type="text"
                        id="simple-search"
                        className="bg-white border border-white text-gray-900 text-base rounded-lg focus:ring-white focus:border-white block w-full ps-5 p-2.5"
                        placeholder="What are you looking for"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-[5%] p-2.5 ms-0 text-3xl font-medium text-[#ff2610] bg-white hover:bg-[#ff2610] hover:text-white rounded-r-lg focus:ring-4 focus:outline-none focus:ring-[#ff796b]"
                    >
                      <AiOutlineSearch />
                    </button>
                  </form>
                </div>
                <div className="w-9/12 mx-auto flex">
                  <p className="text-white text-[15px] mr-2 font-medium">
                    Trending Keywords:
                  </p>
                  <ul className="flex items-center">
                    <li>
                      <Link className="bg-black bg-opacity-40 text-white text-sm border border-white px-4 py-1 rounded-full hover:bg-[#ba312b] hover:bg-opacity-90 mr-1.5">
                        city
                      </Link>
                    </li>
                    <li>
                      <Link className="bg-black bg-opacity-40 text-white text-sm border border-white px-4 py-1 rounded-full hover:bg-[#ba312b] hover:bg-opacity-90 mr-1.5">
                        sport
                      </Link>
                    </li>
                    <li>
                      <Link className="bg-black bg-opacity-40 text-white text-sm border border-white px-4 py-1 rounded-full hover:bg-[#ba312b] hover:bg-opacity-90 mr-1.5">
                        tourism
                      </Link>
                    </li>
                    <li>
                      <Link className="bg-black bg-opacity-40 text-white text-sm border border-white px-4 py-1 rounded-full hover:bg-[#ba312b] hover:bg-opacity-90 mr-1.5">
                        war
                      </Link>
                    </li>
                    <li>
                      <Link className="bg-black bg-opacity-40 text-white text-sm border border-white px-4 py-1 rounded-full hover:bg-[#ba312b] hover:bg-opacity-90 mr-1.5">
                        cars
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={bannerImg} alt="bannerImg" className="mb-0 w-full" />
          </div>
        </div>
      </div>
      {/* banner area ends here */}
      {/*  Popular Categories start here */}
      <div className="py-16 px-6 lg:px-0 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#333333] font-semibold text-[30px] leading-[40px] pb-4 lg:pb-2">
            Popular Categories
          </h2>
          <div>
            <Link className="text-[17px] text-[#ff1a03] hover:text-black inline-flex items-center">
              view all categories <FaChevronRight className="text-sm ml-0.5" />
            </Link>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-5 gap-2">
              <div className="category_list_box">
                <img src={categories01} alt="categories01" />
                <div className="category_list_box_content text-white font-medium text-base">
                  <div className="absolute left-4 bottom-4">Family</div>
                </div>
              </div>
              <div className="category_list_box">
                <img src={categories02} alt="categories02" />
                <div className="category_list_box_content text-white font-medium text-base">
                  <div className="absolute left-4 bottom-4">Family</div>
                </div>
              </div>
              <div className="category_list_box">
                <img src={categories01} alt="categories01" />
                <div className="category_list_box_content text-white font-medium text-base">
                  <div className="absolute left-4 bottom-4">Family</div>
                </div>
              </div>
              <div className="category_list_box">
                <img src={categories02} alt="categories02" />
                <div className="category_list_box_content text-white font-medium text-base">
                  <div className="absolute left-4 bottom-4">Family</div>
                </div>
              </div>
              <div className="category_list_box">
                <img src={categories01} alt="categories01" />
                <div className="category_list_box_content text-white font-medium text-base">
                  <div className="absolute left-4 bottom-4">Family</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Popular Categories ends here */}
      {/* Fresh and Trending Videos start here */}
      <div className="bg-[#f6f6f6]">
        <div className="max-w-7xl mx-auto">
          <div className="py-[30px] lg:py-[70px] px-6 lg:px-0">
            <h2 className="text-[#333333] text-center font-semibold text-[30px] leading-[40px] pb-4">
              Fresh and Trending Videos
            </h2>
            <div className="mt-5">
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#ffffff] border border-[#d1d1d1] rounded-md py-0 overflow-hidden relative">
                  <img src={video_image} alt="video_image" />
                  <div className="video_content">
                    <p className="bg-[#ec1c07] px-3 py-1 text-white inline-block text-sm rounded-md mb-1.5">
                      Political
                    </p>
                    <div className="flex text-sm text-white">
                      <MdOutlineWatchLater className="text-base mr-0.5" /> 60
                      Seconds
                    </div>
                  </div>
                </div>
                <div className="bg-[#ffffff] border border-[#d1d1d1] rounded-md py-0 overflow-hidden relative">
                  <img src={video_image} alt="video_image" />
                  <div className="video_content">
                    <p className="bg-[#ec1c07] px-3 py-1 text-white inline-block text-sm rounded-md mb-1.5">
                      Political
                    </p>
                    <div className="flex text-sm text-white">
                      <MdOutlineWatchLater className="text-base mr-0.5" /> 60
                      Seconds
                    </div>
                  </div>
                </div>
                <div className="bg-[#ffffff] border border-[#d1d1d1] rounded-md py-0 overflow-hidden relative">
                  <img src={video_image} alt="video_image" />
                  <div className="video_content">
                    <p className="bg-[#ec1c07] px-3 py-1 text-white inline-block text-sm rounded-md mb-1.5">
                      Political
                    </p>
                    <div className="flex text-sm text-white">
                      <MdOutlineWatchLater className="text-base mr-0.5" /> 60
                      Seconds
                    </div>
                  </div>
                </div>
                <div className="bg-[#ffffff] border border-[#d1d1d1] rounded-md py-0 overflow-hidden relative">
                  <img src={video_image} alt="video_image" />
                  <div className="video_content">
                    <p className="bg-[#ec1c07] px-3 py-1 text-white inline-block text-sm rounded-md mb-1.5">
                      Political
                    </p>
                    <div className="flex text-sm text-white">
                      <MdOutlineWatchLater className="text-base mr-0.5" /> 60
                      Seconds
                    </div>
                  </div>
                </div>
                <div className="bg-[#ffffff] border border-[#d1d1d1] rounded-md py-0 overflow-hidden relative">
                  <img src={video_image} alt="video_image" />
                  <div className="video_content">
                    <p className="bg-[#ec1c07] px-3 py-1 text-white inline-block text-sm rounded-md mb-1.5">
                      Political
                    </p>
                    <div className="flex text-sm text-white">
                      <MdOutlineWatchLater className="text-base mr-0.5" /> 60
                      Seconds
                    </div>
                  </div>
                </div>
                <div className="bg-[#ffffff] border border-[#d1d1d1] rounded-md py-0 overflow-hidden relative">
                  <img src={video_image} alt="video_image" />
                  <div className="video_content">
                    <p className="bg-[#ec1c07] px-3 py-1 text-white inline-block text-sm rounded-md mb-1.5">
                      Political
                    </p>
                    <div className="flex text-sm text-white">
                      <MdOutlineWatchLater className="text-base mr-0.5" /> 60
                      Seconds
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-10">
                <button className="bg-[#ffffff] border border-[#cfcfcf] text-[#ff1a03] text-[18px] px-8 py-2.5 rounded hover:bg-black hover:text-white">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fresh and Trending Videos ends here */}
      {/*  Producing with Us start here */}
      <div className="py-16 px-6 lg:px-0 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#333333] text-center font-semibold text-[30px] leading-[40px] pb-4 lg:pb-10">
            Producing with us
          </h2>
          <div className="mt-5">
            <div className="grid grid-cols-5 gap-6">
              <div className="bg-[#ffffff] border border-[#d1d1d1] rounded-md flex justify-center items-center py-5">
                <img src={tonkean_logo} alt="tonkean_logo" />
              </div>
              <div className="bg-[#ffffff] border border-[#d1d1d1] rounded-md flex justify-center items-center py-5">
                <img src={bigspring_logo} alt="bigspring_logo" />
              </div>
              <div className="bg-[#ffffff] border border-[#d1d1d1] rounded-md flex justify-center items-center py-5">
                <img src={clearbit_logo} alt="clearbit_logo" />
              </div>
              <div className="bg-[#ffffff] border border-[#d1d1d1] rounded-md flex justify-center items-center py-5">
                <img src={mine_logo} alt="mine_logo" />
              </div>
              <div className="bg-[#ffffff] border border-[#d1d1d1] rounded-md flex justify-center items-center py-5">
                <img src={shake_logo} alt="shake_logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Producing with Us ends here */}
      {/* Testimonials start here */}
      <div className="bg-[#f6f6f6] py-[30px] lg:py-[70px]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#333333] text-center font-semibold text-[30px] leading-[40px] pb-4 lg:pb-10">
            Testimonials
          </h2>
          <Slider {...Testimonialsettings} className="mr-1">
            <div className="px-4 pb-8">
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <img src={qt_Img} alt="qt_Img" className="mb-2" />
                <p className="text-base leading-[26px] text-[#333333] font-normal pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-[65px] rounded-full overflow-hidden mr-2">
                      <img src={UserSeven} alt="UserSeven" />
                    </div>
                    <div>
                      <p className="text-[#333333] text-[18px] font-medium">
                        Willie Thompson
                      </p>
                      <p className="text-base text-[#666666]">Hexa</p>
                    </div>
                  </div>
                  <div className="flex items-center text-[#0c3971] text-[18px] font-normal uppercase">
                    <IoLocationSharp className="text-xl" /> Usa
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pb-8">
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <img src={qt_Img} alt="qt_Img" className="mb-2" />
                <p className="text-base leading-[26px] text-[#333333] font-normal pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-[65px] rounded-full overflow-hidden mr-2">
                      <img src={UserSeven} alt="UserSeven" />
                    </div>
                    <div>
                      <p className="text-[#333333] text-[18px] font-medium">
                        Willie Thompson
                      </p>
                      <p className="text-base text-[#666666]">Hexa</p>
                    </div>
                  </div>
                  <div className="flex items-center text-[#0c3971] text-[18px] font-normal uppercase">
                    <IoLocationSharp className="text-xl" /> Usa
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* Testimonials ends here */}
      {/*  Assistance start here */}
      <div className="py-[60px] px-6 lg:px-0 bg-[#fbfbfb]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-[#102542] text-[26px] font-medium font-roboto">
                Need Assistance?
              </h2>
              <p className="text-[#102542] text-[26px] font-normal font-roboto">
                Your wish is our command.
              </p>
            </div>
            <div>
              <Link className="text-white bg-[#ff1a03] text-base rounded-md px-8 py-4 hover:bg-black">
                Request a call back
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*  Assistance ends here */}
    </div>
  );
};

export default Home;
