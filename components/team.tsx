import React from "react";

export default function Team() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-secondary sm:text-4xl">
            Nuestro equipo de profesionales
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Contamos con un equipo profesional que cuenta con más de 20 años de experiencia en control de calidad
            habitacional
          </p>
        </div>
        
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div
                  className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Competencias</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Nuestros profesionales cuentan con experiencia laboral previa en departamentos de calidad en las
                principales inmobiliarias del país, por lo que conocen a fondo cada detalle al revisar al momento de
                recepcionar una propiedad
              </dd>
            </div>
            
            <div className="relative">
              <dt>
                <div
                  className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Rigurosidad</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Nuestros manuales de tolerancia son altamente rigurosos y nos preocupamos de que se cumpla la normativa
                chilena de construcción y el manual de tolerancia para edificaciones de la CCHC.
              </dd>
            </div>
            
            <div className="relative">
              <dt>
                <div
                  className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Respaldo Legal</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                hemos integrado un equipo legal, a fin de resguardar los intereses de nuestros clientes, para resguardar
                el valor de su inversión.
              </dd>
            </div>
            
          </dl>
        </div>
      </div>
    </div>
  );
}
