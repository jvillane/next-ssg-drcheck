import { CheckCircleOutline } from "heroicons-react";
import { Transition } from "@headlessui/react";
import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";
import Link from "next/link";

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
      <div className="bg-primary pt-6 pb-4">
        <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
             aria-label="Global">
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <a href="#" className="flex items-center text-white text-xl">
                  <span className="sr-only">DrCheck</span>
                  <div>
                    <CheckCircleOutline/>
                  </div>
                  <span>&nbsp;&nbsp;DrCheck</span>
                </a>
              </Link>
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
              <Link href="/servicios">
                <a className="text-base font-medium text-white hover:text-gray-300">Servicios</a>
              </Link>
              <Link href="/equipo">
                <a className="text-base font-medium text-white hover:text-gray-300">Equipo</a>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="https://www.instagram.com/drcheck_cl/" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center px-1 py-2 text-base font-medium text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/constructoraegtspa?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bil%2BMR%2BbsQyWwQEgoStf8fg%3D%3D"
              className="inline-flex items-center px-1 py-2 text-base font-medium text-white" target="_blank" rel="noopener noreferrer">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"/>
              </svg>
            </a>
            <a href="mailto:consulta@drcheck.cl"
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
                <Link href="/">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Inicio</a>
                </Link>
                <Link href="/servicios">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Servicios</a>
                </Link>
                <Link href="/equipo">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Equipo</a>
                </Link>
              </div>
              <div className="mt-6 px-5">
                <a href="mailto:consulta@drcheck.cl"
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
