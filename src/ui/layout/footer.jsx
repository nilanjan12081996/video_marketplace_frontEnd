import { Link } from "react-router-dom";
import { logo } from "../../assets/images/images";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "../../assets/icons";
const Footer = () => {
  return (
    <div className="footer_container px-0 lg:px-0">
      <div className="bg-[#505050] py-6 px-6 lg:px-0 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex">
            <div className="w-full text-center lg:text-left lg:w-5/12 lg:pr-20 mb-5 lg:mb-0">
              <img src={logo} className="inline-block mb-5 w-3/12" />
              <p className="text-[#ececec] text-base font-roboto">
                Xtreme long shot provides editorial videos for (news, current
                affairs shows, document films) Broadcast TV & Internet.
              </p>
            </div>
            <div className="w-full lg:w-7/12 text-center lg:text-left">
              <div className="md:flex">
                <div className="w-full lg:w-4/12 mb-5 lg:mb-0">
                  <h3 className="text-[#ececec] text-base font-medium mb-4">
                    Company & Info
                  </h3>
                  <ul>
                    <li className="pb-2">
                      <Link
                        className="text-[#ececec] text-sm hover:text-[#ff1a03]"
                        to="/about-us"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="pb-2">
                      <Link
                        className="text-[#ececec] text-sm hover:text-[#ff1a03]"
                        to="/how-it-works"
                      >
                        How It Works
                      </Link>
                    </li>
                    <li className="pb-2">
                      <Link
                        className="text-[#ececec] text-sm hover:text-[#ff1a03]"
                        to="/careers"
                      >
                        Careers
                      </Link>
                    </li>
                    <li className="pb-2">
                      <Link
                        className="text-[#ececec] text-sm hover:text-[#ff1a03]"
                        to="/blog"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 mb-5 lg:mb-0">
                  <ul className="mt-10">
                    <li className="pb-2">
                      <Link
                        className="text-[#ececec] text-sm hover:text-[#ff1a03]"
                        to="/"
                      >
                        Categories
                      </Link>
                    </li>
                    <li className="pb-2">
                      <Link
                        className="text-[#ececec] text-sm hover:text-[#ff1a03]"
                        to="/privacy-policy"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="pb-2">
                      <Link
                        className="text-[#ececec] text-sm hover:text-[#ff1a03]"
                        to="/terms-conditions"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li className="pb-2">
                      <Link
                        className="text-[#ececec] text-sm hover:text-[#ff1a03]"
                        to="/faq"
                      >
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12">
                  <h3 className="text-white text-[18px] mb-4">Follow Us</h3>
                  <div className="mb-4">
                    <ul className="flex">
                      <li>
                        <Link className="text-[#25447b] bg-white rounded-md w-[35px] h-[35px] flex justify-center items-center hover:bg-[#ff1a03] hover:text-white mr-1">
                          <FaFacebookF className="text-base" />
                        </Link>
                      </li>
                      <li>
                        <Link className="text-[#25447b] bg-white rounded-md w-[35px] h-[35px] flex justify-center items-center hover:bg-[#ff1a03] hover:text-white mr-1">
                          <FaInstagram className="text-base" />
                        </Link>
                      </li>
                      <li>
                        <Link className="text-[#25447b] bg-white rounded-md w-[35px] h-[35px] flex justify-center items-center hover:bg-[#ff1a03] hover:text-white mr-1">
                          <FaLinkedin className="text-base" />
                        </Link>
                      </li>
                      <li>
                        <Link className="text-[#25447b] bg-white rounded-md w-[35px] h-[35px] flex justify-center items-center hover:bg-[#ff1a03] hover:text-white mr-1">
                          <FaTwitter className="text-base" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-white text-[18px] airbnbcereal_regular mb-2">
                    Contact Us
                  </h3>
                  <p className="text-white text-sm airbnbcereal_regular pb-2">
                    xtremelongshot@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#505050] border-t border-[#61666b] py-5">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#ececec] text-[15px] text-center airbnbcereal_regular">
            Copyright © 2024 Xtreme long shot. All rights are reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
