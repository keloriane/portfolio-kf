uniform float time;
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform sampler2D uPositions;
    float PI = 3.14159265359;
  
    void main(){
        vUv = uv;
        vec4 pos = texture2D(uPositions, uv);
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.);
        gl_PointSize = 10. * (1. / - mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
    }