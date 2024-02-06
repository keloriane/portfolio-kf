"use client"


import React, { useEffect, useLayoutEffect } from 'react';
import {ResponsiveTitle , Title} from "../common/Title";
import Container from '../common/Container';
import Col from '../common/Col';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import Tag from './Tag';
import gsap from 'gsap';
import AnimatedText from '../common/AnimatedText';
import {  groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import { ServicesPropsData } from '@/interfaces/service.type.js';

type ServicesProps = {
  satoshi:string;
  clash:string;
  services: ServicesPropsData[]
}



const Services:React.FC<ServicesProps> = ({satoshi , clash , services}) => {




  const [hover , setHover] = React.useState<boolean[]>(services.map(() => false));
  const boxRefs = services.map(() => React.useRef<HTMLDivElement | null>(null));
  const titleRefs = services.map(() => React.useRef<HTMLDivElement | null>(null));
  const subtitleRefs = services.map(() => React.useRef<HTMLDivElement | null>(null));
  const numberRefs = services.map(() => React.useRef<HTMLDivElement | null>(null));
  const descriptionRefs = services.map(() => React.useRef<HTMLDivElement | null>(null));
  const techs = services.map(() => React.useRef<HTMLDivElement | null>(null));
  const tagRefs = services.map(() => React.useRef<HTMLDivElement | null>(null));
  const containerBoxRefs = services.map(() => React.useRef<HTMLDivElement | null>(null));



  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const handleTab = (index: number) => {
    activeIndex === index ? setActiveIndex(null):
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  

  const handleMouseEnter = (index: number) => {
    // Update the hover state for the specific index
    setHover((prevHoverStates) => {
      const newHoverStates = [...prevHoverStates];
      newHoverStates[index] = true;
      return newHoverStates;
    });
  };

  const handleMouseLeave = (index: number) => {
    // Update the hover state for the specific index
    setHover((prevHoverStates) => {
      const newHoverStates = [...prevHoverStates];
      newHoverStates[index] = false;
      return newHoverStates;
    });
  };
  
  useLayoutEffect(() => {
    const tabTimeline = gsap.timeline({ paused: true });
    services.forEach((service, index) => {
 
      const contentRef = containerBoxRefs[index]?.current;
      gsap
      .to(contentRef, {
        height: activeIndex === index ? 400 : 0,
        opacity: activeIndex === index ? 1 : 0,
        duration: .5,
        ease: 'power2.inOut',
      });
      gsap
        .to(titleRefs[index]?.current, {
          color: activeIndex === index && hover ? "#BE2525" : "black",
          duration: .2,
        });
      
      

    });
  }, [activeIndex]);


  return ( 
    <section className='py-[200px] '>
      <Container className="flex flex-col">
        <Col colStart={[2, 2,2, 2]} colEnd={[26, 26, 15, 15]} className=''>
      
            <Title title="Services" className={clash} />
            <h2  className={twMerge('font-bold uppercase' , 'service-title')}>What do i do ? </h2>
            
            <h3 className='service-subtitle'>As a freelancer i try to have a variety of tools in my disposal. But we need to stop somwhere in order to not get. </h3>
        </Col>
        
      </Container>
      <Container className="mt-[60px]">
      <Col colStart={[2 , 2,2,  11]} colEnd={[26, 26, 26, 26]} >
          {
            services.map((service , index) => (
              <div className=" flex flex-col py-[20px] border-b border-t-black border-b-black"
              key={index} 
              onClick={() => handleTab(index)} 
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
               
               >
                <div className='flex items-center justify-between' ref={boxRefs[index]}>
                  <div className='flex items-center gap-[15px]'>
                    <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.7136 37.2801C8.72187 37.2801 6.5569 35.4615 6.5569 33.2965C6.5569 31.2182 8.72187 28.88 10.627 27.4944L17.8148 21.2593L8.11568 20.3067C4.56513 20.1335 0.927979 18.8345 0.927979 15.8902C0.927979 13.7252 2.31356 11.6468 4.91153 11.6468C6.8167 11.6468 8.89507 12.8592 10.4539 13.8984L18.6807 18.8345L16.5158 9.48185C16.0828 8.26947 15.823 6.62409 15.823 5.23851C15.823 2.72714 17.3818 0.908569 19.8931 0.908569C22.4045 0.908569 23.9633 2.72714 23.9633 5.15191C23.9633 6.62409 23.6169 8.18287 23.2705 9.48185L21.1055 18.9211L29.3324 13.985C30.8912 12.8592 32.9696 11.6468 34.9613 11.6468C37.2129 11.6468 38.7717 13.6386 38.7717 15.8902C38.7717 19.0077 34.7015 20.3067 31.4108 20.3933L21.8849 21.1727L29.0726 27.581C31.0644 28.9666 33.2293 31.2182 33.2293 33.2965C33.2293 35.3749 31.151 37.2801 28.986 37.2801C26.4746 37.2801 24.4829 34.3357 23.6169 31.5646L19.8931 22.6449L16.0828 31.478C15.1302 34.4223 13.225 37.2801 10.7136 37.2801Z" fill="#BE2525"/>
                    </svg>
                    <h3 className={twMerge("font-bold lg:text-[85px] md:text-[65px] text-[35px]" , clash)}>0{index + 1}</h3>
                  <div className={twMerge('text-[45px] text-blue-300' , clash)}  >
                    <AnimatedText reactRef={titleRefs[index]} text={service.title} gap={"5px"} className={twMerge("font-regular text-[20px] md:text-[48px] lg:text-[45px]" , clash)} duration={.5} splitBy='word'as="h3" /> 
                  </div>
                  </div>
                  <div>
                    <svg  className={twMerge('lg:h-[74px] md:h-[50px] h-[36px]' , 'arrow-service')} style={hover[index] ? {transform: "rotate(90deg)"}: {transform:"rotate(0deg)"}} width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M48.9064 38.3348C49.6436 37.5976 49.6436 36.4024 48.9064 35.6652L36.8928 23.6516C36.1556 22.9143 34.9603 22.9143 34.2231 23.6516C33.4859 24.3888 33.4859 25.584 34.2231 26.3212L44.9019 37L34.2231 47.6788C33.4859 48.416 33.4859 49.6112 34.2231 50.3484C34.9603 51.0857 36.1556 51.0857 36.8928 50.3484L48.9064 38.3348ZM26.4287 38.8878L47.5716 38.8878L47.5716 35.1122L26.4287 35.1122L26.4287 38.8878Z" fill="black"/>
                      <circle cx="37" cy="37" r="36.6224" transform="rotate(-90 37 37)" stroke={hover[index] ? "#BE2525": "black"} strokeWidth="0.755102"/>
                    </svg>
                  </div>  
                </div>
                <div>
                  <div  ref={containerBoxRefs[index]} className="flex">
                {activeIndex === index ? ( 
                <div  className='flex items-center flex-col gap-[16px] md:gap-[35px] lg:gap-[50px] justify-start m-auto'>
                 {
                    <AnimatedText text={service.description} gap={'5px'} splitBy="phrase" duration={.7} as="p" className={twMerge("capitalize lg:text-[22px] md:text-[16px] text-[12px] sm:gap-[2px] md:gap-[10px] xl:gap-[10px] justify-start")} />
                  }
                  <div className="grid grid-cols-[2fr_1fr] gap-[20px] w-full ">
                  <div className={twMerge('text-[20px] font-normal' , satoshi)}>
                      <div className="flex items-center flex-wrap gap-4 text-[22px]">
                        {
                          service.tags.map((tag , i) => (
                            <Tag tagName={tag} key={i} />
                          ))
                        }
                      </div>
                    </div>
                    <div className={twMerge('text-[20px] font-normal' , satoshi)}>
                      <div className="flex items-center h-full gap-[10px]" ref={techs[index]}>
                        {
                          service.icons.map((image , i) => (
                            <div className="w-[50%] h-[50%]  flex flex-wrap items-center" key={i} >
                              <Image src={image.url} alt="tech" width={45} height={45} />
                            </div> 
                          ))
                        }
                      </div>
                    </div>
                   
                  </div>
                </div>
                     ) : null}
                     </div>
              </div>
              </div>
            ))
          }
        </Col>
      </Container>
    </section>
   );
}
export default Services;