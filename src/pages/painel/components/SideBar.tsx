import { AuthContext } from "@/shared/contexts/AuthContext";
import { PowerIcon } from "@heroicons/react/24/outline";
import {
  UserGroupIcon,
  CalendarIcon,
  DocumentChartBarIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const SideBar = ({ children }: { children: React.ReactNode }) => {
  const { signOutUser } = useContext(AuthContext)
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Home");

  const Menus = [
    { title: "Clientes", path: "/clientes", icon: <UserGroupIcon className="w-5 h-5" /> },
    { title: "Funcionarios", path: "/funcionarios", icon: <UserGroupIcon className="w-5 h-5" /> },
    {
      title: "Calendário IOB",
      path: "/calendário-iob",
      icon: <CalendarIcon className="w-5 h-5" />,
    },
    {
      title: "Dados do IOB",
      path: "/dados-iob",
      icon: <DocumentChartBarIcon className="w-5 h-5" />,
    },
  ];
  return (
    <div className={`flex bg-zinc-200 min-h-screen`}>
      <nav
        className={`${
          open ? "w-60" : "w-20"
        } md:min-h-screen h-auto bg-[#427386] relative duration-200 shadow-lg flex flex-col justify-between`}
        >
        <div>
        <button
          className={`w-8 h-8 border-2 rounded-full mt-4 ml-auto bg-zinc-200 text-blue-600 absolute -right-3 duration-300 transition-all ${
            !open ? "rotate-180" : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          <ChevronLeftIcon className="w-6" />
        </button>
        <div
          className={`flex items-center ${
            open ? "w-52" : "w-11"
          } h-8 bg-[#305a6b] rounded-md px-2 mt-16 ml-5 mr-4 transition-all`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-white w-5 h-5 block cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="search"
            placeholder="Pesquisar"
            className={`text-base bg-transparent rounded-none ${
              open ? "w-44" : "hidden"
            } focus:outline-none focus:ring-0 ml-2 text-white overflow-hidden transition-all`}
          />
        </div>
        <ul className="pt-2">
          {Menus.map((menu, index) => (
              <li
                key={index}
                className={`text-base font-semibold relative flex items-center gap-x-3 p-4 cursor-pointer hover:bg-[#305a6b] rounded-md m-4 trasition-all ${
                  selectedTab === menu.title && "bg-blue-500"
                }`}
                onClick={() => {
                  setSelectedTab(menu.title);
                  navigate(menu.path);
                }}
              >
                <span className="text-white">{menu.icon}</span>
                <span className={`text-white ${!open && "hidden"}`}>{menu.title}</span>
              </li>
          ))}
          </ul>
          </div>
          
          <div>
          <li className="text-base font-semibold flex items-center gap-x-3 p-4 cursor-pointer hover:bg-[#305a6b] rounded-md m-4" onClick={() => signOutUser()}>
            <span className="text-white">
                <PowerIcon className="w-5 h-5"/>
            </span>
            <span className={`text-white ${!open && "hidden"}`}>Sair</span>
          </li>
          </div>
      </nav>

      {children}
    </div>
  );
};

export default SideBar;