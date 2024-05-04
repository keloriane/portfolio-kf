import React from "react";
import Image from "next/image";
import { ExpertiseItem } from "@/types";

const Technologies: React.FC<ExpertiseItem> = ({ src, title }) => {
  return (
    <div>
      <Image src={src ? src : ""} alt={title ? title : ""} />
      <h4>{title}</h4>
    </div>
  );
};

export default Technologies;
