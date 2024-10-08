import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { b01, b02, video_image } from "../../assets/images/images";
import { MdOutlineCalendarMonth } from "../../assets/icons";

const Blog = () => {
  return (
    <div>
      <div className="inner_banner loginImg relative">
        <div className="absolute w-full left-0 top-0 flex justify-center items-center h-full">
          <div>
            <h1 className="text-white text-[40px] font-medium">Blog</h1>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="max-w-7xl mx-auto">
          <div className="blog_section">
            <Tabs>
              <TabList>
                <Tab>All Posts</Tab>
                <Tab>Recent Posts</Tab>
              </TabList>

              <TabPanel>
                <div className="py-10">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="relative">
                      <div>
                        <img src={b01} alt="b01" className="rounded-xl" />
                      </div>
                      <div className="bg-[#ebebeb] absolute left-3 bottom-3 right-3 rounded-xl px-4 py-2 w-[94%]">
                        <div className="flex items-center mb-1">
                          <MdOutlineCalendarMonth className="text-[#ff1a03] text-xl mr-1" />
                          <p className="text-[#333333] font-normal text-base">
                            November 19, 2022
                          </p>
                        </div>
                        <p4 className="text-[#333333] font-bold text-base">
                          Why Do We Need A Video Marketplace...
                        </p4>
                      </div>
                    </div>
                    <div className="relative">
                      <div>
                        <img src={b02} alt="b02" className="rounded-xl" />
                      </div>
                      <div className="bg-[#ebebeb] absolute left-3 bottom-3 right-3 rounded-xl px-4 py-2 w-[94%]">
                        <div className="flex items-center mb-1">
                          <MdOutlineCalendarMonth className="text-[#ff1a03] text-xl mr-1" />
                          <p className="text-[#333333] font-normal text-base">
                            November 24, 2022
                          </p>
                        </div>
                        <p4 className="text-[#333333] font-bold text-base">
                          Blog 123
                        </p4>
                      </div>
                    </div>
                    <div className="relative">
                      <div>
                        <img src={b01} alt="b01" className="rounded-xl" />
                      </div>
                      <div className="bg-[#ebebeb] absolute left-3 bottom-3 right-3 rounded-xl px-4 py-2 w-[94%]">
                        <div className="flex items-center mb-1">
                          <MdOutlineCalendarMonth className="text-[#ff1a03] text-xl mr-1" />
                          <p className="text-[#333333] font-normal text-base">
                            November 30, 2022
                          </p>
                        </div>
                        <p4 className="text-[#333333] font-bold text-base">
                          Blog new
                        </p4>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="py-10">No data found</div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
