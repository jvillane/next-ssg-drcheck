import React from "react";

export default function Hero() {
  return (
    <div className="pt-10 bg-primary sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-2">
          <div
            className="lg:col-span-3 mx-auto max-w-md px-2 sm:max-w-2xl sm:px-3 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <h1
                className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Recibe tu nuevo hogar</span>
                <span
                  className="bg-clip-text text-transparent bg-secondary block">de manos de un experto</span>
              </h1>
              <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Somos parte de Constructora EGT SPA y nos avalan <b>más de 20 años de experiencia</b> en control de calidad habitacional.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 mt-12 pb-16 lg:m-0 lg:relative">
            <div className="flex mx-auto max-w-md px-4 sm:justify-center sm:max-w-2xl sm:px-6 lg:justify-end lg:max-w-none lg:px-0">
              <img className="object-contain md:object-scale-down lg:w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                   src="/drcheck_logo.png"
                   alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
