import React from "react";

export default function Services() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-primary uppercase">
          Deja la inspección en nuestras manos
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-primary tracking-tight sm:text-4xl">
          Resguardamos el valor de tu inversión
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Apuntamos a que puedas disfrutar de tu hogar, nos ponemos de tu lado ante las inmobiliarias y su servicio de post venta
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) =>
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span
                        className="inline-flex items-center justify-center p-3 bg-secondary rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Accesos y Ventanas</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, at modi natus, nemo numquam omnis optio quia repellendus rerum totam ullam ut. Ad delectus, deserunt earum est quisquam sequi veniam.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
