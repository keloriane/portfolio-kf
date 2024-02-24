import React from 'react';
import { Title } from '../common/Title';
import { experience } from './experiences';
import Container from '../common/Container';
import Col from '../common/Col';
import Image from 'next/image.js';
import { twMerge } from 'tailwind-merge';

type ExperiencesProps = {
  satoshi: string;
  clash: string;
};
const Experiences: React.FC<ExperiencesProps> = ({ satoshi, clash }) => {
  return (
    <section className="py-[200px] bg-[#202020] text-white ">
      <Container>
        <Col colStart={[2]} colEnd={[26, 26, 24, 12]}>
          <div className="flex flex-col justify-center">
            <Title title="Prfosessional experiences" className={clash} />
            <h2
              className={twMerge(
                'text-[40px] md:text-[70px] font-black',
                satoshi,
              )}
            >
              Where did i work before ?
            </h2>
            <p className="text-[14px] md:text-[18px] mt-[100px]">
              As a freelancer i try to have a variety of tools in my disposal.
              But we need to stop somwhere in order to not get. As a freelancer
              i try to have a variety of tools in my disposal. But we need to
              stop somwhere in order to not get. As a freelancer i try to have a
              variety of tools in my disposal. But we need to stop somwhere in
              order to not get.
            </p>
          </div>
        </Col>
        <Col
          colStart={[2, 2, 2, 15]}
          colEnd={26}
          className="items-center justify-center"
        >
          <div className="flex flex-wrap h-auto  gap-0 justify-center items-center w-auto mt-[50px] md:mt-[10px] ">
            {experience.map((exp, index) => (
              <div
                className="p-[25px] relative w-[150px] md:w-[190px] lg:w-[210px] xl:w-[246px] h-[150px] md:h-[190px] lg:h-[210px] xl:h-[246px] border boder-white flex flex-col justify-center items-center"
                key={index}
              >
                <div className="absolute top-[10px]">
                  <p>{exp.date}</p>
                </div>
                <Image src={exp.image} alt={exp.company} />
                <div className="absolute bottom-[-1px] left-[-1px] ">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.568232 18.2235L0.568224 0.926412L18.3265 18.2235L0.568232 18.2235Z"
                      fill="#E1E1E1"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Container>
    </section>
  );
};

export default Experiences;
