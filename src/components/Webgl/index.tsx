import React, { useLayoutEffect } from 'react';
import Sketch from './scene/scene';

const Webgl = () => {
  useLayoutEffect(() => {
    new Sketch({ dom: document.getElementById('scene')! });
  }, []);
  return <div id="scene" className="w-full h-screen"></div>;
};
export default Webgl;
