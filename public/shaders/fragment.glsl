uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;

float PI = 3.14159265359;

attribute vec3 aRandom;
attribute float aSize;

vec3 getPos(float progress) {
    vec3 pos = vec3(0.)
    float angle = progress * PI * 2.;
    pos.x = cos(angle);
    pos.y = sin(angle);
    return pos;
}

void main() {
    vec3 color = vec3(0.136 , 0.559, 0.832);
    gl_FragColor = vec4(color, 1.)
}