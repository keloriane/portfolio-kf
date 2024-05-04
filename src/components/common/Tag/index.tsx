"use client";
import React from "react";
import * as S from "./tag.styles";
import { ExpertiseItem } from "@/types";

const Tag: React.FC<ExpertiseItem> = ({ title }) => {
  return <S.TagContainer>{title}</S.TagContainer>;
};

export default Tag;
