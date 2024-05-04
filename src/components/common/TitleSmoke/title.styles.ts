import styled, { keyframes } from "styled-components";
import sprite from "@/assets/images/smoke_sprites2.webp";

const maskAnimation = keyframes`
    0% {  
      -webkit-mask-position: 0 0; 
       mask-position: 0 0; 
    }
    100% { 
      -webkit-mask-position: 0 100%; 
       mask-position: 0 100%; 
       }
`;
export const TitleMask = styled.h2`
  -webkit-mask-image: url(${sprite.src});
  mask-image: url(${sprite.src});
  -webkit-mask-size: 100% 3600%;
  mask-size: 100% 3600%;
  -webkit-mask-position: 0 0;
  mask-position: 0 0;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  animation: ${maskAnimation} 5.5s steps(35) 0.2s forwards;
`;
