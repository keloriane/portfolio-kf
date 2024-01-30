'use client'
import React from 'react';
import Characters from '../Helpers/Characters';
import useMousePosition from '../utils/useMousePosition';
import Container from '@/components/common/Container';
import Col from '@/components/common/Col';
import ImageParallax from '../common/ImageParallax';
import Frontend from '@/assets/images/front-end.webp';
import { twMerge } from 'tailwind-merge';
import { Title } from '../common/Title';


type AboutProps = {
    satoshi:string;
    clash:string;
}

const About:React.FC<AboutProps> = ({satoshi , clash}) => {

    const { x, y } = useMousePosition();



    return (

        <section className='w-screen h-screen flex items-center'>
            <Container>
                <Col colStart={[2]} colEnd={[20]} >
            <Title title='About Me' />
            <Characters phrase="Guitar Player" stroke='hobby-title' className={twMerge('font-bold text-[20px] md:text-[50px] lg:text-[80px] uppercase' , clash)} />
            <Characters phrase="Tennis Player" stroke='hobby-title' className={twMerge('font-bold text-[20px] md:text-[50px] lg:text-[80px] uppercase' , clash)} />
            <Characters phrase="Gamer" stroke='hobby-title' className={twMerge('font-bold text-[20px] md:text-[50px] lg:text-[80px] uppercase' , clash)} />
                  
                    </Col>
                <Col colStart={[2]} colEnd={[20]} className='mt-[90px]' >
                    <Characters
                        phrase="Je suis un développeur spécialisé en React et Typescript. Passionné par le code, j'ai également un penchant pour le design, fusionnant esthétique et fonctionnalité dans chaque projet sur lequel je travaille."
                        className="sm:text-[16px] md:text-[35px] lg:text-[40px] xl:text-l text-center font-normal leading-[1.5]"
                    />
                </Col>
            </Container>
              
        </section>

    );
}

export default About;