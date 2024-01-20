"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUserGroup, faCalendarDays, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.scss";
import logo from "../../public/logo.png";
import Image from 'next/image';

export default function SideBar() {



  return (
    <nav className="bg-white h-screen w-64 fixed top-0 left-0 overflow-y-auto">
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
        <li>
          <FontAwesomeIcon icon={faComment} className='icon' />
          <a href="#">Publicaciones </a>
        </li>
        <li>
        <FontAwesomeIcon icon={faUserGroup} className='icon' />
        <a href="#">Grupos </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDays} className='icon' />
          <a href="#">Eventos</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faGear} className='icon' />
          <a href="#">Settings</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faRightFromBracket} className='icon' />
          <a href="#">Layout</a>
        </li>
     
          

   
      </ul>
    </nav>
  );
}
