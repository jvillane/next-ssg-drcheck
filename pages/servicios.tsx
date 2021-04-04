import React from 'react';
import Navbar from "../components/navbar";
import Services from "../components/services";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <Navbar/>
          <main>
            <Services/>
          </main>
        </div>
      </div>
    </>
  )
}
