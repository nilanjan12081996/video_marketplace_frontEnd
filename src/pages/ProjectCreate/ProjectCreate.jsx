import React from "react";

import { FileInput, Label, TextInput, Textarea, Tooltip } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiFillQuestionCircle } from "../../assets/icons";

const ProjectCreate = () => {
  return (
    <div className="processCard">
      <div className="border-b border-[#D1D0D0] p-5">
        <h4 className="text-[#333333] text-[18px] font-medium">
          Upload Video Footage, Title & Description
        </h4>
        <p className="text-[#666666] text-[15px] mt-[2px]">Step 1 of 4</p>
      </div>
      <div className="p-5">
        <div className="mb-2">
          <div>
            <Label
              htmlFor="file-upload-helper-text"
              value="Upload your content"
              className="pb-2"
            />
          </div>
          <div className="flex w-full items-center justify-center">
            <Label
              htmlFor="dropzone-file"
              className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#ff1a03] bg-[#f9f9f9] hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <svg
                  className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <FileInput id="dropzone-file" className="hidden" />
            </Label>
          </div>
          <p className="text-sm font-normal flex items-center mt-1 text-[#666666]">
            Videos must be .mov or .mp4 format{" "}
            <Tooltip content="Add Content" className="text-xs">
              <AiFillQuestionCircle className="text-[18px] mx-1" />
            </Tooltip>
            <Link className="text-[#0A77E3] font-medium underline hover:text-[#ff1a03] hover:no-underline">
              Check the criteria
            </Link>
          </p>
        </div>
        <div className="choose_file_area mb-2">
          <div className="flex items-center pb-2">
            <Label
              htmlFor="file-upload-helper-text"
              value="Add a thumbnail image"
            />
            <Tooltip content="Add Content" className="text-xs">
              <AiFillQuestionCircle className="text-[18px]" />
            </Tooltip>
          </div>
          <FileInput
            id="file-upload-helper-text"
            helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
          />
        </div>
        <div className="mb-2">
          <div className="mb-0 block">
            <Label value="Write a title for your content" />
          </div>
          <TextInput type="text" required />
        </div>
        <div className="mb-3">
          <div className="mb-1 block">
            <Label htmlFor="comment" value="Here are some good examples:" />
          </div>
          <ul className="pl-4">
            <li className="text-[#666666] text-sm list-disc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="text-[#666666] text-sm list-disc">
              Suspendisse ante leo, molestie quis odio eu, malesuada
              sollicitudin orci.
            </li>
            <li className="text-[#666666] text-sm list-disc">
              Sed quis urna varius nisl dictum rhoncus vel ut nibh.
            </li>
          </ul>
        </div>
        <div className="mb-2">
          <div className="mb-0 block">
            <Label htmlFor="comment" value="Description" />
          </div>
          <Textarea id="comment" placeholder="Description" required rows={4} />
          <p className="text-sm text-[#6c757d] text-right pt-1">
            0/200 characters (minimum 50)
          </p>
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
  );
};

export default ProjectCreate;
