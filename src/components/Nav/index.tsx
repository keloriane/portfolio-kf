"use client"
import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";




const Nav: React.FC = () => {
    const elements = Array.from({ length: 4 }, () => React.createRef<HTMLDivElement>());
  React.useEffect(() => {

    
    const animateLetters = () => {
     
    elements.forEach((ref) => {
      const el = ref.current;
      if (el) {
        let innerText = el.innerText;
        el.innerHTML = "";

        let textContainer = document.createElement("div");
        textContainer.classList.add("block");

        for (let letter of innerText) {
          let span = document.createElement("span");
          span.innerText = letter.trim() === "" ? "\xa0" : letter;
          span.classList.add("letter");
          textContainer.appendChild(span);

        }
        el.appendChild(textContainer);
        el.appendChild(textContainer.cloneNode(true));
      }
    });
    elements.forEach((ref) => {
      const element = ref.current;
      if (element) {
        element.addEventListener("mouseover", () => {
          element.classList.remove("play");
        });
      }
    });

  }
    return () => animateLetters(); 
  }, [elements[0] , elements[1]]);

  return (
    <header className="fixed z-10 top-0 w-full h-[90px] items-center bg-white">
      <div className="relative flex justify-between">
        <div className="h-[90px] flex items-center">
          <h1 className={twMerge("text-[40px] font-black", "logo-nav")}>
            <span className={twMerge("logo-nav-emp" , 'text-white')}>Kevin</span> Flabat
          </h1>
        </div>

        <nav className="relative h-[90px] right-0 border border-black w-[50%] flex justify-end items-center bg-white">
          <ul className="flex justify-evenly text-md absolute w-full">
            <li className="hover:text-accent">
              <Link href={"#"}>
                <div ref={elements[0]} className={twMerge("overflow-hidden ","nav-item")} >
                  Projects
                </div>
              </Link>
            </li>
            <li className="hover:text-accent">
              <Link href={"#"}>
                <div ref={elements[1]} className={twMerge("overflow-hidden ","nav-item")} >
                  Services
                </div>
              </Link>
            </li>
            <li className="hover:text-accent">
              <button className="px-[15px] bg-black rounded-full text-white py-[2px]">
                <Link href={"#"} passHref>
                  <span>Contact</span>
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;