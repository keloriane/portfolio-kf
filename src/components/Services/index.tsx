
"use client"
import { useLayoutEffect, useRef } from 'react';
import Title from '../common/Title';

import nextjsimage from "@/assets/images/Vector-1.svg";
import wordpressimage from "@/assets/images/Vector-2.svg";
import reactimage from "@/assets/images/Vector-3.svg";
import vuejsimage from "@/assets/images/Vector-4.svg";
import angularjsimage from "@/assets/images/Vector.svg";
import typescript from '@/assets/images/typescript.svg';
import docker from '@/assets/images/docker.svg';
import postgresql from '@/assets/images/postgresql.svg';
import nextjsImage from '@/assets/images/next.svg';
import figma from '@/assets/images/figma.svg';
import Container from '../common/Container';
import Col from '../common/Col';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import gsap from 'gsap';
import parse from 'html-react-parser';



const services = [
  {
    title: "Frontend <br /> Development",
    description: "Je suis un développeur spécialisé en React et Typescript. Passionné par le code, j'ai également un penchant pour le design, fusionnant esthétique et fonctionnalité dans chaque projet sur lequel je travaille.",
    images: [nextjsimage, wordpressimage, reactimage, vuejsimage, angularjsimage],
    subtitle: ["Progressive Web Apps", "Website", "Web Applications" , "Ecommerce"],


  },
  {
    title: "Backend <br /> Development",
    description: "Je suis un développeur spécialisé en React et Typescript. Passionné par le code, j'ai également un penchant pour le design, fusionnant esthétique et fonctionnalité dans chaque projet sur lequel je travaille.",
    images: [typescript, docker, postgresql, nextjsImage],
    subtitle: ["API Development", "Server Deployment", "Server Deployment", "Containerization (Docker)"],


  },
  {
    title: "UX UI <br /> Design",
    description: "Je suis un développeur spécialisé en React et Typescript. Passionné par le code, j'ai également un penchant pour le design, fusionnant esthétique et fonctionnalité dans chaque projet sur lequel je travaille.",
    images: [figma],
    subtitle: ["Web Design", "Prototyping", "Design Systems", "Design Systems"],


  },
]

