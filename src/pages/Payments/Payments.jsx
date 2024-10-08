import React from "react";

const Payments = () => {
  return (
    <div>
      <div className="main_dashbord_area mb-4 mt-0">
        <div className="py-4 px-6 border-b border-[#dddddd]">
          <h4 className="text-[#702772] text-[18px] leading-[22px] mb-0 font-semibold uppercase">
            Balance
          </h4>
        </div>
        <div className="dashboard_grid">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[#212529] text-[18px]">
                Your balance is <span className="font-semibold">$0</span>
              </p>
            </div>
            <div>
              <button className="bg-[#ff1a03] px-5 py-3 text-white text-sm font-medium rounded-md hover:bg-[#e31b07]">
                Get Paid Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="main_dashbord_area mb-0 mt-0">
        <div className="py-4 px-6">
          <h4 className="text-[#702772] text-[18px] leading-[22px] mb-0 font-semibold uppercase">
            Payment Details
          </h4>
        </div>
        <div className="dashboard_grid py-3 border-t border-[#dddddd]">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-[#4e4e4e] text-base font-medium pb-1">
                Last Payment
              </h3>
              <p className="text-[#727272] text-sm">
                Sep 26, 2022 to localBank
              </p>
            </div>
            <div>
              <button className="bg-[#ffedeb] border border-[#e31b07] px-3 py-2 text-[#e31b07] text-xs font-medium rounded-md hover:bg-[#e31b07] hover:text-white">
                View Payments
              </button>
            </div>
          </div>
        </div>
        <div className="dashboard_grid py-3 border-t border-[#dddddd]">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-[#4e4e4e] text-base font-medium pb-1">
                Last Payment
              </h3>
              <p className="text-[#727272] text-sm">
                Sep 26, 2022 to localBank
              </p>
            </div>
            <div>
              <button className="bg-[#ffedeb] border border-[#e31b07] px-3 py-2 text-[#e31b07] text-xs font-medium rounded-md hover:bg-[#e31b07] hover:text-white">
                View Payments
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="main_dashbord_area">
        <div className="dashboard_grid py-4 px-6">
          <div className="flex justify-between items-center">
            <h4 className="text-[#702772] text-[18px] leading-[22px] mb-0 font-semibold uppercase">
              Payment Method
            </h4>
            <div>
              <button className="bg-[#ff1a03] px-3 py-2 text-white text-xs font-medium rounded-md hover:bg-[#e31b07]">
                Add Method
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
