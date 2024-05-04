"use client";
import React from "react";
import * as S from "./story.styles";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import TextAnimate from "../common/TextAnimate";
import TitleSmoke from "../common/TitleSmoke";
import Image from "next/image";
import styled from "styled-components";
import Tag from "../common/Tag";
import AnimatedText from "../common/AnimatedText";

interface StoryType {
  title: string;
  description: string;
  icons: { url: string; alt: string }[];
  tags: string[];
}

const IconsContainer = styled.div`
  h4 {
    font-size: 18px;
    font-weight: 900;
  }
  .icons__wrapper {
    margin-top: 20px;
    max-width: 600px;
    display: flex;
    gap: 55px;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  .tags__wrapper {
    margin-top: 20px;
    max-width: 600px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: flex-start;
  }
`;
const Story: React.FC<StoryType> = ({ title, description, icons, tags }) => {
  return (
    <S.StoryContainer>
      <GridContainer colCount={19} colGap={20} rowGap={20}>
        <Col
          column={[2, 2, 2, 2]}
          span={[19, 19, 8, 8]}
          className="description__container"
        >
          <div className="title-container">
            <TextAnimate as={"h2"} text="our story" />
            <h3>{title}</h3>
          </div>
          <IconsContainer className="icons-container">
            <div className="title__container">
              <h4>Technologies:</h4>
            </div>
            <div className="icons__wrapper">
              {icons &&
                icons.map((icon, index) => (
                  <img
                    src={icon.url}
                    alt={icon.alt ? icon.alt : ""}
                    key={index}
                  />
                ))}
            </div>
          </IconsContainer>
          <IconsContainer>
            <div className="title__container">
              <h4>Expertises:</h4>
            </div>
            <div className="tags__wrapper">
              {tags &&
                tags.map((tag, index) => <Tag title={tag} key={index} />)}
            </div>
          </IconsContainer>
        </Col>

        <Col
          column={[2, 2, 11, 11]}
          span={[19, 19, 8, 8]}
          className="text-container"
        >
          <div className="text-wrapper">
            <p>
              <AnimatedText
                splitBy="phrase"
                duration={1}
                staggerValue={0.2}
                text={description}
              />
            </p>
          </div>
        </Col>
      </GridContainer>
    </S.StoryContainer>
  );
};
export default Story;
