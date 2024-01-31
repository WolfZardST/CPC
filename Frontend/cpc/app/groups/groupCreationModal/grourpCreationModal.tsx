"use client";

import React, { useState, useEffect } from "react";

import { Button, Modal } from 'flowbite-react';;
import "flowbite";
import TemaModal from "./temaModal"
export default function GroupCreationModal() {
    const [openModal, setOpenModal] = useState(false);
    const [temaModal, setTemaModal] = useState(false);

    const handleListItemClick = () => {
        setOpenModal(false); // Close the group creation modal
        setTemaModal(true); // Open the other modal
    };

    const initialClick = () => {
        setOpenModal(true); // Close the group creation modal
        setTemaModal(false); // Open the other modal
    };

  return (
        <>
         <Button className="w-full" gradientDuoTone="purpleToBlue" onClick={initialClick}>Crear Grupo</Button>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Crea tu propio Grupo!</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Ya sea para una materia universitaria o un tema de interés, aquí podrás conectar con otros estudiantes que comparten tus mismos objetivos académicos.
                </p>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-gray-500 dark:text-gray-400 mb-4">Selecciona una plantilla</p>
                <ul className="space-y-4 mb-4">
                    <li onClick={handleListItemClick}>
                        <input type="radio" id="job-1" name="job" value="job-1" className="hidden peer" required/>
                        <label htmlFor="job-1" className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">                           
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Sobre una materia</div>
                                <div className="w-full text-gray-500 dark:text-gray-400">ESPOL</div>
                            </div>
                            <svg className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="job-2" name="job" value="job-2" className="hidden peer"/>
                        <label htmlFor="job-2" className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Custom</div>
                                <div className="w-full text-gray-500 dark:text-gray-400">ESPOL</div>
                            </div>
                            <svg className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                        </label>
                    </li>
                </ul>
                
                <button className="text-white inline-flex w-full justify-center bg-secondary hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Has sido invitado a un grupo?
                </button>
            </div>
            </Modal.Body>
          </Modal>
          {temaModal && <TemaModal />}
        </>
      );
    }
    
