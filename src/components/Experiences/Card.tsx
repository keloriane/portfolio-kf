"use client";
import React from "react";
import * as S from "./card.styles";

import Image, { StaticImageData } from "next/image";

const Card = ({
  logo,
  date,
  description,
  name,
}: {
  logo: string;
  date: string;
  description: string;
  name: string;
}) => {
  return (
    <S.CardStyle>
      <div className="timeline_wrapper">
        <div>
          <img src={logo} alt="name" />
        </div>
        <div className="timeline_line"></div>
      </div>
      <div>
        <h4>{date}</h4>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </S.CardStyle>
  );
};
export default Card;
