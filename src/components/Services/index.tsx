"use client"
import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import gsap from 'gsap'
import Image from "next/image";
import {services} from './services';
import computer from '@/assets/images/front-endd.webp';






const Services = ({ className }: { className: string }) => {

  const [imageHover , setImageHover] = useState({
    active:true,
    index: 0
  });
  
  const boxRefs = services.map(() => useRef<HTMLDivElement | null>(null));
  const titleRefs = services.map(() => useRef<HTMLDivElement | null>(null));
  const descriptionRefs = services.map(() => useRef<HTMLDivElement | null>(null));
  const techs = services.map(() => useRef<HTMLDivElement | null>(null));
  const containerBoxRefs = services.map(() => useRef<HTMLDivElement | null>(null));

  useEffect(() => {
    console.log(imageHover)
    const timelines = services.map((service, index) => {
      const timeline = gsap.timeline({ paused: true });
      timeline
      .fromTo(
        boxRefs[index].current,
        { yPercent: 100, duration:0.1, ease: "cubic-bezier(.785,.135,.15,.86)" },
        { yPercent: 0, ease: "cubic-bezier(.785,.135,.15,.86)" }
        )
      .fromTo(
        titleRefs[index].current,
        { translateY:"100%", color:"black", duration:0.2,  },
        { color: "white",  translateY:"-5%" , }, -0.1
      )
    .fromTo(descriptionRefs[index].current, { duration:0.2,opacity:0, y: 100 },{opacity:1, y: 0 }, 0.2)
    .fromTo(techs[index].current, { duration:0.2,opacity:0, y: 200 },{opacity:1, y: 0, }, 0.3)
    
        

      return timeline;
    });

    const handleAnimation = (index: number, play: boolean) => {
      if (timelines) {
        play ? timelines[index].play() : timelines[index].reverse();
      }
    };

    // Attach event listeners for mouse enter and leave
    containerBoxRefs.forEach((boxRef, index) => {
      if (boxRef.current) {
        boxRef.current.addEventListener('mouseenter', () => handleAnimation(index, true));
        boxRef.current.addEventListener('mouseleave', () => handleAnimation(index, false));
      }
    });

    return () => {
      // Remove event listeners on component unmount
      containerBoxRefs.forEach((boxRef, index) => {
        if (boxRef.current) {
          boxRef.current.removeEventListener('mouseenter', () => handleAnimation(index, true));
          boxRef.current.removeEventListener('mouseleave', () => handleAnimation(index, false));
        }
      });
    };
  }, [boxRefs, titleRefs, containerBoxRefs, descriptionRefs]);
  return (
    <section className={twMerge(className, "w-full h-screen")}>
      
      <h1>Services</h1>

      <div className="flex">
       
      
      <div className="flex flex-col w-2/4 ">


        {
          services.map((service , index) => (
            <div
            onMouseEnter={() => setImageHover({active:true , index:index})}
            ref={containerBoxRefs[index]}
            className="border border-black flex flex-col justify-evenly h-[14.55rem] relative  overflow-hidden "
            key={service.title}
          >
            <div className="flex items-center px-5  text-black" ref={titleRefs[index]}>
              <div className="mr-[2rem]" >
                <svg width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4328 49.4792C10.7594 49.4792 7.85365 47.0383 7.85365 44.1326C7.85365 41.343 10.7594 38.2047 13.3165 36.345L22.9638 27.9763L9.94582 26.6978C5.18032 26.4653 0.298584 24.7218 0.298584 20.77C0.298584 17.8642 2.15829 15.0746 5.64525 15.0746C8.20234 15.0746 10.9919 16.7018 13.0841 18.0966L24.1261 24.7218L21.2203 12.1688C20.6391 10.5416 20.2905 8.33316 20.2905 6.47345C20.2905 3.10273 22.3826 0.661865 25.7533 0.661865C29.1241 0.661865 31.2162 3.10273 31.2162 6.35722C31.2162 8.33316 30.7513 10.4253 30.2864 12.1688L27.3806 24.8381L38.4226 18.2129C40.5148 16.7018 43.3043 15.0746 45.9777 15.0746C48.9997 15.0746 51.0919 17.7479 51.0919 20.77C51.0919 24.9543 45.629 26.6978 41.2122 26.814L28.4267 27.8601L38.0739 36.4613C40.7472 38.321 43.653 41.343 43.653 44.1326C43.653 46.9221 40.8635 49.4792 37.9577 49.4792C34.587 49.4792 31.9136 45.5273 30.7513 41.8079L25.7533 29.836L20.6391 41.6917C19.3606 45.6436 16.8035 49.4792 13.4328 49.4792Z" fill="#BE2525"/>
                </svg>
              </div>
              <div className="relative z-10">
                <h3
                  
                  className="text-[25px]">
                  {service.title}
                </h3>
              </div>
            </div>
            <p ref={descriptionRefs[index]} className=" px-5 text-[18px] text-white opacity-0">
               {service.description}
              </p>
            <div className="flex gap-4 opacity-0  px-5" ref={techs[index]}>
              {
                service.images.map((image , i) => (
                  <div className="w-[50%] h-[50%]" key={i} >
                    <Image src={image} alt="tech" />
                  </div>
                ))
              }
            </div>
            <div ref={boxRefs[index]} className="bg-black absolute h-[100%] w-full z-[-20]"></div>
          </div>
          ))
        }
        </div>
      </div>
    </section>
  );
};

export default Services;
