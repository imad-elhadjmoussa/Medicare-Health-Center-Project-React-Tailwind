import { useState } from "react";
import { Hero } from "./pages/Hero/Hero";
import { Navbar } from "./pages/navbar/Navbar";
import { About } from "./pages/About/About";
import { Treatment } from "./pages/Treatment/Treatment";
import { Services } from "./pages/Services/Services";
import { Doctors } from "./pages/Doctors/Doctors";
import { Reaserches } from "./pages/Reaserches/Reaserches";
import { MediaCare } from "./pages/Media care/MediaCare";
import { Appiontmnet } from "./pages/Appiontment/Appiontmnet";
import { Footer } from "./pages/Footer/Footer";


function App() {
  const [isOpen, setOpen] = useState(false);

  

  return (
    <div className="">
      {
        isOpen &&
        <div class=" fixed top-0 left-0 w-full h-full z-50" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}></div>
      }
      {/* Navbar */}
      <div className=" ">
        <Navbar isOpen={isOpen} setOpen={setOpen} />
      </div>
      {/* Hero */}
      <div >
        <Hero />
      </div>
      {/* About */}
      <div id="About" className=" px-[20px] py-[100px]" >
        <About />
      </div>
      {/* Treatment */}
      <div id="Treatment" >
        <Treatment />
      </div>
      {/* Services */}
      <div id='Services' className=" px-[20px] py-[100px]" >
        <Services />
      </div>
      {/* Doctors */}
      <div id='Doctors' className=" px-[20px] py-[100px]" >
        <Doctors />
      </div>
      {/* Reaserches */}
      <div id='Researches' >
        <Reaserches />
      </div>
      {/* About mesia care */}
      <div id='Mediacare' className=" px-[20px] py-[50px]" >
        <MediaCare />
      </div>
      {/* Appointment */}
      <div id='Appointment' className=" px-[20px] py-[100px]" >
        <Appiontmnet />
      </div>
      {/* Footer */}
      <div >
        <Footer />
      </div>
    </div>
  );
}

export default App;
