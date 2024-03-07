"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "../../../public/assests/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CheckIcon,
  FolderIcon,
  HashIcon,
  HourglassIcon,
  ShuffleIcon,
} from "lucide-react";
import ThemeToggler from "../ui/ThemeToggler";
type Props = {};

const Sidebar = (props: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLoginInfo, setShowLoginInfo] = useState(false);

  const menuItems = [
    {
      title: "Collection",
      path: "/collection",
      icon: FolderIcon,
    },
    {
      title: "In Progress",
      path: "/inprogress",
      icon: HourglassIcon,
    },
    {
      title: "Completed",
      path: "/completed",
      icon: CheckIcon,
    },
    {
      title: "Categories",
      path: "/categories",
      icon: HashIcon,
    },
    {
      title: "Random Suggestion",
      path: "/random",
      icon: ShuffleIcon,
    },
  ];

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={() => setShowSidebar((prev) => !prev)}
                className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/" className="ms-2 flex md:me-24">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl">
                  Anime Folio
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="ms-3 flex items-center gap-4">
                <ThemeToggler />
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                  onClick={() => setShowLoginInfo((prev) => !prev)}
                >
                  <span className="sr-only">Open user menu</span>
                  {/* <img
                      className="h-8 w-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    /> */}

                  <Avatar>
                    <AvatarImage src="https://cdn.waifu.im/7681.jpg" />
                    <AvatarFallback>Login</AvatarFallback>
                  </Avatar>
                </button>
                <div
                  className={cn(
                    "fixed right-4 top-10 z-50 my-4 list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700",
                    {
                      hidden: !showLoginInfo,
                    },
                  )}
                  id="dropdown-user"
                >
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 border-r border-gray-200 bg-white pt-20 transition-transform dark:border-gray-700 dark:bg-gray-800 sm:translate-x-0",
          { "-translate-x-full": !showSidebar },
        )}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-white px-3 pb-4 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {menuItems.map(({ title, path, icon: Icon }) => (
              <li key={title}>
                <a
                  href={path}
                  className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <Icon />
                  <span className="ms-3">{title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
