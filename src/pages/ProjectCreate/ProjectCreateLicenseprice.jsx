import React from "react";

import {
  FileInput,
  Label,
  TextInput,
  Textarea,
  Tooltip,
  Select,
  Modal,
  Radio,
} from "flowbite-react";
import { Link } from "react-router-dom";
import {
  AiFillQuestionCircle,
  FaDollarSign,
  HiMiniPlusCircle,
  IoLocationSharp,
} from "../../assets/icons";

const ProjectCreateLicenseprice = ({ projectId }) => {
  return (
    <div>
      <div className="processCard">
        <div className="border-b border-[#D1D0D0] p-5">
          <h4 className="text-[#333333] text-[18px] font-medium">
            License and price
          </h4>
          <p className="text-[#666666] text-[15px] mt-[2px]">Step 3 of 4</p>
        </div>

        <div className="p-5">
          <div className="vdBox">
            <div className="flex gap-6">
              <div className="w-4/12">
                <div className="mb-6">
                  <div className="mb-1 block">
                    <Label value="Video quality" />
                  </div>
                  <div className="mb-4">
                    <Select id="" required>
                      <option value="1">HD</option>
                      <option value="2">4K</option>
                    </Select>
                  </div>
                  <div className="location_input border border-[#d4d4d4] bg-white rounded-md flex justify-start items-center">
                    <div className="px-3">
                      <FaDollarSign className="text-sm" />
                    </div>
                    <TextInput type="text" required />
                  </div>
                </div>
              </div>
              <div className="w-4/12">
                <div className="mb-6">
                  <div className="mb-1 block">
                    <Label value="Licence for" />
                  </div>
                  <div className="mb-4">
                    <Select id="" required>
                      <option>Cool Test</option>
                    </Select>
                  </div>
                  <div className="location_input border border-[#d4d4d4] bg-white rounded-md flex justify-start items-center">
                    <div className="px-3">
                      <FaDollarSign className="text-sm" />
                    </div>
                    <TextInput type="text" readOnly />
                  </div>
                </div>
              </div>
              <div className="w-4/12">
                <div className="vdContent">
                  <p>
                    Price for this <br></br> combination
                  </p>
                  <h4>$0</h4>
                </div>
              </div>
            </div>
            <div className="flex justify-end mr-[-21px]">
              <button className="bg-[#f6f6f6] text-[#54a233] border border-[#cecece] hover:text-[#ff1a03] text-sm font-medium px-4 py-2.5 rounded-tl-md flex justify-center items-center">
                <HiMiniPlusCircle className="text-[18px] mr-1" /> Add New
                Combination
              </button>
            </div>
          </div>
        </div>

        <div className="exclusive_not_section p-5">
          <div className="mb-4">
            <div className="mb-1 block">
              <Label value="Exclusive or Not?" />
            </div>
            <div className="flex">
              <div className="flex items-center gap-2 mr-4">
                <Radio id="yes" name="countries" value="Germany" />
                <Label htmlFor="yes">Yes</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="no" name="countries" value="Spain" />
                <Label htmlFor="no">No</Label>
              </div>
            </div>
          </div>
          <div className="w-7/12 mb-2">
            <div className="mb-0 block">
              <Label value="Exclusive Amount" />
            </div>
            <TextInput type="text" required />
          </div>
        </div>

        <div className="border-t border-[#D1D0D0] p-5">
          <div className="flex justify-end items-center">
            <button className="border border-[#707070] font-medium rounded-md text-base py-1.5 px-8 hover:bg-[#707070] hover:text-white mr-3">
              Back
            </button>
            <button className="border border-[#707070] font-medium rounded-md text-base py-1.5 px-8 hover:bg-[#707070] hover:text-white mr-3">
              Save As Draft
            </button>
            <button className="border border-[#ff1a03] bg-[#ff1a03] font-medium rounded-md text-base py-1.5 px-8 text-white mr-0 hover:bg-[#e51804]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCreateLicenseprice;
