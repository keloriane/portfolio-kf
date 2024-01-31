'use client'
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import About from "@/components/About";
import localFont from 'next/font/local';
import Services from "@/components/Services";
import Cursor from '@/components/common/Cursor';
import Contact from "@/components/Contact";
import Projects from '@/components/Projects';
import Experiences from '@/components/Experiences';
import React from 'react';
import { StaticImageData } from 'next/image';
import Footer from '@/components/Footer';


// Font files can be colocated inside of `pages`
const satoshi = localFont({
  src: [
    {
      path: './../assets/fonts/Satoshi-Bold.ttf',
      weight: 'bold',
      style: 'normal'
    },
    {
      path: './../assets/fonts/Satoshi-Medium.ttf',
      weight: 'normal',
      style: 'normal'
    },
    {
      path: './../assets/fonts/Satoshi-Light.woff',
      weight: 'normal',
      style: 'normal'
    },
  ]
})

const clashDisplay = localFont({
  src: [
    {
      path: './../assets/fonts/ClashDisplay-Light.ttf',
      weight: 'normal',
      style: 'normal'
    },
    {
      path: './../assets/fonts/ClashDisplay-Semibold.woff',
      weight: 'bold',
      style: 'normal'
    }
  ]
})

export default function Home() {

  const [imageSrc , setImageSrc] = React.useState<StaticImageData | null >(null);

  const handleImageClick = (imageData:any) => {
    if(imageData === null) {
      setImageSrc(null)
    } else {
      setImageSrc(imageData && imageData);

    }
  };


  return (
    <main className="">

      
      <Cursor backgroundImage={imageSrc} />
      <div className="bg-white">

      <Nav />
      <Hero className={satoshi.className} />
      <Projects className={clashDisplay.className} onImageClick={handleImageClick} />
      <Services clash={clashDisplay.className} satoshi={satoshi.className} />
      <About clash={clashDisplay.className} satoshi={satoshi.className} />
      <Experiences clash={clashDisplay.className} satoshi={satoshi.className} />
      </div>
      <Contact className={satoshi.className} />
      <Footer />
    </main>
  );
}