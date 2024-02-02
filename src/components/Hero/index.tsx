'use client'
import { useRef, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import Kevin from '@/assets/images/kevin.png'
import gsap from 'gsap'
import Image from 'next/image'
import AnimatedText from '../common/AnimatedText'
import profil from '@/assets/images/profil.png';
import Github from '@/assets/images/Github.svg';
import Linkedin from '@/assets/images/Linkedin.svg';
import mail from '@/assets/images/mail.svg';
import Link from 'next/link'
import profile from '@/assets/images/profil.png';

const Hero = ({ className }: { className: string }) => {


    return (
        <header className={twMerge("flex h-screen w-screen items-center justify-center flex-wrap ", className)}>
            <div className='flex flex-col items-center justify-center'>
                <div className="flex flex-col items-center xl:flex-row lg:flex-col md:flex-col sm:flex-col md:gap-[30px] gap-[30px] lg:gap-[87px]">
                    <div className="flex md:items-center items-center lg:items-start flex-col ">
                        <AnimatedText text="Creative Developer"  splitBy="word"  duration={.7} as="h2" className={twMerge("capitalize font-bold sm:gap-[2px] md:gap-[10px] xl:gap-[10px] md:justify-center justify-center lg:justify-start ", "hero-title")} />
                        <AnimatedText text="Based in Brussels" splitBy="word" duration={.7} as="h2" className={twMerge("capitalize font-bold sm:gap-[2px] md:gap-[10px] xl:gap-[10px] md:justify-center justify-center lg:justify-start", "hero-title")} />
                    </div>
                    <div>
                        <Image src={profile} alt='profile' className="lg:w-[300px] md:w-[200px] w-[200px] " />
                    </div>
                </div>
                
                <div className="flex md:flex lg:justify-center md:justify-center xl:justify-start justify-center flex-row gap-[50px] w-full mt-10 md:m-10 lg:mt-2">
                    <Link href="https://github.com/keloriane">
                        <Image src={Github} alt='github' className="lg:w-[40px] md:w-[30px] w-[30px]" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/kevin-flabat-420a74ba/">
                        <Image src={Linkedin} alt='linkedin' className="lg:w-[40px] md:w-[30px] w-[30px]" />
                       
                    </Link>
                    <Link href="mailto:kevin.flbt@gmail.com">
                        <Image src={mail} alt='mail' className="lg:w-[40px] md:w-[30px] w-[30px]" />
                    </Link>

                </div>
                <button className='w-[182px] bg-#313131 font-regular text-white rounded-full px-[40px] py-[15px] text-[26px]'>
                    Project
                </button>
            </div>
            <div>

            </div>

        </header>
    );
}

export default Hero;