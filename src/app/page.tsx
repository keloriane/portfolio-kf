import React from "react";
import GridContainer from "@/components/common/Container";
import Col from "@/components/common/Col";
import Header from "@/components/Header";
import Story from "@/components/Story";
import Portfolio from "@/components/Portfolio";
import Experiences from "@/components/Experiences";
import Contact from "@/components/Contact";
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { Scene } from "three";
import SceneComponent from "@/components/Scene";

function getExpertises() {
  return client.fetch(groq`
  *[_type == "expertises"]{
    title,
    description,
    "icons":icons[]{
      'url':asset->url,
      'alt':assets->alt
    },
    tags,
  }`);
}

function getProjects() {
  return client.fetch(groq`
  *[_type == "projects"]{
    title,
    "projectList": projectList[]{
        "image": image.asset->url,
        description,
        projectTitle,
        tag,
        tech,
        slug,
    }
}
`);
}

function getExperiences() {
  return client.fetch(groq`
  *[_type == "experiences"]{
    title,
    "experiencesList": experiencesList[]{
        "image": image.asset->url,
        description,
        title,
   

    }
}

  `);
}

export default async function Home() {
  const expertises = await getExpertises();
  const projects = await getProjects();
  const expertise = expertises[0];
  const experiences = await getExperiences();

  return (
    <main style={{ display: "flex", height: "100vh" }}>
      <GridContainer colCount={24} colGap={20}>
        <Col
          column={[1, 1, 1, 1, 1, 1]}
          span={[24, 24, 24, 24, 24, 24]}
          className="main-content"
        >
          <Header />
          <Portfolio
            title={projects[0].title}
            works={projects[0].projectList}
          />
          <Story
            title={expertise.title}
            description={expertise.description}
            icons={expertise.icons}
            tags={expertise.tags}
          />
          <Experiences
            title={experiences[0].title}
            experiences={experiences[0].experiencesList}
          />
          <Contact />
        </Col>
      </GridContainer>
    </main>
  );
}
