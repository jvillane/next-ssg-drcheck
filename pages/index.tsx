import React from 'react';
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Testimony from "../components/testimony";
import Revision from "../components/revision";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <Navbar/>
          <main>
            <Hero/>
            <Revision/>
            <Testimony/>
          </main>
        </div>
      </div>
    </>
  )
}
