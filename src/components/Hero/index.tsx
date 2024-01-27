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

const Hero = ({ className }: { className: string }) => {

    return (
        <header className={twMerge("flex h-screen w-screen items-center justify-center flex-wrap ", className)}>
            <div className='flex flex-col items-center justify-center'>
                <div className="flex flex-col items-center xl:flex-row lg:flex-col md:flex-col sm:flex-col md:gap-[30px] gap-[30px] lg:gap-[87px]">
                    <div className="flex items-start flex-col">
                        <AnimatedText text="Creative Developer" gap={'25px'} splitBy="word"  duration={.7} as="h2" className="text-[37px] md:text-[60px] xl:text-lg lg:text-lg capitalize font-bold sm:gap-[2px] md:gap-[10px] xl:gap-[10px] justify-start " />
                        <AnimatedText text="Based in Brussels" gap={'25px'} splitBy="word" duration={.7} as="h2" className="text-[37px] md:text-[60px] xl:text-lg lg:text-lg capitalize font-bold sm:gap-[2px] md:gap-[10px] xl:gap-[10px] justify-start" />
                    </div>
                    <div>
                        <Image src={profil} alt="profile" className='lg:w-[367px] md:w-[275px] w-[135px]' />
                    </div>
                </div>
                
                <div className="flex justify-start flex-row gap-[50px] w-full">
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