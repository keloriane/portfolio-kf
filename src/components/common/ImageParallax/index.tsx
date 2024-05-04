import React, { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ImageParallaxProps = {
  src: string;
};

const ImageParallax: React.FC<ImageParallaxProps> = ({ src }) => {
  const [imageHeight, setImageHeight] = useState<number | undefined>(undefined);
  const imageRef = React.useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const image = imageRef.current;

    if (!image) return;

    // Calculate image aspect ratio
    const aspectRatio = image.width / image.height;

    // Calculate container height based on aspect ratio
    const containerHeight = image.clientWidth / aspectRatio;

    setImageHeight(containerHeight);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: image,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(image, { y: containerHeight / 10, ease: "none" });

    const scrollTrigger = ScrollTrigger.create({
      trigger: image,
      start: "top bottom",
      end: "bottom top",
    });

    return () => {
      tl.kill();
      scrollTrigger.kill();
    };
  }, [imageRef]);

  return (
    <div style={{ overflow: "hidden", height: imageHeight }}>
      <img
        ref={imageRef}
        src={src}
        alt="Parallax Image"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default ImageParallax;
