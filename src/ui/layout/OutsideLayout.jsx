/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { Suspense } from "react";
import ScrollToTop from "../../pages/ScrollToTop/ScrollToTop";

const OutsideLayout = ({ children }) => {
  return (
    <div className="container-fluid overflow-hidden p-0">
      <ScrollToTop />
      <Header />
      <div className="wrapper_section mb-0 pt-0 lg:pt-0 md:pt-0">
        <div className="w-full mx-auto">
          <div className="w-full">
            <Suspense fallback={"loading.."}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default OutsideLayout;
