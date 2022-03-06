import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/sections/HeroSection";
import InfoSection from "../components/sections/InfoSection";
import BlogSection from "../components/sections/BlogSection";
import VisitUsSection from "../components/sections/VisitSection";
import Footer from "../components/Footer";
import { PrismaClient } from "@prisma/client";

export default function Home(props) {
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
      <BlogSection posts={props.blogPosts}/>
      <VisitUsSection />
      <Footer />
    </>
  )
}


export async function getServerSideProps() {

  const prisma = new PrismaClient();

  async function createPost() {
    let title = 'My Ninth Blog!'
    let titleLowerUrl = title.toLowerCase().replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replaceAll(' ', '-')
    const post = await prisma.post.create({
      data: {
        url: titleLowerUrl,
        title: title,
        author: 'ador',
        image: 'blog.jpg',
        body: 'Nostrud veniam amet est laborum magna incididunt. Velit ad minim anim cillum labore consectetur pariatur Lorem non nisi velit duis. Esse dolore proident enim non officia ut consequat ut occaecat elit nostrud occaecat.'
      }
    });
  }

  const posts = await prisma.post.findMany( {take: 3} )
  return {
    props: {blogPosts: posts}
  }
}