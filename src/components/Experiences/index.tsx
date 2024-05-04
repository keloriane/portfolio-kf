"use client";
import React from "react";
import GridContainer from "../common/Container";
import Col from "../common/Col";
import Card from "./Card";
import styled from "styled-components";
import outkept from "@/../public/img/outkept.svg";
import { theme } from "@/styles/theme";

const ExperienceWrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
`;

const ExperienceContainer = styled.div`
  padding: 100px 20px;
  background-color: ${theme.colors.dark};
  color: ${theme.colors.light};
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const TitleContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Experiences = ({
  experiences,
  title,
}: {
  experiences: {
    title: string;
    description: string;
    image: string;
    date: string;
  }[];
  title: string;
}) => {
  return (
    <ExperienceContainer>
      <GridContainer colCount={19} colGap={20} rowGap={40}>
        <Col column={[1, 1, 1, 1]} span={[17, 17, 19, 19]}>
          <TitleContainer>
            <div className="title-container">
              <h2 style={{ fontSize: "18px" }}>Professional experiences</h2>
              <h3 style={{ fontSize: "48px" }}>{title}</h3>
            </div>
          </TitleContainer>
        </Col>

        {experiences.map((exp, index) => (
          <Col
            key={index}
            column={
              index === 0
                ? [1, 1, 2, 2]
                : index === 1
                ? [1, 1, 8, 8]
                : [1, 1, 14, 14]
            }
            span={[17, 17, 5, 5]}
          >
            <Card
              key={index}
              name={exp.title}
              description={exp.description}
              date={exp.date}
              logo={exp.image}
            />
          </Col>
        ))}
      </GridContainer>
    </ExperienceContainer>
  );
};
export default Experiences;
