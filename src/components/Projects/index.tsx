'use client'
import React, { useState } from "react";
import Link from "next/link";

import { twMerge } from "tailwind-merge";
import Col from "../common/Col";
import Container from "../common/Container";
import { Title } from "../common/Title";
import { ProjectsPropsData } from "@/interfaces/projects.type";


type ProjectsProps = {
  className: string;
  onImageClick: (imageData: any) => void;
  projects: ProjectsPropsData[];
}

const Projects: React.FC<ProjectsProps> = ({ className, onImageClick , projects }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  React.useEffect(() => {
    // Preload images when the component mounts
    projects.forEach(project => {
      const img = new Image();
      img.src = project.image.url; // Assuming the image URL is stored in project.image
    });
  }, [projects]);
  const handleImageClick = (index: number) => {
    // Call the callback function with the image data
    onImageClick(projects[index].image);
  };
  const handleImageLeave = (index: number) => {
    // Call the callback function with the image data
    onImageClick(null);
  };

  return (
    <>
      <section className={className}>
        <Container className="w-screen">
          <Col colStart={[2, 2, 2]} colEnd={[25, 25, 22]}>
            <Title title="Selected Projects" />
          </Col>
          <Col colStart={[3, 3, 3]} colEnd={[25, 25, 22]} className="mt-[9rem]">
            <div className="flex flex-col w-full">
              <ul>
                {projects.map((project, index) => (
                  <li
                  key={index}
                  className={twMerge("sm:text-[20px] md:text-[40px] lg:text-[50px] xl:text-[60px] gap-[25px] w-full flex items-center project-item", hoveredIndex === index && "hovered")}
                  onMouseEnter={() => handleImageClick(index)}
                  onMouseLeave={() => handleImageLeave(index)}
                  >
                    <span>
                      <svg width="52" height="50" viewBox="0 0 52 50" fill="none">
                        <path d="M13.4328 49.4791C10.7594 49.4791 7.85365 47.0383 7.85365 44.1325C7.85365 41.3429 10.7594 38.2047 13.3165 36.345L22.9638 27.9763L9.94582 26.6977C5.18032 26.4653 0.298584 24.7218 0.298584 20.7699C0.298584 17.8641 2.15829 15.0745 5.64525 15.0745C8.20234 15.0745 10.9919 16.7018 13.0841 18.0966L24.1261 24.7218L21.2203 12.1687C20.6391 10.5415 20.2905 8.3331 20.2905 6.47339C20.2905 3.10267 22.3826 0.661804 25.7533 0.661804C29.1241 0.661804 31.2162 3.10267 31.2162 6.35716C31.2162 8.3331 30.7513 10.4253 30.2864 12.1687L27.3806 24.838L38.4226 18.2128C40.5148 16.7018 43.3043 15.0745 45.9777 15.0745C48.9997 15.0745 51.0919 17.7479 51.0919 20.7699C51.0919 24.9542 45.629 26.6977 41.2122 26.814L28.4267 27.86L38.0739 36.4612C40.7472 38.3209 43.653 41.3429 43.653 44.1325C43.653 46.9221 40.8635 49.4791 37.9577 49.4791C34.587 49.4791 31.9136 45.5273 30.7513 41.8079L25.7533 29.836L20.6391 41.6916C19.3606 45.6435 16.8035 49.4791 13.4328 49.4791Z" fill="#313131" />
                      </svg>
                    </span>
                    <Link href="#" className="relative">{project.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Container>
      </section>
    </>
  );
}

export default Projects;