import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HeroSection from "./components/sections/HeroSection";
import InfoSection from "./components/sections/InfoSection";
import BlogSection from "./components/sections/BlogSection";
import VisitUsSection from "./components/sections/VisitSection";
import Footer from "./components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <Navbar toggle={toggleSidebar} />
      <HeroSection />
      <InfoSection />
      <BlogSection />
      <VisitUsSection />
      <Footer />
    </>
  )
}
