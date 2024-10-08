import React, { useRef, useEffect, useState } from "react";
import {
  BiBot,
  BiDotsVerticalRounded,
  BiSolidCheckCircle,
  BsDownload,
  CgMathPlus,
  FaListUl,
  FaRegFileVideo,
  FaSackDollar,
  FaUsers,
  IoGrid,
  IoStar,
  LuDownload,
  LuUpload,
  MdDelete,
  MdEdit,
  MdKeyboardDoubleArrowRight,
  MdOutlineDashboardCustomize,
  TbDatabaseDollar,
} from "../assets/icons";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import {
  Navbar,
  Button,
  Modal,
  Label,
  TextInput,
  Checkbox,
  Radio,
  Dropdown,
  Table,
} from "flowbite-react";

import logo from "../assets/imagesource/logo.png";
import { Link } from "react-router-dom";
import { gridViewImg } from "../assets/images/images";

const DashboardCard = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        <div className="rounded-xl px-[15px] py-[25px] shadow-xl bg-gradient-to-r from-[#f81a03] to-[#c01504]">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-white text-3xl font-semibold pb-1.5">67</h3>
              <p className="text-white text-sm font-semibold uppercase">
                Videos Uploaded
              </p>
            </div>
            <div className="bg-[#d43929] w-[75px] h-[75px] rounded-full flex justify-center items-center">
              <LuUpload className="text-white text-4xl" />
            </div>
          </div>
        </div>
        <div className="rounded-xl px-[15px] py-[25px] shadow-xl bg-gradient-to-r from-[#f81a03] to-[#c01504]">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-white text-3xl font-semibold pb-1.5">25</h3>
              <p className="text-white text-sm font-semibold uppercase">
                Videos Downloaded
              </p>
            </div>
            <div className="bg-[#d43929] w-[75px] h-[75px] rounded-full flex justify-center items-center">
              <LuDownload className="text-white text-4xl" />
            </div>
          </div>
        </div>
        <div className="rounded-xl px-[15px] py-[25px] shadow-xl bg-gradient-to-r from-[#f81a03] to-[#c01504]">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-white text-3xl font-semibold pb-1.5">5354</h3>
              <p className="text-white text-sm font-semibold uppercase">
                Followers
              </p>
            </div>
            <div className="bg-[#d43929] w-[75px] h-[75px] rounded-full flex justify-center items-center">
              <FaUsers className="text-white text-4xl" />
            </div>
          </div>
        </div>
        <div className="rounded-xl px-[15px] py-[25px] shadow-xl bg-gradient-to-r from-[#f81a03] to-[#c01504]">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-white text-3xl font-semibold pb-1.5">200</h3>
              <p className="text-white text-sm font-semibold uppercase">
                Following
              </p>
            </div>
            <div className="bg-[#d43929] w-[75px] h-[75px] rounded-full flex justify-center items-center">
              <IoStar className="text-white text-4xl" />
            </div>
          </div>
        </div>
        <div className="rounded-xl px-[15px] py-[25px] shadow-xl bg-gradient-to-r from-[#f81a03] to-[#c01504]">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-white text-3xl font-semibold pb-1.5">
                $20,535.45
              </h3>
              <p className="text-white text-sm font-semibold uppercase">
                Total Earning
              </p>
            </div>
            <div className="bg-[#d43929] w-[75px] h-[75px] rounded-full flex justify-center items-center">
              <FaSackDollar className="text-white text-4xl" />
            </div>
          </div>
        </div>
        <div className="rounded-xl px-[15px] py-[25px] shadow-xl bg-gradient-to-r from-[#f81a03] to-[#c01504]">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-white text-3xl font-semibold pb-1.5">
                $5,000
              </h3>
              <p className="text-white text-sm font-semibold uppercase">
                Total Spend
              </p>
            </div>
            <div className="bg-[#d43929] w-[75px] h-[75px] rounded-full flex justify-center items-center">
              <TbDatabaseDollar className="text-white text-4xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="main_dashbord_area mb-10">
        <Tabs>
          <div className="flex justify-between items-center border-b border-[#dddddd] py-4 px-6">
            <div>
              <h4 className="text-[#702772] text-[18px] leading-[22px] mb-0.5 font-semibold">
                RECENT EARNINGS
              </h4>
              <Link className="text-[#f2134f] text-sm font-semibold hover:text-[#702772] flex items-center">
                View All Earnings <MdKeyboardDoubleArrowRight />
              </Link>
            </div>
            <div>
              <div className="flex items-center">
                <p className="text-[#666666] text-base mr-2">View As:</p>
                <TabList className="flex">
                  <Tab>
                    <FaListUl />
                  </Tab>
                  <Tab>
                    <IoGrid />
                  </Tab>
                </TabList>
              </div>
            </div>
          </div>
          <div className="py-6 px-0">
            <TabPanel>
              <div className="list_view_area">
                <div className="overflow-x-auto">
                  <Table striped>
                    <Table.Head>
                      <Table.HeadCell className="bg-[#f3c9d2] text-[#700f2a] text-sm font-semibold rounded-none">
                        Video title
                      </Table.HeadCell>
                      <Table.HeadCell className="bg-[#f3c9d2] text-[#700f2a] text-sm font-semibold rounded-none">
                        Category
                      </Table.HeadCell>
                      <Table.HeadCell className="bg-[#f3c9d2] text-[#700f2a] text-sm font-semibold rounded-none">
                        Quality
                      </Table.HeadCell>
                      <Table.HeadCell className="bg-[#f3c9d2] text-[#700f2a] text-sm font-semibold rounded-none">
                        License
                      </Table.HeadCell>
                      <Table.HeadCell className="bg-[#f3c9d2] text-[#700f2a] text-sm font-semibold rounded-none">
                        Rental Period
                      </Table.HeadCell>
                      <Table.HeadCell className="bg-[#f3c9d2] text-[#700f2a] text-sm font-semibold rounded-none">
                        Date & Time
                      </Table.HeadCell>
                      <Table.HeadCell className="bg-[#f3c9d2] text-[#700f2a] text-sm font-semibold rounded-none">
                        Amount
                      </Table.HeadCell>
                      <Table.HeadCell className="bg-[#f3c9d2] text-[#700f2a] text-sm font-semibold rounded-none">
                        Action
                      </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="font-semibold text-[#702772] flex items-center py-7">
                          <FaRegFileVideo className="text-[#ff1a03] mr-1" />
                          Title
                        </Table.Cell>
                        <Table.Cell>
                          <Link className="bg-[#f11c07] text-sm mt-1 px-4 py-1.5 text-white mb-2 inline-block rounded-md hover:bg-[#702772]">
                            Food
                          </Link>
                        </Table.Cell>
                        <Table.Cell className="text-[#8898aa]">HD</Table.Cell>
                        <Table.Cell className="text-[#8898aa]">
                          For other user only
                        </Table.Cell>
                        <Table.Cell className="text-[#8898aa]">
                          12 Months
                        </Table.Cell>
                        <Table.Cell>
                          <p className="text-[#8898aa]">October 03, 2024</p>
                          <p className="text-[#8898aa]">09:19 AM</p>
                        </Table.Cell>
                        <Table.Cell className="text-[#8898aa]">$0</Table.Cell>
                        <Table.Cell>
                          <div className="flex items-center justify-center">
                            <button className="bg-white text-xs px-2 py-2 text-[#f11c07] border border-[#f11c07] mb-0 flex rounded-md hover:bg-[#f11c07] hover:text-white items-center mr-2 justify-center">
                              <MdEdit className="text-base mr-0" />
                            </button>
                            <button className="bg-white text-xs px-2 py-2 text-[#f11c07] border border-[#f11c07] mb-0 flex rounded-md hover:bg-[#f11c07] hover:text-white items-center justify-center">
                              <MdDelete className="text-base mr-0" />
                            </button>
                          </div>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="font-semibold text-[#702772] flex items-center py-7">
                          <FaRegFileVideo className="text-[#ff1a03] mr-1" />
                          Title
                        </Table.Cell>
                        <Table.Cell>
                          <Link className="bg-[#f11c07] text-sm mt-1 px-4 py-1.5 text-white mb-2 inline-block rounded-md hover:bg-[#702772]">
                            Food
                          </Link>
                        </Table.Cell>
                        <Table.Cell className="text-[#8898aa]">HD</Table.Cell>
                        <Table.Cell className="text-[#8898aa]">
                          For other user only
                        </Table.Cell>
                        <Table.Cell className="text-[#8898aa]">
                          12 Months
                        </Table.Cell>
                        <Table.Cell>
                          <p className="text-[#8898aa]">October 03, 2024</p>
                          <p className="text-[#8898aa]">09:19 AM</p>
                        </Table.Cell>
                        <Table.Cell className="text-[#8898aa]">$0</Table.Cell>
                        <Table.Cell>
                          <div className="flex items-center justify-center">
                            <button className="bg-white text-xs px-2 py-2 text-[#f11c07] border border-[#f11c07] mb-0 flex rounded-md hover:bg-[#f11c07] hover:text-white items-center mr-2 justify-center">
                              <MdEdit className="text-base mr-0" />
                            </button>
                            <button className="bg-white text-xs px-2 py-2 text-[#f11c07] border border-[#f11c07] mb-0 flex rounded-md hover:bg-[#f11c07] hover:text-white items-center justify-center">
                              <MdDelete className="text-base mr-0" />
                            </button>
                          </div>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="font-semibold text-[#702772] flex items-center py-7">
                          <FaRegFileVideo className="text-[#ff1a03] mr-1" />
                          Title
                        </Table.Cell>
                        <Table.Cell>
                          <Link className="bg-[#f11c07] text-sm mt-1 px-4 py-1.5 text-white mb-2 inline-block rounded-md hover:bg-[#702772]">
                            Food
                          </Link>
                        </Table.Cell>
                        <Table.Cell className="text-[#8898aa]">HD</Table.Cell>
                        <Table.Cell className="text-[#8898aa]">
                          For other user only
                        </Table.Cell>
                        <Table.Cell className="text-[#8898aa]">
                          12 Months
                        </Table.Cell>
                        <Table.Cell>
                          <p className="text-[#8898aa]">October 03, 2024</p>
                          <p className="text-[#8898aa]">09:19 AM</p>
                        </Table.Cell>
                        <Table.Cell className="text-[#8898aa]">$0</Table.Cell>
                        <Table.Cell>
                          <div className="flex items-center justify-center">
                            <button className="bg-white text-xs px-2 py-2 text-[#f11c07] border border-[#f11c07] mb-0 flex rounded-md hover:bg-[#f11c07] hover:text-white items-center mr-2 justify-center">
                              <MdEdit className="text-base mr-0" />
                            </button>
                            <button className="bg-white text-xs px-2 py-2 text-[#f11c07] border border-[#f11c07] mb-0 flex rounded-md hover:bg-[#f11c07] hover:text-white items-center justify-center">
                              <MdDelete className="text-base mr-0" />
                            </button>
                          </div>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="font-semibold text-[#702772] flex items-center py-7">
                          <FaRegFileVideo className="text-[#ff1a03] mr-1" />
                          Title
                        </Table.Cell>
                        <Table.Cell>
                          <Link className="bg-[#f11c07] text-sm mt-1 px-4 py-1.5 text-white mb-2 inline-block rounded-md hover:bg-[#702772]">
                            Food
                          </Link>
                        </Table.Cell>
                        <Table.Cell className="text-[#8898aa]">HD</Table.Cell>
                        <Table.Cell className="text-[#8898aa]">
                          For other user only
                        </Table.Cell>
                        <Table.Cell className="text-[#8898aa]">
                          12 Months
                        </Table.Cell>
                        <Table.Cell>
                          <p className="text-[#8898aa]">October 03, 2024</p>
                          <p className="text-[#8898aa]">09:19 AM</p>
                        </Table.Cell>
                        <Table.Cell className="text-[#8898aa]">$0</Table.Cell>
                        <Table.Cell>
                          <div className="flex items-center justify-center">
                            <button className="bg-white text-xs px-2 py-2 text-[#f11c07] border border-[#f11c07] mb-0 flex rounded-md hover:bg-[#f11c07] hover:text-white items-center mr-2 justify-center">
                              <MdEdit className="text-base mr-0" />
                            </button>
                            <button className="bg-white text-xs px-2 py-2 text-[#f11c07] border border-[#f11c07] mb-0 flex rounded-md hover:bg-[#f11c07] hover:text-white items-center justify-center">
                              <MdDelete className="text-base mr-0" />
                            </button>
                          </div>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="font-semibold text-[#702772] flex items-center py-7">
                          <FaRegFileVideo className="text-[#ff1a03] mr-1" />
                          Title
                        </Table.Cell>
                        <Table.Cell>
                          <Link className="bg-[#f11c07] text-sm mt-1 px-4 py-1.5 text-white mb-2 inline-block rounded-md hover:bg-[#702772]">
                            Food
                          </Link>
                        </Table.Cell>
                        <Table.Cell className="text-[#8898aa]">HD</Table.Cell>
                        <Table.Cell className="text-[#8898aa]">
                          For other user only
                        </Table.Cell>
                        <Table.Cell className="text-[#8898aa]">
                          12 Months
                        </Table.Cell>
                        <Table.Cell>
                          <p className="text-[#8898aa]">October 03, 2024</p>
                          <p className="text-[#8898aa]">09:19 AM</p>
                        </Table.Cell>
                        <Table.Cell className="text-[#8898aa]">$0</Table.Cell>
                        <Table.Cell>
                          <div className="flex items-center justify-center">
                            <button className="bg-white text-xs px-2 py-2 text-[#f11c07] border border-[#f11c07] mb-0 flex rounded-md hover:bg-[#f11c07] hover:text-white items-center mr-2 justify-center">
                              <MdEdit className="text-base mr-0" />
                            </button>
                            <button className="bg-white text-xs px-2 py-2 text-[#f11c07] border border-[#f11c07] mb-0 flex rounded-md hover:bg-[#f11c07] hover:text-white items-center justify-center">
                              <MdDelete className="text-base mr-0" />
                            </button>
                          </div>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="font-semibold text-[#702772] flex items-center py-7">
                          <FaRegFileVideo className="text-[#ff1a03] mr-1" />
                          Title
                        </Table.Cell>
                        <Table.Cell>
                          <Link className="bg-[#f11c07] text-sm mt-1 px-4 py-1.5 text-white mb-2 inline-block rounded-md hover:bg-[#702772]">
                            Food
                          </Link>
                        </Table.Cell>
                        <Table.Cell className="text-[#8898aa]">HD</Table.Cell>
                        <Table.Cell className="text-[#8898aa]">
                          For other user only
                        </Table.Cell>
                        <Table.Cell className="text-[#8898aa]">
                          12 Months
                        </Table.Cell>
                        <Table.Cell>
                          <p className="text-[#8898aa]">October 03, 2024</p>
                          <p className="text-[#8898aa]">09:19 AM</p>
                        </Table.Cell>
                        <Table.Cell className="text-[#8898aa]">$0</Table.Cell>
                        <Table.Cell>
                          <div className="flex items-center justify-center">
                            <button className="bg-white text-xs px-2 py-2 text-[#f11c07] border border-[#f11c07] mb-0 flex rounded-md hover:bg-[#f11c07] hover:text-white items-center mr-2 justify-center">
                              <MdEdit className="text-base mr-0" />
                            </button>
                            <button className="bg-white text-xs px-2 py-2 text-[#f11c07] border border-[#f11c07] mb-0 flex rounded-md hover:bg-[#f11c07] hover:text-white items-center justify-center">
                              <MdDelete className="text-base mr-0" />
                            </button>
                          </div>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid_view_area">
                <div className="grid grid-cols-3 gap-8">
                  <div className="dash_grid_box p-2.5">
                    <div className="mb-3">
                      <img
                        src={gridViewImg}
                        alt="gridViewImg"
                        className="w-full rounded-md"
                      />
                    </div>
                    <div>
                      <p className="text-[#333333] text-[15px] font-semibold pb-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <Link className="bg-[#f11c07] text-xs px-3 py-1 text-white mb-2 inline-block rounded-md hover:bg-[#702772]">
                        Sports
                      </Link>
                      <ul className="mb-3">
                        <li className="text-[#666666] text-sm">
                          <span className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            quality{" "}
                          </span>
                          HD
                        </li>
                        <li className="text-[#666666] text-sm">
                          <span className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            Licence
                          </span>
                          For Other UseOnly
                        </li>
                        <li className="text-[#666666] text-sm">
                          <span className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            Rental Period
                          </span>
                          12 Months
                        </li>
                      </ul>
                      <div className="flex justify-between items-center mb-6">
                        <div className="w-6/12">
                          <p className="text-sm text-[#d44c47] font-medium">
                            October 03, 2024
                          </p>
                          <p className="text-sm text-[#666666] font-medium">
                            09:19 AM
                          </p>
                        </div>
                        <div className="w-6/12">
                          <p className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            amount received
                          </p>
                          <p className="text-sm text-[#666666] font-medium">
                            $0
                          </p>
                        </div>
                      </div>
                      <div className="border-t border-[#e9e6e6] pt-2 flex justify-center items-center gap-2">
                        <button className="bg-[#f11c07] text-xs px-4 py-2 text-white mb-0 inline-flex rounded-md hover:bg-[#702772] items-center">
                          <MdEdit className="text-sm mr-1" />
                          Edit
                        </button>
                        <button className="bg-[#f11c07] text-xs px-4 py-2 text-white mb-0 inline-flex rounded-md hover:bg-[#702772] items-center">
                          <MdDelete className="text-sm mr-1" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="dash_grid_box p-2.5">
                    <div className="mb-3">
                      <img
                        src={gridViewImg}
                        alt="gridViewImg"
                        className="w-full rounded-md"
                      />
                    </div>
                    <div>
                      <p className="text-[#333333] text-[15px] font-semibold pb-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <Link className="bg-[#f11c07] text-xs px-3 py-1 text-white mb-2 inline-block rounded-md hover:bg-[#702772]">
                        Sports
                      </Link>
                      <ul className="mb-3">
                        <li className="text-[#666666] text-sm">
                          <span className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            quality{" "}
                          </span>
                          HD
                        </li>
                        <li className="text-[#666666] text-sm">
                          <span className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            Licence
                          </span>
                          For Other UseOnly
                        </li>
                        <li className="text-[#666666] text-sm">
                          <span className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            Rental Period
                          </span>
                          12 Months
                        </li>
                      </ul>
                      <div className="flex justify-between items-center mb-6">
                        <div className="w-6/12">
                          <p className="text-sm text-[#d44c47] font-medium">
                            October 03, 2024
                          </p>
                          <p className="text-sm text-[#666666] font-medium">
                            09:19 AM
                          </p>
                        </div>
                        <div className="w-6/12">
                          <p className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            amount received
                          </p>
                          <p className="text-sm text-[#666666] font-medium">
                            $0
                          </p>
                        </div>
                      </div>
                      <div className="border-t border-[#e9e6e6] pt-2 flex justify-center items-center gap-2">
                        <button className="bg-[#f11c07] text-xs px-4 py-2 text-white mb-0 inline-flex rounded-md hover:bg-[#702772] items-center">
                          <MdEdit className="text-sm mr-1" />
                          Edit
                        </button>
                        <button className="bg-[#f11c07] text-xs px-4 py-2 text-white mb-0 inline-flex rounded-md hover:bg-[#702772] items-center">
                          <MdDelete className="text-sm mr-1" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="dash_grid_box p-2.5">
                    <div className="mb-3">
                      <img
                        src={gridViewImg}
                        alt="gridViewImg"
                        className="w-full rounded-md"
                      />
                    </div>
                    <div>
                      <p className="text-[#333333] text-[15px] font-semibold pb-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <Link className="bg-[#f11c07] text-xs px-3 py-1 text-white mb-2 inline-block rounded-md hover:bg-[#702772]">
                        Sports
                      </Link>
                      <ul className="mb-3">
                        <li className="text-[#666666] text-sm">
                          <span className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            quality{" "}
                          </span>
                          HD
                        </li>
                        <li className="text-[#666666] text-sm">
                          <span className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            Licence
                          </span>
                          For Other UseOnly
                        </li>
                        <li className="text-[#666666] text-sm">
                          <span className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            Rental Period
                          </span>
                          12 Months
                        </li>
                      </ul>
                      <div className="flex justify-between items-center mb-6">
                        <div className="w-6/12">
                          <p className="text-sm text-[#d44c47] font-medium">
                            October 03, 2024
                          </p>
                          <p className="text-sm text-[#666666] font-medium">
                            09:19 AM
                          </p>
                        </div>
                        <div className="w-6/12">
                          <p className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            amount received
                          </p>
                          <p className="text-sm text-[#666666] font-medium">
                            $0
                          </p>
                        </div>
                      </div>
                      <div className="border-t border-[#e9e6e6] pt-2 flex justify-center items-center gap-2">
                        <button className="bg-[#f11c07] text-xs px-4 py-2 text-white mb-0 inline-flex rounded-md hover:bg-[#702772] items-center">
                          <MdEdit className="text-sm mr-1" />
                          Edit
                        </button>
                        <button className="bg-[#f11c07] text-xs px-4 py-2 text-white mb-0 inline-flex rounded-md hover:bg-[#702772] items-center">
                          <MdDelete className="text-sm mr-1" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="dash_grid_box p-2.5">
                    <div className="mb-3">
                      <img
                        src={gridViewImg}
                        alt="gridViewImg"
                        className="w-full rounded-md"
                      />
                    </div>
                    <div>
                      <p className="text-[#333333] text-[15px] font-semibold pb-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <Link className="bg-[#f11c07] text-xs px-3 py-1 text-white mb-2 inline-block rounded-md hover:bg-[#702772]">
                        Sports
                      </Link>
                      <ul className="mb-3">
                        <li className="text-[#666666] text-sm">
                          <span className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            quality{" "}
                          </span>
                          HD
                        </li>
                        <li className="text-[#666666] text-sm">
                          <span className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            Licence
                          </span>
                          For Other UseOnly
                        </li>
                        <li className="text-[#666666] text-sm">
                          <span className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            Rental Period
                          </span>
                          12 Months
                        </li>
                      </ul>
                      <div className="flex justify-between items-center mb-6">
                        <div className="w-6/12">
                          <p className="text-sm text-[#d44c47] font-medium">
                            October 03, 2024
                          </p>
                          <p className="text-sm text-[#666666] font-medium">
                            09:19 AM
                          </p>
                        </div>
                        <div className="w-6/12">
                          <p className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            amount received
                          </p>
                          <p className="text-sm text-[#666666] font-medium">
                            $0
                          </p>
                        </div>
                      </div>
                      <div className="border-t border-[#e9e6e6] pt-2 flex justify-center items-center gap-2">
                        <button className="bg-[#f11c07] text-xs px-4 py-2 text-white mb-0 inline-flex rounded-md hover:bg-[#702772] items-center">
                          <MdEdit className="text-sm mr-1" />
                          Edit
                        </button>
                        <button className="bg-[#f11c07] text-xs px-4 py-2 text-white mb-0 inline-flex rounded-md hover:bg-[#702772] items-center">
                          <MdDelete className="text-sm mr-1" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="dash_grid_box p-2.5">
                    <div className="mb-3">
                      <img
                        src={gridViewImg}
                        alt="gridViewImg"
                        className="w-full rounded-md"
                      />
                    </div>
                    <div>
                      <p className="text-[#333333] text-[15px] font-semibold pb-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <Link className="bg-[#f11c07] text-xs px-3 py-1 text-white mb-2 inline-block rounded-md hover:bg-[#702772]">
                        Sports
                      </Link>
                      <ul className="mb-3">
                        <li className="text-[#666666] text-sm">
                          <span className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            quality{" "}
                          </span>
                          HD
                        </li>
                        <li className="text-[#666666] text-sm">
                          <span className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            Licence
                          </span>
                          For Other UseOnly
                        </li>
                        <li className="text-[#666666] text-sm">
                          <span className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            Rental Period
                          </span>
                          12 Months
                        </li>
                      </ul>
                      <div className="flex justify-between items-center mb-6">
                        <div className="w-6/12">
                          <p className="text-sm text-[#d44c47] font-medium">
                            October 03, 2024
                          </p>
                          <p className="text-sm text-[#666666] font-medium">
                            09:19 AM
                          </p>
                        </div>
                        <div className="w-6/12">
                          <p className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            amount received
                          </p>
                          <p className="text-sm text-[#666666] font-medium">
                            $0
                          </p>
                        </div>
                      </div>
                      <div className="border-t border-[#e9e6e6] pt-2 flex justify-center items-center gap-2">
                        <button className="bg-[#f11c07] text-xs px-4 py-2 text-white mb-0 inline-flex rounded-md hover:bg-[#702772] items-center">
                          <MdEdit className="text-sm mr-1" />
                          Edit
                        </button>
                        <button className="bg-[#f11c07] text-xs px-4 py-2 text-white mb-0 inline-flex rounded-md hover:bg-[#702772] items-center">
                          <MdDelete className="text-sm mr-1" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="dash_grid_box p-2.5">
                    <div className="mb-3">
                      <img
                        src={gridViewImg}
                        alt="gridViewImg"
                        className="w-full rounded-md"
                      />
                    </div>
                    <div>
                      <p className="text-[#333333] text-[15px] font-semibold pb-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <Link className="bg-[#f11c07] text-xs px-3 py-1 text-white mb-2 inline-block rounded-md hover:bg-[#702772]">
                        Sports
                      </Link>
                      <ul className="mb-3">
                        <li className="text-[#666666] text-sm">
                          <span className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            quality{" "}
                          </span>
                          HD
                        </li>
                        <li className="text-[#666666] text-sm">
                          <span className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            Licence
                          </span>
                          For Other UseOnly
                        </li>
                        <li className="text-[#666666] text-sm">
                          <span className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            Rental Period
                          </span>
                          12 Months
                        </li>
                      </ul>
                      <div className="flex justify-between items-center mb-6">
                        <div className="w-6/12">
                          <p className="text-sm text-[#d44c47] font-medium">
                            October 03, 2024
                          </p>
                          <p className="text-sm text-[#666666] font-medium">
                            09:19 AM
                          </p>
                        </div>
                        <div className="w-6/12">
                          <p className="text-[#700f2a] text-sm uppercase font-semibold mr-2">
                            amount received
                          </p>
                          <p className="text-sm text-[#666666] font-medium">
                            $0
                          </p>
                        </div>
                      </div>
                      <div className="border-t border-[#e9e6e6] pt-2 flex justify-center items-center gap-2">
                        <button className="bg-[#f11c07] text-xs px-4 py-2 text-white mb-0 inline-flex rounded-md hover:bg-[#702772] items-center">
                          <MdEdit className="text-sm mr-1" />
                          Edit
                        </button>
                        <button className="bg-[#f11c07] text-xs px-4 py-2 text-white mb-0 inline-flex rounded-md hover:bg-[#702772] items-center">
                          <MdDelete className="text-sm mr-1" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardCard;
