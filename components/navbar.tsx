import { CheckCircleOutline } from "heroicons-react";
import { Transition } from "@headlessui/react";
import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  
  useClickAway(ref, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });
  
  return (
    <header className="relative">
      <div className="bg-primary pt-6">
        <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
             aria-label="Global">
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">DrCheck</span>
                <div className="text-white">
                  <CheckCircleOutline/>
                </div>
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button type="button"
                        className="bg-primary rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                        aria-expanded="false" onClick={() => setIsOpen(true)}>
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10">
              <a href="#" className="text-base font-medium text-white hover:text-gray-300">Inicio</a>
              <a href="#" className="text-base font-medium text-white hover:text-gray-300">Servicios</a>
              <a href="#" className="text-base font-medium text-white hover:text-gray-300">Equipo</a>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="#"
               className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-secondary">
              Contáctanos
            </a>
          </div>
        </nav>
      </div>
    
      <Transition
        show={isOpen}
        enter="ease-out duration-150"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img className="h-8 w-auto"
                     src="https://tailwindui.com/img/logos/workflow-mark-secondary-500-cyan-600.svg"
                     alt=""/>
              </div>
              <div className="-mr-2">
                <button type="button" onClick={() => setIsOpen(false)}
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                <a href="#"
                   className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Inicio</a>
              
                <a href="#"
                   className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Servicios</a>
              
                <a href="#"
                   className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Equipo</a>
              
              </div>
              <div className="mt-6 px-5">
                <a href="#"
                   className="block text-center w-full py-3 px-4 rounded-md shadow bg-secondary text-white font-medium">
                  Contáctanos</a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </header>
  );
}
