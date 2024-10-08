import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import {
  Label,
  Select,
  TextInput,
  Datepicker,
  Radio,
  Textarea,
} from "flowbite-react";
import { HiMiniPlusCircle } from "../../assets/icons";
import { coverphotoPlaceholder, profileUser } from "../../assets/images/images";

const AccountSettings = () => {
  return (
    <div>
      <div>
        <div className="py-0">
          <div className="max-w-4xl">
            <div className="account_setting_section">
              <Tabs>
                <TabList>
                  <Tab>Personal Details</Tab>
                  <Tab>Change Password</Tab>
                </TabList>

                <TabPanel>
                  <div className="pt-6">
                    <div className="common-section-box-content">
                      <div className="flex gap-8 mb-4">
                        <div className="account_user_section w-4/12">
                          &nbsp;
                        </div>
                        <div className="upload_cocer_section w-8/12">
                          &nbsp;
                        </div>
                      </div>
                      <div className="flex gap-6 mb-3">
                        <div className="w-6/12">
                          <div className="mb-1 block">
                            <Label>First Name</Label>
                          </div>
                          <TextInput id="base" type="text" sizing="md" />
                        </div>
                        <div className="w-6/12">
                          <div className="mb-1 block">
                            <Label>Last Name</Label>
                          </div>
                          <TextInput id="base" type="text" sizing="md" />
                        </div>
                      </div>
                      <div className="flex gap-6 mb-3">
                        <div className="w-6/12">
                          <div className="mb-1 block">
                            <Label>Email</Label>
                          </div>
                          <TextInput id="base" type="text" sizing="md" />
                        </div>
                        <div className="w-6/12">
                          <div className="mb-1 block">
                            <Label>Date of Birth</Label>
                          </div>
                          <Datepicker />
                        </div>
                      </div>
                      <div className="flex gap-6 mb-3">
                        <div className="w-6/12">
                          <div className="mb-1 block">
                            <Label>Phone</Label>
                          </div>
                          <TextInput id="base" type="text" sizing="md" />
                        </div>
                        <div className="w-6/12">
                          <div className="mb-1 block">
                            <Label>User Name</Label>
                          </div>
                          <TextInput id="base" type="text" sizing="md" />
                        </div>
                      </div>
                      <div className="flex gap-6 mb-3">
                        <div className="w-6/12">
                          <div className="mb-1 block">
                            <Label>Language Known</Label>
                          </div>
                          <Select required>
                            <option>Select</option>
                            <option>Albania</option>
                            <option>Arabic</option>
                          </Select>
                        </div>
                        <div className="w-6/12">
                          <div className="mb-1 block">
                            <Label>Gender</Label>
                          </div>
                          <div className="flex my-3">
                            <div className="flex items-center gap-2 mr-4">
                              <Radio id="male" name="gender" value="Male" />
                              <Label htmlFor="male">Male</Label>
                            </div>
                            <div className="flex items-center gap-2 mr-4">
                              <Radio id="female" name="gender" value="Female" />
                              <Label htmlFor="female">Female</Label>
                            </div>
                            <div className="flex items-center gap-2">
                              <Radio id="others" name="gender" value="Others" />
                              <Label htmlFor="others">Others</Label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="w-full">
                          <div className="mb-1 flex justify-between items-center">
                            <Label>Topic</Label>
                            <button className="bg-[#4aa455] text-white hover:bg-[#3c8645] rounded-md text-sm px-3 py-1.5 flex justify-center items-center">
                              <HiMiniPlusCircle className="text-base mr-1" />{" "}
                              Add Row
                            </button>
                          </div>
                          <TextInput
                            id="base"
                            type="text"
                            sizing="md"
                            placeholder="Add Topic"
                          />
                        </div>
                      </div>
                      <div className="flex gap-6 mb-3">
                        <div className="w-6/12">
                          <div className="mb-1 block">
                            <Label>Addresse</Label>
                          </div>
                          <TextInput id="base" type="text" sizing="md" />
                        </div>
                        <div className="w-6/12">
                          <div className="mb-1 block">
                            <Label>City</Label>
                          </div>
                          <TextInput id="base" type="text" sizing="md" />
                        </div>
                      </div>
                      <div className="flex gap-6 mb-3">
                        <div className="w-6/12">
                          <div className="mb-1 block">
                            <Label>State</Label>
                          </div>
                          <TextInput id="base" type="text" sizing="md" />
                        </div>
                        <div className="w-6/12">
                          <div className="mb-1 block">
                            <Label>Zip Code</Label>
                          </div>
                          <TextInput id="base" type="text" sizing="md" />
                        </div>
                      </div>
                      <div className="flex gap-6 mb-3">
                        <div className="w-6/12">
                          <div className="mb-1 block">
                            <Label>Country</Label>
                          </div>
                          <Select required>
                            <option>Select Country</option>
                            <option>Country 1</option>
                            <option>Country 2</option>
                          </Select>
                        </div>
                        <div className="w-6/12">&nbsp;</div>
                      </div>
                      <div className="mb-3">
                        <div className="w-full">
                          <div className="mb-1 block">
                            <Label>Short description about yourself</Label>
                          </div>
                          <Textarea
                            id="comment"
                            placeholder=""
                            required
                            rows={4}
                          />
                        </div>
                      </div>
                      <div className="flex gap-6 mb-3">
                        <div className="w-6/12">
                          <div className="mb-1 block">
                            <Label>Facebook Link</Label>
                          </div>
                          <TextInput id="base" type="text" sizing="md" />
                        </div>
                        <div className="w-6/12">
                          <div className="mb-1 block">
                            <Label>Instagram</Label>
                          </div>
                          <TextInput id="base" type="text" sizing="md" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="w-full">
                          <div className="mb-1 block">
                            <Label>Bio</Label>
                          </div>
                          <Textarea
                            id="comment"
                            placeholder=""
                            required
                            rows={4}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="w-full">
                          <div className="mb-1 block">
                            <Label>Website Link</Label>
                          </div>
                          <TextInput
                            id="base"
                            type="text"
                            sizing="md"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="flex justify-center items-center gap-4 my-6">
                        <button
                          type="submit"
                          className="bg-white text-[#707070] hover:bg-[#707070] border border-[#707070] hover:text-white px-7 py-2 rounded-md text-base font-medium"
                        >
                          Edit
                        </button>
                        <button
                          type="submit"
                          className="bg-[#ff1a03] text-white hover:bg-[#e51804] border border-[#e51804] px-7 py-2 rounded-md text-base font-medium"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="pt-6">
                    <div className="common-section-box-content">
                      <div className="mb-3">
                        <div className="w-full">
                          <div className="mb-1 block">
                            <Label>Old Password</Label>
                          </div>
                          <TextInput
                            id="base"
                            type="password"
                            sizing="md"
                            placeholder="Enter Old Password"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="w-full">
                          <div className="mb-1 block">
                            <Label>New Password</Label>
                          </div>
                          <TextInput
                            id="base"
                            type="password"
                            sizing="md"
                            placeholder="Enter New Password"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="w-full">
                          <div className="mb-1 block">
                            <Label>Confirm Password</Label>
                          </div>
                          <TextInput
                            id="base"
                            type="password"
                            sizing="md"
                            placeholder="Enter Confirm Password"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center items-center mt-5">
                        <button
                          type="submit"
                          className="bg-[#ff1a03] text-white hover:bg-[#484747] px-7 py-2.5 rounded-md text-sm uppercase font-medium"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
