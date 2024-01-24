'use client'
import React from 'react';
import Characters from '../Helpers/Characters';
import useMousePosition from '../utils/useMousePosition';
import Container from '@/components/common/Container';
import Col from '@/components/common/Col';



const About = ({ className }: { className: string }) => {

    const { x, y } = useMousePosition();



    return (

        <section className='w-screen h-screen flex items-center'>
            <Container>
                <Col colStart={[4]} colEnd={[20]} >
                    <Characters
                        className="sm:text-[16px] md:text-[35px] lg:text-[40px] xl:text-l text-center font-bold"
                    />
                </Col>
            </Container>
        </section>

    );
}

export default About;