const Services = ({ satoshi, clash }: { satoshi: string, clash: string }) => {
  const boxRefs = services.map(() => useRef<HTMLDivElement | null>(null));
  const titleRefs = services.map(() => useRef<HTMLDivElement | null>(null));
  const subtitleRefs = services.map(() => useRef<HTMLDivElement | null>(null));
  const numberRefs = services.map(() => useRef<HTMLDivElement | null>(null));
  const descriptionRefs = services.map(() => useRef<HTMLDivElement | null>(null));
  const techs = services.map(() => useRef<HTMLDivElement | null>(null));
  const containerBoxRefs = services.map(() => useRef<HTMLDivElement | null>(null));

  useLayoutEffect(() => {
    
    const timelines = services.map((service, index) => {
      
      const timeline = gsap.timeline({ paused: true });

      gsap.set(boxRefs[index].current, { yPercent: 100 })
      gsap.set(numberRefs[index].current, { color: "#313131" })
      gsap.set(titleRefs[index].current, { color: "#313131", y: 0 })
      gsap.set([subtitleRefs[index].current?.childNodes], { y: 20, color: "#313131", opacity: 0 })
      
      timeline
      .fromTo(
        boxRefs[index].current,
        { yPercent: 100, duration: 0.1, ease: "cubic-bezier(.215,.61,.355,1)" },
        { yPercent: 0, ease: "cubic-bezier(.215,.61,.355,1)" }
        )
        .fromTo(
          numberRefs[index].current,
          { color: "#313131", duration: 0.2, },
          { color: "white", },-0.12
          )
          .fromTo(titleRefs[index].current, { duration: 0.2, color: "#313131" }, { opacity: 1, color: "white", ease:"cubic-bezier(.215,.61,.355,1)" }, 0.2)
          .fromTo([subtitleRefs[index].current?.childNodes], { opacity:0, duration: 0.05, y:20, color: "#313131" }, { opacity: 1, stagger: 0.1, y:0,  color: "white", ease:"cubic-bezier(.215,.61,.355,1)" },-.01)
          .fromTo(techs[index].current, { duration: 0.2, opacity: 0, y: 10 }, { opacity: 1, y: -60, }, 0.3)


      return timeline;
    });

    const handleAnimation = (index: number, play: boolean) => {
      if (timelines && subtitleRefs[index] ) {

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
    <section>
      <Container className='w-screen mt-[300px]'>
        <Col colStart={2} colEnd={5}>
        <Title title="Services" />
        </Col>
        <Col colStart={[1, 1, 2]} colEnd={[27, 27,26]} className='mt-[9rem]'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[800px]">
            {services.map((service, index) => (
              <div key={index} className="border-r-2 border-[#313131] p-7 relative overflow-hidden" ref={containerBoxRefs[index]}>
                <div className="flex flex-col items-evenly  justify-between h-full">
                  <div className="flex flex-col text-[#313131] ">
                    <div className="relative z-10 flex items-center">
                      <svg width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.4328 49.4792C10.7594 49.4792 7.85365 47.0383 7.85365 44.1326C7.85365 41.343 10.7594 38.2047 13.3165 36.345L22.9638 27.9763L9.94582 26.6978C5.18032 26.4653 0.298584 24.7218 0.298584 20.77C0.298584 17.8642 2.15829 15.0746 5.64525 15.0746C8.20234 15.0746 10.9919 16.7018 13.0841 18.0966L24.1261 24.7218L21.2203 12.1688C20.6391 10.5416 20.2905 8.33316 20.2905 6.47345C20.2905 3.10273 22.3826 0.661865 25.7533 0.661865C29.1241 0.661865 31.2162 3.10273 31.2162 6.35722C31.2162 8.33316 30.7513 10.4253 30.2864 12.1688L27.3806 24.8381L38.4226 18.2129C40.5148 16.7018 43.3043 15.0746 45.9777 15.0746C48.9997 15.0746 51.0919 17.7479 51.0919 20.77C51.0919 24.9543 45.629 26.6978 41.2122 26.814L28.4267 27.8601L38.0739 36.4613C40.7472 38.321 43.653 41.343 43.653 44.1326C43.653 46.9221 40.8635 49.4792 37.9577 49.4792C34.587 49.4792 31.9136 45.5273 30.7513 41.8079L25.7533 29.836L20.6391 41.6917C19.3606 45.6436 16.8035 49.4792 13.4328 49.4792Z" fill="#BE2525" />
                      </svg>
                      <h3
                        className={twMerge("lg:text-sNumber md:text-[64px] text-[36px] font-bold ml-5", clash)} ref={numberRefs[index]}>
                        {`0${index + 1}`}
                      </h3>
                    </div>
                    <div>
                      <h3 className={twMerge("lg:text-[3rem] md:text-[25px] text-[14px]", satoshi)} ref={titleRefs[index]}>{parse(service.title)}</h3>
                    </div>
                  </div>
                  <span className={twMerge("overflow-hidden lg:text-[1.77rem]  md:text-[20px] text-[10px] uppercase", satoshi)} ref={subtitleRefs[index]}>
                      {
                        service.subtitle.map((text, i) => (
                          <span key={i} className='block'>
                            {text}
                            <br />
                          </span>

                        ))
                      }
                    </span>
                 
                  <div className="lg:flex md:hidden xl:flex items-center gap-4 opacity-0 hidden" ref={techs[index]}>
                    {
                      service.images.map((image, i) => (
                        <div className="w-[50%] h-[50%]  flex items-center" key={i} >
                          <Image src={image} alt="tech" height={45} />
                        </div> 
                      ))
                    }
                  </div>
                </div>
                <div ref={boxRefs[index]} className="absolute bottom-0 left-0  bg-[#313131] h-full w-full z-[-20]"></div>
              </div>
            ))}
          </div>
        </Col>
      </Container>
    </section>
  );
}

export default Services;