"use client";
import React, { useEffect, useRef } from "react";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import { Project } from "@/types/Porjects";
import styled from "styled-components";
import Tag from "../common/Tag";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";

const PortfolioGrid = styled(GridContainer)`
  .image_reveal {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    z-index: 10;

    transition: transform 0.1s ease-out;
  }
  margin: auto;

  .portfolio_item {
    border-top: 1px solid #313131;
    padding: 30px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-content: center;
    justify-content: space-between;
    justify-items: stretch;
    align-items: center;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
      justify-items: center;
      text-align: center;
      .icons__wrapper {
        justify-content: center;
      }
    }

    .info_container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .tag_container {
        display: flex;
        justify-content: flex-end;
      }

      .icons__wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 20px;
        @media (max-width: 780px) {
          justify-content: center;
        }

        img {
          max-width: 50px;
        }
      }
    }

    h4 {
      font-size: 32px;
      font-weight: 700;
    }
  }
`;

// Define magic numbers as constants
const SCALE_FACTOR = 1.4;

const Portfolio = ({ works }: { works: Project[]; title: string }) => {
  // Create a ref for each work
  const imageRefs = works.map(() => useRef<HTMLImageElement | null>(null));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      imageRefs.forEach((ref, index) => {
        if (ref.current) {
          if (
            ref.current.parentElement &&
            ref.current.parentElement.contains(e.target as Node)
          ) {
            const itemRect = ref.current.parentElement.getBoundingClientRect();
            const x = e.clientX - itemRect.left * SCALE_FACTOR;
            const y = e.clientY - itemRect.top * SCALE_FACTOR;
            gsap.to(ref.current, {
              x,
              y,
              opacity: 1,
              display: "flex",
            });
          } else {
            gsap.to(ref.current, { display: "none", opacity: 0 });
          }
        }
      });
    };

    // Add the event listener to the document
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  // Rest of the component...
  // Create an array of refs for each image

  return (
    <PortfolioGrid colCount={24} colGap={20} rowGap={20} paddingRight={true}>
      <div className="preview">
        <div className="preview-img"></div>
      </div>
      {works.map((work, index) => (
        <Col column={4} span={18} key={index}>
          <Link href={work.projectUrl} target="blank">
            <Image
              src={urlForImage(work.image)}
              alt={work.projectTitle}
              width={300}
              height={300}
              style={{ objectFit: "cover", borderRadius: "100%" }}
              className="image_reveal"
              ref={imageRefs[index]} // Assign the ref to the corresponding image
            />
            <div className="portfolio_item" id={`p${index}`}>
              <div>
                <h4>{work.projectTitle}</h4>
              </div>
              <div>
                <p>{work.description}</p>
              </div>
              <div className="info_container">
                <div className="tag_container">
                  <Tag title={work.tag} />
                </div>
                <div className="icons__wrapper">
                  {work.tech.map((icon, index) => (
                    <img
                      src={urlForImage(icon)}
                      alt={icon.alt ? icon.alt : ""}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </Col>
      ))}
    </PortfolioGrid>
  );
};

export default Portfolio;
