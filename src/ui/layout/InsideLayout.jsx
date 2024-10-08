import { useEffect, useState } from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/header";
import Sidebar from "../layout/Sidebar";
import HeaderIner from "../layout/HeaderIner";

const InsideLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-[#eeeeee]">
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
        {/* <!-- ===== Page Wrapper Start ===== --> */}
        <div className="lg:flex overflow-hidden p-0 temp_bg">
          {/* <!-- ===== Sidebar Start ===== --> */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Sidebar End ===== --> */}

          {/* <!-- ===== Content Area Start ===== --> */}
          <div className="relative flex flex-1 flex-col mb-24 py-0 mr-0 ml-0">
            {/* <!-- ===== Header Start ===== --> */}
            <HeaderIner
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Main Content Start ===== --> */}
            <main className="px-8 py-2">
              <div className="mx-auto lg:p-4 md:p-6 2xl:p-0">
                <Outlet />
              </div>
            </main>
            {/* <!-- ===== Main Content End ===== --> */}
          </div>
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
        {/* <!-- ===== Page Wrapper End ===== --> */}
      </div>
    </div>
  );
};

export default InsideLayout;
