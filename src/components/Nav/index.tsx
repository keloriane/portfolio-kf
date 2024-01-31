"use client"
import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import gsap from 'gsap'





const Nav: React.FC = () => {
    const elements = Array.from({ length: 4 }, () => React.createRef<HTMLDivElement>());
    const navBar = React.createRef<HTMLHeadElement>();

  React.useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const navigationHeight = navBar.current?.offsetHeight;
      
      if (scrollTop > lastScrollTop) {
        gsap.to(navBar.current, { top: "-90px", duration: 0.5 });
      } else {
    
        gsap.to(navBar.current, { top: "0px", duration: 0.5 });
      }

      // Update the last scroll position
      lastScrollTop = scrollTop;
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elements[0] , elements[1]]);

  return (
    <header ref={navBar} className="sticky z-10 top-0 w-full h-[90px] flex justify-between items-center px-10 bg-[white]">
        <div className="logo">
            <Link href="/" className="font-bold text-[30px]">
                    Kevin FLabat
            </Link>
        </div>
        <ul className=" gap-5 text-md font-bold hidden md:flex lg:flex">
          <li>
            <Link href={"#"}>
                Home
            </Link>
          </li>
          <li>
            <Link href={"#"}>
                Services
            </Link>
          </li>
          <li>
            <Link href={"#"}>
                Projects
            </Link>
          </li>
          <li>
            <Link href={"#"}>
                About
            </Link>
          </li>
          <li>
            <Link href={"#"}>
                Contact
            </Link>
          </li>
        </ul>
    </header>
  );
};

export default Nav;