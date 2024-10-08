import React from 'react'
import { Link } from 'react-router-dom';
import { logo, menuIcon, menuIcon2 } from '../../assets/images/images';

import DropdownMessage from '../../components/DropdownMessage';
import DropdownNotification from '../../components/DropdownNotification';
import { BiMenu } from "react-icons/bi";
import { FiAlignLeft } from 'react-icons/fi';
import { PiUserList } from 'react-icons/pi';
import { TiThMenu } from 'react-icons/ti';
import DropdownUser from '../../components/DropdownUser';
import { CgMenuLeft, IoLanguage, MdOutlineLightMode } from '../../assets/icons';

function HeaderIner(props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) {


  return (
    <div className="z-10 sticky top-0 z-999 flex bg-[#ff1a03] ml-0 rounded-0 mb-6">
        <div className="flex flex-grow items-center justify-between px-4 lg:px-6 py-1 lg:py-3 shadow-2">

                {props.sidebarOpen ?
                    <div className="flex items-center gap-2 sm:gap-4">
                        {/* <!-- Hamburger Toggle BTN --> */}
                        <button
                            aria-controls="sidebar"
                            onClick={(e) => {
                                e.stopPropagation();
                                props.setSidebarOpen(!props.sidebarOpen);
                            }}
                            className="z-99999 block p-0 dark:border-strokedark dark:bg-boxdark mr-3"
                        >
                            <CgMenuLeft className='text-3xl text-white' />
                        </button>
                    </div>

                    :

                    ""

                }


                {props.sidebarOpen ?

                    ""

                    :

                    <div className=''>
                        <div className="flex items-center gap-2 sm:gap-4">
                            {/* <!-- Hamburger Toggle BTN --> */}
                            <button
                                aria-controls="sidebar"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    props.setSidebarOpen(!props.sidebarOpen);
                                }}
                                className="z-99999 block p-0 dark:border-strokedark dark:bg-boxdark mr-3"
                            >
                                <CgMenuLeft className='text-3xl text-white' />
                            </button>
                        </div>
                    </div>

                }

            <div className="hidden sm:block"> &nbsp;</div>

            <div className="flex items-center gap-4">
                {/* <button className='text-black text-2xl hover:text-[#E72051]'>
                    <IoLanguage />
                </button>
                <button className='text-black text-2xl hover:text-[#E72051]'>
                    <MdOutlineLightMode />
                </button> */}
                <ul className="flex items-center gap-2 2xsm:gap-4">
                    {/* <!-- Notification Menu Area --> */}
                    <DropdownNotification />
                    {/* <!-- Notification Menu Area --> */}
                </ul>

                {/* <!-- User Area --> */}
                <DropdownUser />
                {/* <!-- User Area --> */}
            </div>
        </div>
    </div>
  );
}

export default HeaderIner;
