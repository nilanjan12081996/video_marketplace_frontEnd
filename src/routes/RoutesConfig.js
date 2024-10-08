import React from 'react';
import OutsideLayout from '../ui/layout/OutsideLayout.jsx';
import InsideLayout from '../ui/layout/InsideLayout.jsx';
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import Login from '../pages/Login/Login.jsx';
import Signup from '../pages/Signup/signup.jsx';
import ProjectCreate from '../pages/ProjectCreate/ProjectCreate.jsx';
import AboutUs from '../pages/AboutUs/AboutUs.jsx';
import ContactUs from '../pages/ContactUs/ContactUs.jsx';
import HowItWorks from '../pages/HowItWorks/HowItWorks.jsx';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy.jsx';
import TermsConditions from '../pages/TermsConditions/TermsConditions.jsx';
import Faq from '../pages/Faq/Faq.jsx';
import Careers from '../pages/Careers/Careers.jsx';
import Blog from '../pages/Blog/Blog.jsx';
import Payments from '../pages/Payments/Payments.jsx';
import AccountSettings from '../pages/AccountSettings/AccountSettings.jsx';
import UserActivation from '../pages/Signup/UserActivation.jsx';
import ProjectCreateMain from '../pages/ProjectCreate/ProjectCreationMain.jsx';

const Home = React.lazy(() => import('../pages/Home/home.jsx'));


const allRoutes = [
  {
    path: '/',
    element: <OutsideLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: '/login',
    element: <OutsideLayout />,
    children: [
      {
        index: true,
        element: <Login />
      },
    ],
  },
  {
    path: '/signup',
    element: <OutsideLayout />,
    children: [
      {
        index: true,
        element: <Signup />
      },
    ],
  },
  {
    path: '/auth/active-account/:id/:token',
    element: <OutsideLayout />,
    children: [
      {
        index: true,
        element: <UserActivation />
      }
    ]
  },
  {
    path: '/about-us',
    element: <OutsideLayout />,
    children: [
      {
        index: true,
        element: <AboutUs />
      },
    ],
  },
  {
    path: '/contact-us',
    element: <OutsideLayout />,
    children: [
      {
        index: true,
        element: <ContactUs />
      },
    ],
  },
  {
    path: '/how-it-works',
    element: <OutsideLayout />,
    children: [
      {
        index: true,
        element: <HowItWorks />
      },
    ],
  },
  {
    path: '/privacy-policy',
    element: <OutsideLayout />,
    children: [
      {
        index: true,
        element: <PrivacyPolicy />
      },
    ],
  },
  {
    path: '/terms-conditions',
    element: <OutsideLayout />,
    children: [
      {
        index: true,
        element: <TermsConditions />
      },
    ],
  },
  {
    path: '/faq',
    element: <OutsideLayout />,
    children: [
      {
        index: true,
        element: <Faq />
      },
    ],
  },
  {
    path: '/careers',
    element: <OutsideLayout />,
    children: [
      {
        index: true,
        element: <Careers />
      },
    ],
  },
  {
    path: '/blog',
    element: <OutsideLayout />,
    children: [
      {
        index: true,
        element: <Blog />
      },
    ],
  },
  {
    path: '/dashboard',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
    ],
  },
  {
    path: '/payments',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <Payments />
      },
    ],
  },
  {
    path: '/project-create',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <ProjectCreateMain />
      },
    ],
  },
  {
    path: '/account-settings',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <AccountSettings />
      },
    ],
  },

  {
    path: '*',
    element: 'Outside page not found',
  },
];
export default allRoutes;
