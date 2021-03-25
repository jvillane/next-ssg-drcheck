import React from 'react';
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Services from "../components/services";
import Testimony from "../components/testimony";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <Navbar/>
          <main>
            <Hero/>
            <Services/>
            <Testimony/>
          </main>
          <Footer/>
        </div>
      </div>
    </>
  )
}
