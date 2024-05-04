import Tag from "@/components/common/Tag";
import React from "react";
import { ExpertiseItem } from "@/types";
import * as S from "./expertises.styles";

interface ExpertisesProps {
  items: ExpertiseItem[];
  title: string;
  component: React.FC<ExpertiseItem>;
}

const Expertises: React.FC<ExpertisesProps> = ({
  title,
  items,
  component: Component,
}) => {
  return (
    <div>
      <div className="title__container">
        <h2>{title}:</h2>
      </div>
      <S.ExpertiseContainer>
        {items.map((exp, index) => (
          <div className="tech" key={index}>
            <Component {...exp} />
          </div>
        ))}
      </S.ExpertiseContainer>
    </div>
  );
};

export default Expertises;
