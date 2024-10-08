import React from "react";

import { Label, TextInput, Textarea, Select } from "flowbite-react";

const Careers = () => {
  return (
    <div>
      <div className="inner_banner loginImg relative">
        <div className="absolute w-full left-0 top-0 flex justify-center items-center h-full">
          <div>
            <h1 className="text-white text-[40px] font-medium">Careers</h1>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="max-w-7xl mx-auto">
          <div className="px-0 w-7/12 mx-auto">
            <div className="contact-right-section">
              <div className="flex gap-6 mb-3">
                <div className="w-6/12">
                  <div className="mb-1 block">
                    <Label>
                      Name<span className="text-[#ff1a03]">*</span>
                    </Label>
                  </div>
                  <TextInput id="base" type="text" sizing="md" />
                </div>
                <div className="w-6/12">
                  <div className="mb-1 block">
                    <Label>
                      Email Address<span className="text-[#ff1a03]">*</span>
                    </Label>
                  </div>
                  <TextInput id="base" type="email" sizing="md" />
                </div>
              </div>

              <div className="flex gap-6 mb-3">
                <div className="w-6/12">
                  <div className="mb-1 block">
                    <Label>
                      Mobile No.<span className="text-[#ff1a03]">*</span>
                    </Label>
                  </div>
                  <TextInput id="base" type="text" sizing="md" />
                </div>
                <div className="w-6/12">
                  <div className="mb-1 block">
                    <Label>
                      Job Type<span className="text-[#ff1a03]">*</span>
                    </Label>
                  </div>
                  <Select required>
                    <option>Select</option>
                    <option>Family</option>
                    <option>Drone</option>
                    <option>Politics</option>
                    <option>Social</option>
                    <option>Food</option>
                  </Select>
                </div>
              </div>
              <div className="w-full mb-4">
                <div className="mb-1 block">
                  <Label>
                    Your message<span className="text-[#ff1a03]">*</span>
                  </Label>
                </div>
                <Textarea id="comment" placeholder="" required rows={4} />
              </div>
              <button
                type="submit"
                className="bg-[#ff1a03] text-white hover:bg-[#484747] px-6 py-3 rounded-md text-base uppercase font-medium"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
