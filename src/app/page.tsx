import PageContent from '@/components/Content/PageContent';
import React from 'react';
import { client } from '../../sanity/lib/client';
import { groq } from 'next-sanity';

function getServices() {
  return client.fetch(groq`
  *[_type == "services"]{
    title,
    description,
    "icons":icons[]{
      'url':asset->url
    },
    tags,
  }`);
}

function getProjects() {
  return client.fetch(groq`
  *[_type == "projects"]{
    title,
    description,
    "image":image.asset->url,
  }`);
}

export default async function Home() {
  const services = await getServices();
  const projects = await getProjects();

  return (
    <main className="">
      <PageContent projects={projects} services={services} />
    </main>
  );
}
