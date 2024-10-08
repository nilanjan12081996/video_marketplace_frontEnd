import React from "react";
import {
  FaEnvelope,
  IoLocationSharp,
  LiaPhoneVolumeSolid,
} from "../../assets/icons";

import { Label, TextInput, Textarea } from "flowbite-react";

const ContactUs = () => {
  return (
    <div>
      <div className="inner_banner loginImg relative">
        <div className="absolute w-full left-0 top-0 flex justify-center items-center h-full">
          <div>
            <h1 className="text-white text-[40px] font-medium">Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex">
            <div className="w-6/12">
              <h3 className="text-[#ff1a03] text-2xl font-medium pb-3">
                Help & Support 24/7
              </h3>
              <p className="text-[#716c85] text-[15px] font-medium mb-5">
                Our support team is available 24/7 to help our user community
              </p>
              <div className="flex items-center mb-4">
                <div className="bg-[#ff1a03] w-[50px] h-[50px] rounded-full text-center flex items-center justify-center text-white text-2xl mr-2">
                  <LiaPhoneVolumeSolid />
                </div>
                <div>
                  <p className="text-[#716C85] text-sm font-medium mb-0">
                    Call Us
                  </p>
                  <p className="text-[#211D34] text-base font-medium">
                    +972-50-5805767
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="bg-[#ff1a03] w-[50px] h-[50px] rounded-full text-center flex items-center justify-center text-white text-2xl mr-2">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-[#716C85] text-sm font-medium mb-0">
                    Send us an email
                  </p>
                  <p className="text-[#211D34] text-base font-medium">
                    xtremelongshot@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="bg-[#ff1a03] w-[50px] h-[50px] rounded-full text-center flex items-center justify-center text-white text-2xl mr-2">
                  <IoLocationSharp />
                </div>
                <div>
                  <p className="text-[#716C85] text-sm font-medium mb-0">
                    Location
                  </p>
                  <p className="text-[#211D34] text-base font-medium">
                    Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="w-6/12">
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
                <div className="mb-3">
                  <div className="w-full">
                    <div className="mb-1 block">
                      <Label>
                        Subject<span className="text-[#ff1a03]">*</span>
                      </Label>
                    </div>
                    <TextInput id="base" type="text" sizing="md" />
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
      <div className="mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52904982.30701059!2d-161.63381262936832!3d35.96986412592902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1728035634408!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
