import { useState } from 'react';

import Control from '../../assets/control.png';

import Logo from '../../assets/logo.png';

import { FcBusinessman } from 'react-icons/fc';
import { FcViewDetails } from 'react-icons/fc';
import { FcTodoList } from 'react-icons/fc';
import { FcPortraitMode } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const AdminSidebar = ({ children }) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: 'Users', src: <FcPortraitMode size={'30px'} /> },
    {
      title: 'All Legal Service Providers',
      src: <FcPortraitMode size={'30px'} />,
    },
    { title: 'Advocates', src: <FcBusinessman size={'30px'} /> },
    { title: 'Notaries', src: <FcBusinessman size={'30px'} /> },
    { title: 'Document Writers', src: <FcBusinessman size={'30px'} /> },
    { title: 'Mediators', src: <FcBusinessman size={'30px'} /> },
    { title: 'Arbitrators', src: <FcBusinessman size={'30px'} /> },
    {
      title: 'Complain Recieved',
      src: <FcViewDetails size={'30px'} />,
      gap: true,
    },
    { title: 'Verification Status', src: <FcTodoList size={'30px'} /> },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? 'w-72' : 'w-20 '
        } bg-dark-red h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={Control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={Logo}
            className={`cursor-pointer duration-500 ${
              open && 'rotate-[360deg]'
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && 'scale-0'
            }`}
          >
            Admin Dashboard
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link to={`/${Menu.title}Page`}>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${
                  index === 0 && 'bg-light-white'
                } `}
              >
                {Menu.src}
                <span
                  className={`${
                    !open && 'hidden'
                  } origin-left duration-200 text-lg`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">{children}</div>
    </div>
  );
};
export default AdminSidebar;
