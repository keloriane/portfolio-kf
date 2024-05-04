"use client";
import React from "react";
import Andry from "@/../public/img/andry.png";
import Image from "next/image";
import Tag from "../Tag";
import * as S from "./work.styles";
import ImageR from "../ImageR";
import ImageParallax from "../ImageParallax";
import { Project } from "@/types/Porjects";

const Work: React.FC<Project & { height: string }> = ({
  image,
  title,
  description,
  tag,
  height,
  projectTitle,
  tech,
  slug,
}) => {
  return (
    <S.WorkContainer>
      <div>
        <ImageParallax src={image} />
      </div>
      <header>
        <h2>{title}</h2>
        <Tag title={tag} />
      </header>
      <div className="work_description__wrapper">
        <p>{description}</p>
      </div>
    </S.WorkContainer>
  );
};
export default Work;
