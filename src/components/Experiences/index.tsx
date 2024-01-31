import React from "react";
import { Title } from "../common/Title";
import { experience } from './experiences';
import Container from '../common/Container';
import Col from '../common/Col';
import { twMerge } from "tailwind-merge";
import Button from "../common/Button";




type ExperiencesProps = {   
    satoshi:string;
    clash:string;
}
const Experiences:React.FC<ExperiencesProps> = ({satoshi , clash}) => {
    return ( 
        <section className='py-[200px] '>
            <Container>
                <Col colStart={5} colEnd={26} className="">
                    <Title title='Professional Experiences' className={clash} />
                    <div className={twMerge( " text-[20px] md:text-[40px] lg:text-[50px] font-normal flex flex-col mt-[100px]" , clash)}> 
                    {
                        experience.map((exp , index) => (
                            <div className="flex justify-start items-center gap-[32px]" key={index}>
                                <h4>
                                    {exp.company}
                                </h4>
                                <div className="border border-black h-[.5px] w-full bg-black max-w-[585px]">
                                    
                                </div>
                                <div className="">
                                    {exp.date}
                                </div>
                            </div>

                        ))
                    }
                    </div>
                    <Button text="Download resume" icon={() => (
                    <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2508 6.91999V0.401367H1.26517C0.601126 0.401367 0.0668945 0.914229 0.0668945 1.55171V23.7917C0.0668945 24.4292 0.601126 24.9421 1.26517 24.9421H18.041C18.7051 24.9421 19.2393 24.4292 19.2393 23.7917V8.07034H12.4491C11.79 8.07034 11.2508 7.55268 11.2508 6.91999ZM15.0678 17.0507L10.2537 21.6377C9.92172 21.9545 9.38549 21.9545 9.05347 21.6377L4.23939 17.0507C3.73262 16.568 4.08811 15.7393 4.80108 15.7393H8.0554V11.9048C8.0554 11.4811 8.41289 11.1379 8.85426 11.1379H10.452C10.8933 11.1379 11.2508 11.4811 11.2508 11.9048V15.7393H14.5051C15.2181 15.7393 15.5736 16.568 15.0678 17.0507ZM18.8898 5.43413L14.0019 0.736885C13.7772 0.521195 13.4726 0.401367 13.1531 0.401367H12.8485V6.53654H19.2393V6.24416C19.2393 5.9422 19.1145 5.64982 18.8898 5.43413Z" fill="white"/>
                    </svg>)
                     } className='flex items-center p-[23px] gap-3 max-w-[262px] justify-around mt-10' />
                </Col>

            </Container>

            <Container className="mt-[20rem]">
                <Col>
                     <div className="border border-black flex-col md:flex-row lg:flex-row flex flex-wrap p-[2rem]">
                        <div className="w-[70%]">
                            <h2
                                className="text-[2rem] md:text-[3rem] lg:text-[4rem] uppercase font-bold"
                            >Schedule a meeting</h2>
                            <p
                                className="text-[1rem] md:text-[1.3rem] lg:text-[1.8rem] font-normal">
                                    I am always looking for freelance opportunities in any company agency or startup
                                </p>
                        </div>
                        <div className="flex items-center justify-end w-[30%] ">
                            <Button text="Schedule a meeting" className={"p-[5px] w-[250px] md:w-[250px] lg:w-[250px] md:p-[20px] lg:p-[20px] flex gap-5"} icon={() => (
                                <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.2508 6.91999V0.401367H1.26517C0.601126 0.401367 0.0668945 0.914229 0.0668945 1.55171V23.7917C0.0668945 24.4292 0.601126 24.9421 1.26517 24.9421H18.041C18.7051 24.9421 19.2393 24.4292 19.2393 23.7917V8.07034H12.4491C11.79 8.07034 11.2508 7.55268 11.2508 6.91999ZM15.0678 17.0507L10.2537 21.6377C9.92172 21.9545 9.38549 21.9545 9.05347 21.6377L4.23939 17.0507C3.73262 16.568 4.08811 15.7393 4.80108 15.7393H8.0554V11.9048C8.0554 11.4811 8.41289 11.1379 8.85426 11.1379H10.452C10.8933 11.1379 11.2508 11.4811 11.2508 11.9048V15.7393H14.5051C15.2181 15.7393 15.5736 16.568 15.0678 17.0507ZM18.8898 5.43413L14.0019 0.736885C13.7772 0.521195 13.4726 0.401367 13.1531 0.401367H12.8485V6.53654H19.2393V6.24416C19.2393 5.9422 19.1145 5.64982 18.8898 5.43413Z" fill="white"/>
                            </svg>
                            )}/>
                        </div>
                     </div>
                </Col>
            </Container>
        </section>
     );
}
 
export default Experiences;