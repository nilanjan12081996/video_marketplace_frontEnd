import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import SidebarLinkGroup from "../layout/SidebarLinkGroup";
import { logo } from '../../assets/images/images';

import { useDispatch, useSelector } from 'react-redux';
import { AiFillSetting, AiOutlineShop, CiLogout, CiSettings, FaSackDollar, FaUsers, IoStar, LuUpload, MdOutlineSpaceDashboard, PiVideoDuotone, TiFlowMerge } from '../../assets/icons';
import { logout } from '../../reducers/AuthSlice';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  const dispatch = useDispatch();

  // const { dashboard } = useSelector((state: any) => state.plans);


  // const onHoverOpenSidebar = () => {
  //   setSidebarOpen(false);
  // }
  // useEffect(()=>{
  //      setSidebarOpen(true);
  // },[])

  const navigate = useNavigate();
  const onUploadPublish = () => {
    navigate("/project-create");
  };
const handleLogOut=()=>{
  dispatch(logout());
  navigate("/")
}
  return (
    <aside
      ref={sidebar}
      style={{zIndex:1}}
      className={`left-0 top-[56px] z-9999 flex w-72 rounded-0 flex-col overflow-y-hidden bg-white duration-300 ease-linear absolute h-screen lg:h-auto shadow-xl ${
        sidebarOpen ? 'translate-x-0 lg:static lg:w-24 lg:translate-x-0' : '-translate-x-full lg:translate-x-0 lg:static'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-0 pt-0 lg:py-0">
        <div className='w-full bg-[#ff1a03] py-[4px] pl-[20px] hidden lg:block'>
          <NavLink to="/">
            <img src={logo} alt="Logo" className='w-[80px]' />
          </NavLink>
        </div>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className='p-[16px]'>
        <button onClick={onUploadPublish} className='bg-[#e61f0c] text-base uppercase w-full rounded-md py-3 font-medium text-white hover:bg-[#333333] flex justify-center items-center'>
        
         { sidebarOpen ? 
            <>
            <LuUpload className='text-xl' />
            </>
            :
            <>
            <LuUpload className='text-[18px] mr-2' />
            Upload and publish
            </>
          }
      </button>
      </div>

      <div className="sidebar_menu no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear overscroll-none">
        {/* <!-- Sidebar Menu --> */}
        <nav className="">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to="/dashboard"
                  className={`group relative flex items-center ${ sidebarOpen ? 'justify-center' : 'justify-start' } 
                  gap-2 rounded-0 py-2 px-4 font-semibold text-sm text-gray-600 duration-300 ease-in-out ${pathname.includes('/dashboard') &&
                    ''
                    }`}
                >
                  { sidebarOpen ? 
                    <>
                    <MdOutlineSpaceDashboard className='text-xl' />
                    </>
                    :
                    <>
                    <MdOutlineSpaceDashboard className='text-xl' />
                    Dashboard
                    </>
                  }
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/payments"
                  className={`group relative flex items-center ${ sidebarOpen ? 'justify-center' : 'justify-start' } gap-2 rounded-0 py-2 px-4 font-semibold text-sm text-gray-600 duration-300 ease-in-out ${pathname.includes('/chatflows') &&
                    'bg-[#5e17eb] text-white'
                    }`}
                >
                   { sidebarOpen ? 
                    <>
                    <FaSackDollar className='text-base' />
                    </>
                    :
                    <>
                    <FaSackDollar className='text-base' />
                    Payments
                    </>
                  }
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/account-settings"
                  className={`group relative flex items-center ${ sidebarOpen ? 'justify-center' : 'justify-start' } gap-2 rounded-0 py-2 px-4 font-semibold text-sm text-gray-600 duration-300 ease-in-out ${pathname.includes('/chatflows') &&
                    'bg-[#5e17eb] text-white'
                    }`}
                >
                   { sidebarOpen ? 
                    <>
                    <CiSettings className='text-xl' />
                    </>
                    :
                    <>
                    <CiSettings className='text-xl' />
                    Account Settings
                    </>
                  }
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-uploaded-videos"
                  className={`group relative flex items-center ${ sidebarOpen ? 'justify-center' : 'justify-start' } gap-2 rounded-0 py-2 px-4 font-semibold text-sm text-gray-600 duration-300 ease-in-out ${pathname.includes('/marketplace') &&
                    'bg-[#5e17eb] text-white'
                    }`}
                >
                  { sidebarOpen ? 
                    <>
                     <PiVideoDuotone className='text-xl' />
                    </>
                    :
                    <>
                    <PiVideoDuotone className='text-xl' />
                    My Uploaded Videos
                    </>
                  }
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-purchased-videos"
                  className={`group relative flex items-center ${ sidebarOpen ? 'justify-center' : 'justify-start' } gap-2 rounded-0 py-2 px-4 font-semibold text-sm text-gray-600 duration-300 ease-in-out ${pathname.includes('/marketplace') &&
                    'bg-[#5e17eb] text-white'
                    }`}
                >
                  { sidebarOpen ? 
                    <>
                     <PiVideoDuotone className='text-xl' />
                    </>
                    :
                    <>
                    <PiVideoDuotone className='text-xl' />
                    My Purchased Videos
                    </>
                  }
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/followers"
                  className={`group relative flex items-center ${ sidebarOpen ? 'justify-center' : 'justify-start' } gap-2 rounded-0 py-2 px-4 font-semibold text-sm text-gray-600 duration-300 ease-in-out ${pathname.includes('/marketplace') &&
                    'bg-[#5e17eb] text-white'
                    }`}
                >
                  { sidebarOpen ? 
                    <>
                     <FaUsers className='text-xl' />
                    </>
                    :
                    <>
                    <FaUsers className='text-xl' />
                    Followers
                    </>
                  }
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/following"
                  className={`group relative flex items-center ${ sidebarOpen ? 'justify-center' : 'justify-start' } gap-2 rounded-0 py-2 px-4 font-semibold text-sm text-gray-600 duration-300 ease-in-out ${pathname.includes('/marketplace') &&
                    'bg-[#5e17eb] text-white'
                    }`}
                >
                   
                  { sidebarOpen ? 
                    <>
                     <IoStar className='text-xl' />
                    </>
                    :
                    <>
                    <IoStar className='text-xl' />
                    Following
                    </>
                  }
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-earnings"
                  className={`group relative flex items-center ${ sidebarOpen ? 'justify-center' : 'justify-start' } gap-2 rounded-0 py-2 px-4 font-semibold text-sm text-gray-600 duration-300 ease-in-out ${pathname.includes('/marketplace') &&
                    'bg-[#5e17eb] text-white'
                    }`}
                >
                   
                  { sidebarOpen ? 
                    <>
                     <FaSackDollar className='text-xl' />
                    </>
                    :
                    <>
                    <FaSackDollar className='text-xl' />
                    My Earnings
                    </>
                  }
                </NavLink>
              </li>
                          <li>
                <NavLink
                  to="/"
                  className={`group relative flex items-center ${ sidebarOpen ? 'justify-center' : 'justify-start' } gap-2 rounded-0 py-2 px-4 font-semibold text-sm text-gray-600 duration-300 ease-in-out ${pathname.includes('/marketplace') &&
                    'bg-[#5e17eb] text-white'
                    }`}
                >
                  
                  { sidebarOpen ? 
                    <>
                     <CiLogout className='text-xl' />
                    </>
                    :
                    <>
                    <CiLogout className='text-xl' />
                  <button onClick={handleLogOut}>  Logout</button>
                    </>
                  }
                </NavLink>
              </li>
            </ul>
          </div>

        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div >
    </aside >
  );
};

export default Sidebar;
