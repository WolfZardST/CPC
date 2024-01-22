"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faUserGroup,
  faCalendarDays,
  faGear,
  faRightFromBracket,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "./sidebar.scss";
import logo from "../../public/logo.png";
import Image from "next/image";
import "flowbite";

export default function SideBar() {
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
      <ul className="p-4">
        <li className="sidebar__li">
          <a href="#">
            <FontAwesomeIcon icon={faComment} className="icon" />
            Publicaciones{" "}
          </a>
        </li>
        <li className="mb-[30px]">
          <button
            className="flex items-center justify-start w-full h-full hover:bg-secondary p-2 rounded-md group"
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
                className="text-black w-8 h-8 group-hover:text-white"
              />{" "}
              Grupos
            </a>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-black w-4 h-4 group-hover:text-white"
            />
          </button>
          <ul id="groupsMenu" className="hidden py-2 space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Billing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Invoice
              </a>
            </li>
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
