"use client";
import React from "react";
import Profile from "./Profile";
import Expertises from "./Expertises";
import Tag from "../common/Tag";
import Technologies from "./Technologies";
import nextjs from "@/../public/img/nextjs.svg";
import nuxtjs from "@/../public/img/nuxtjs.svg";
import wordpress from "@/../public/img/wordpress.svg";
import reactjs from "@/../public/img/reactjs.svg";
import vuejs from "@/../public/img/vuejs.svg";
import typescript from "@/../public/img/typescript.svg";
import docker from "@/../public/img/docker.svg";
import postgresql from "@/../public/img/postgresql.svg";
import nodejs from "@/../public/img/nodejs.svg";
import * as S from "./sidebar.styles";
import ProfilePic from "@/../public/img/profile.png";
import Misc from "./Misc";

const SideBar = () => {
  const expertises = [
    { title: "Web Development", src: "" },
    { title: "Frontend", src: "" },
    { title: "Backend", src: "" },
    { title: "Devops", src: "" },
    { title: "AWS", src: "" },
  ];
  const technologies = [
    { title: "Wordpress", src: wordpress },
    { title: "ReactJS", src: reactjs },
    { title: "Typescript", src: typescript },
    { title: "VueJS", src: vuejs },
    { title: "NextJS", src: nextjs },
    { title: "Typescript", src: typescript },
    { title: "NuxtJS", src: nuxtjs },
    { title: "Postgresql", src: postgresql },
    { title: "NodeJS", src: nodejs },
    { title: "Postgresql", src: postgresql },
    { title: "Docker", src: docker },
  ];

  return (
    <S.SideBarContainer>
      <div className="sidebaar__wrapper">
        <Profile src={ProfilePic} />
        <Expertises title="Expertises" component={Tag} items={expertises} />
        <Expertises
          title="Technologies"
          component={Technologies}
          items={technologies}
        />
        <Misc />
      </div>
    </S.SideBarContainer>
  );
};

export default SideBar;
