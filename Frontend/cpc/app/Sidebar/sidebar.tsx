"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faUserGroup,
  faCalendarDays,
  faGear,
  faRightFromBracket,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../public/logo.png";
import Image from "next/image";
import "flowbite";
import { usePathname } from "next/navigation";
import { getGroups } from "@/utils/getters";
import useSWR from "swr";

export default function SideBar() {

  const pathname = usePathname();
  const [isPostsSelected, setIsPostsSelected] = useState<boolean>(false);

  const { data } = useSWR("placeholder", getGroups);

  useEffect(() => {
    if (pathname.includes('/posts')) {
      setIsPostsSelected(true);
    } else {
      setIsPostsSelected(false);
    }
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 h-screen bg-primary w-64 overflow-y-auto">
      <div className="p-4 flex items-center gap-3">
        <Image
          src={logo}
          alt="Your Alt Text"
          width={40}
          className="rounded-full"
        />
        <p className="text-black text-xl font-bold">CPC</p>
      </div>
      <ul className="p-2">
        <li className={`sidebar__li ${isPostsSelected ? "bg-secondary" : ""}`}>
          <a href="/posts" className={`${isPostsSelected ? "text-white" : ""}`}>
            <FontAwesomeIcon icon={faComment}
              className={`icon ${isPostsSelected ? "text-white" : "text-black"}`} />
            Publicaciones{" "}
          </a>
        </li>
        <li className="mb-[15px]">
          <button
            className={`flex items-center justify-start w-full h-full hover:bg-secondary p-2 rounded-md group`}
            type="button"
            aria-controls="groupsMenu"
            data-collapse-toggle="groupsMenu"
          >
            <a
              href="#"
              className="flex items-center justify-start gap-4 w-full group-hover:text-white"
            >
              <FontAwesomeIcon
                icon={faUserGroup}
                className="icon"
              />{" "}
              Grupos
            </a>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-black w-4 h-4 group-hover:text-white"
            />
          </button>
          <ul id="groupsMenu" className="hidden py-2 space-y-2">
            {data && data.map((group: any) => (
              <li key={group.id}>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <p className="truncate">{group.nombre}</p>
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li className="sidebar__li">
          <a href="#">
            <FontAwesomeIcon icon={faCalendarDays} className="icon" /> Eventos
          </a>
        </li>
        <li className="sidebar__li">
          <a href="#">
            <FontAwesomeIcon icon={faGear} className="icon" />
            Settings
          </a>
        </li>
        <li className="sidebar__li">
          <a href="#">
            {" "}
            <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
            Layout
          </a>
        </li>
      </ul>
    </nav>
  );
}
