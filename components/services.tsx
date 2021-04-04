import React from "react";
import { premium, standard } from "../services/data";

export default function Services() {
  return (
    <div className="bg-primary">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
              Visitas Recepción de Casas y Departamentos
            </h2>
            <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Planes Dr Check
            </p>
            <p className="text-xl text-gray-300">
              A la medida de tu necesidad
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-white sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-primary"/>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 pt-8 pb-2 bg-white sm:p-10 sm:pb-2">
                  {/*<div>
                    <h3
                      className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                      id="tier-standard">
                      ESTÁNDAR
                    </h3>
                  </div>*/}
                  <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                    ESTÁNDAR
                  </div>
                  {/*<div className="mt-4 flex items-baseline text-6xl font-extrabold">
                    UF 8
                    <span className="ml-1 text-2xl font-medium text-gray-500">&nbsp;&nbsp;IVA incluido</span>
                  </div>*/}
                  <p className="mt-5 text-lg text-gray-500">
                    Visita inicial de acompañamiento en la recepción, donde se revisarán los siguientes items:
                  </p>
                </div>
                <div
                  className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <ul className="space-y-4 pb-8">
                    {standard.map((item, index) =>
                      <li className="flex items-start" key={index}>
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none"
                               viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          {item}
                        </p>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="px-6 py-8 bg-white sm:p-10 sm:pt-2">
                  <p className="mt-5 text-lg text-gray-500">
                    Segunda visita de levantamiento de observaciones
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 pt-8 pb-2 bg-white sm:p-10 sm:pb-2">
                  {/*<div>
                    <h3
                      className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                      id="tier-standard">
                      Premium
                    </h3>
                  </div>*/}
                  {/*<div className="mt-4 flex items-baseline text-6xl font-extrabold">
                    UF 12
                    <span className="ml-1 text-2xl font-medium text-gray-500">&nbsp;&nbsp;IVA incluido</span>
                  </div>*/}
                  <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                    PREMIUM
                  </div>
                  <p className="mt-5 text-lg text-gray-500">
                    Visita inicial de acompañamiento en la recepción, donde se revisarán los siguientes items:
                  </p>
                </div>
                <div
                  className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <ul className="space-y-4 pb-8">
                    {premium.map((item, index) =>
                      <li className="flex items-start" key={index}>
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none"
                               viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          {item}
                        </p>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="px-6 py-8 bg-white sm:p-10 sm:pt-2">
                  <p className="mt-5 text-lg text-gray-500">
                    Segunda visita de levantamiento de observaciones
                  </p>
                  <p className="mt-5 text-lg text-gray-500">
                    Tercera visita con post venta de la inmobiliaria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3
                    className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                    Solicitudes especiales
                  </h3>
                </div>
                <div className="mt-4 text-lg text-gray-600">
                  Si ya recibiste la propiedad y estás teniendo una mala experiencia con el proceso de post venta, ponte
                  en contacto con nosotros, podremos asesorarte y acompañarte en dicho proceso. <span
                  className="font-semibold text-gray-900">Hemos tenido excelentes experiencias</span>.
                </div>
              </div>
              <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                <a href="mailto:contacto@drcheck.cl"
                   className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                  Pongámonos en contacto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
