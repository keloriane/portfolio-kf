'use client';
import React, { useEffect } from 'react';
import Cursor from '../common/Cursor';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import About from '@/components/About';
import Experiences from '@/components/Experiences';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import localFont from 'next/font/local';
import { ServicesPropsData } from '@/interfaces/service.type';
import { ProjectsPropsData } from '@/interfaces/projects.type';
import Webgl from '@/components/Webgl';

const satoshi = localFont({
  src: [
    {
      path: './../../assets/fonts/Satoshi-Bold.ttf',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './../../assets/fonts/Satoshi-Medium.ttf',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './../../assets/fonts/Satoshi-Light.woff',
      weight: 'normal',
      style: 'normal',
    },
  ],
});

const clashDisplay = localFont({
  src: [
    {
      path: './../../assets/fonts/ClashDisplay-Light.ttf',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './../../assets/fonts/ClashDisplay-Semibold.woff',
      weight: 'bold',
      style: 'normal',
    },
  ],
});
interface PageContentProps {
  services: ServicesPropsData[];
  projects: ProjectsPropsData[];
}

const PageContent: React.FC<PageContentProps> = ({ services, projects }) => {
  const [imageSrc, setImageSrc] = React.useState<string[]>([]);
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);

  useEffect(() => {
    const preloadImages = () => {
      const urls: string[] = [];
      projects.forEach((project) => {
        const img = new Image();
        img.src = project.image;
        urls.push(img.src);
      });
      setImageSrc(urls);
    };
    preloadImages();
  }, []);

  const handleImageClick = (index: any) => {
    setImageUrl(index);
  };
  return (
    <main>
      <Webgl />
      <Cursor backgroundImage={imageUrl} />
      <Nav />
      <Hero className={satoshi.className} />
      <Projects
        className={clashDisplay.className}
        onImageClick={handleImageClick}
        projects={projects}
        imageUrls={imageSrc}
      />
      <Services
        clash={clashDisplay.className}
        satoshi={satoshi.className}
        services={services}
      />
      <About clash={clashDisplay.className} satoshi={satoshi.className} />
      <Experiences clash={clashDisplay.className} satoshi={satoshi.className} />
      <Contact className={satoshi.className} />
      <Footer />
    </main>
  );
};
export default PageContent;
