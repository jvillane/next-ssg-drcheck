import React from 'react';
import Navbar from "../components/navbar";
import Team from "../components/team";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <Navbar/>
          <main>
            <Team/>
          </main>
          <Footer/>
        </div>
      </div>
    </>
  )
}
