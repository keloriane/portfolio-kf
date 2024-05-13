uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
uniform sampler2D texture1;

float PI = 3.14159265359;

void main(){
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = 1000 * (1.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
}