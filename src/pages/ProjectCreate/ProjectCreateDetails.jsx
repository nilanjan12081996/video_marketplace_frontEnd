import React from "react";

import {
  FileInput,
  Label,
  TextInput,
  Textarea,
  Tooltip,
  Select,
  Modal,
} from "flowbite-react";
import { Link } from "react-router-dom";
import {
  AiFillQuestionCircle,
  HiMiniPlusCircle,
  IoLocationSharp,
} from "../../assets/icons";

import { useState } from "react";

const ProjectCreateDetails = () => {
  const [openAddPlaylistModal, setOpenAddPlaylistModal] = useState(false);
  const [openAddEventModal, setOpenAddEventModal] = useState(false);
  return (
    <div>
      <div className="processCard">
        <div className="border-b border-[#D1D0D0] p-5">
          <h4 className="text-[#333333] text-[18px] font-medium">Details</h4>
          <p className="text-[#666666] text-[15px] mt-[2px]">Step 2 of 4</p>
        </div>
        <div className="p-5">
          <div className="mb-3">
            <div className="mb-0 block">
              <Label value="Select a category" />
            </div>
            <Select id="countries" required>
              <option>Select a category</option>
              <option>Family</option>
              <option>Drone</option>
              <option>War</option>
            </Select>
          </div>
          <div className="mb-4">
            <div className="flex items-center pb-2">
              <Label htmlFor="keyword-suggestion" value="Select a playlist" />
              <Tooltip content="Add Content" className="text-xs">
                <AiFillQuestionCircle className="text-[18px]" />
              </Tooltip>
            </div>
            <div className="flex items-center">
              <div className="w-10/12">
                <Select id="countries" required>
                  <option>Select playlist</option>
                  <option>Wine 1</option>
                  <option>Playlist 1</option>
                  <option>Winter</option>
                </Select>
              </div>
              <div className="w-2/12">
                <button
                  onClick={() => setOpenAddPlaylistModal(true)}
                  className="bg-[#ff1a03] text-white text-sm font-medium px-4 py-2.5 rounded-md flex justify-center items-center"
                >
                  <HiMiniPlusCircle className="text-[18px] mr-1" /> Add New
                  Playlist
                </button>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="flex items-center pb-2">
              <Label htmlFor="keyword-suggestion" value="Keyword suggestion" />
              <Tooltip content="Add Content" className="text-xs">
                <AiFillQuestionCircle className="text-[18px]" />
              </Tooltip>
            </div>
          </div>
          <div className="mb-4">
            <Link className="text-sm font-medium text-[#ff1a03] hover:text-black">
              See More
            </Link>
          </div>
          <div className="mb-4">
            <div className="flex items-center pb-2">
              <Label htmlFor="keyword-suggestion" value="Select a Event" />
              <Tooltip content="Add Content" className="text-xs">
                <AiFillQuestionCircle className="text-[18px]" />
              </Tooltip>
            </div>
            <div className="flex items-center">
              <div className="w-10/12">
                <Select id="countries" required>
                  <option>Select playlist</option>
                  <option>Hello</option>
                  <option>Test 1</option>
                  <option>Test</option>
                </Select>
              </div>
              <div className="w-2/12">
                <button
                  onClick={() => setOpenAddEventModal(true)}
                  className="bg-[#ff1a03] text-white text-sm font-medium px-4 py-2.5 rounded-md flex justify-center items-center"
                >
                  <HiMiniPlusCircle className="text-[18px] mr-1" /> Add New
                  Event
                </button>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="flex items-center pb-2">
              <Label htmlFor="keyword-suggestion" value="Location" />
              <Tooltip content="Add Content" className="text-xs">
                <AiFillQuestionCircle className="text-[18px]" />
              </Tooltip>
            </div>
            <div className="location_input border border-[#d4d4d4] bg-white rounded-md flex justify-start items-center">
              <div className="px-3">
                <IoLocationSharp className="text-[18px]" />
              </div>
              <TextInput type="text" required />
            </div>
          </div>
        </div>
        <div className="border-t border-[#D1D0D0] p-5">
          <div className="flex justify-end items-center">
            <button className="border border-[#707070] font-medium rounded-md text-base py-1.5 px-8 hover:bg-[#707070] hover:text-white mr-3">
              Back
            </button>
            <button className="border border-[#ff1a03] bg-[#ff1a03] font-medium rounded-md text-base py-1.5 px-8 text-white mr-0 hover:bg-[#e51804]">
              Next
            </button>
          </div>
        </div>
      </div>
      {/* Add New Playlist start here */}
      <Modal
        show={openAddPlaylistModal}
        onClose={() => setOpenAddPlaylistModal(false)}
      >
        <Modal.Header className="flex items-center py-2.5">
          <h3 className="text-xl">Add New Playlist</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="popup_area">
            <div className="mb-2">
              <div className="mb-0 block">
                <Label value="Enter Name" />
              </div>
              <TextInput
                type="text"
                required
                placeholder="Enter Name"
                className="bg-white"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex justify-center items-center w-full">
            <button
              onClick={() => setOpenAddPlaylistModal(false)}
              className="border border-[#ff1a03] bg-[#ff1a03] font-medium rounded-md text-base py-1.5 px-8 text-white mr-0 hover:bg-[#e51804]"
            >
              Save
            </button>
          </div>
        </Modal.Footer>
      </Modal>
      {/* Add New Playlist ends here */}

      {/* Add New Event start here */}
      <Modal
        show={openAddEventModal}
        onClose={() => setOpenAddEventModal(false)}
      >
        <Modal.Header className="flex items-center py-2.5">
          <h3 className="text-xl">Add New Event</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="popup_area">
            <div className="mb-2">
              <div className="mb-0 block">
                <Label value="Enter Name" />
              </div>
              <TextInput
                type="text"
                required
                placeholder="Enter Name"
                className="bg-white"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex justify-center items-center w-full">
            <button
              onClick={() => setOpenAddEventModal(false)}
              className="border border-[#ff1a03] bg-[#ff1a03] font-medium rounded-md text-base py-1.5 px-8 text-white mr-0 hover:bg-[#e51804]"
            >
              Save
            </button>
          </div>
        </Modal.Footer>
      </Modal>
      {/* Add New Event ends here */}
    </div>
  );
};

export default ProjectCreateDetails;
