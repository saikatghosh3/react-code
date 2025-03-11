import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ShapeBlur = () => {
  const mountRef = useRef();

  useEffect(() => {
    const mount = mountRef.current;
    let animationFrameId;
    let time = 0, lastTime = 0;

    const vMouse = new THREE.Vector2();
    const vMouseDamp = new THREE.Vector2();
    const vResolution = new THREE.Vector2();

    let w = 1, h = 1;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera();
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const geo = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.ShaderMaterial({
      vertexShader: /* glsl */`
        varying vec2 v_texcoord;
        void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            v_texcoord = uv;
        }
      `,
      fragmentShader: /* glsl */`
        varying vec2 v_texcoord;
        uniform vec2 u_mouse;
        uniform vec2 u_resolution;
        uniform float u_pixelRatio;

        uniform float u_shapeSize;
        uniform float u_roundness;
        uniform float u_borderSize;
        uniform float u_circleSize;
        uniform float u_circleEdge;

        float sdRoundRect(vec2 p, vec2 b, float r) {
            vec2 d = abs(p - 0.5) * 4.2 - b + vec2(r);
            return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - r;
        }
        float fill(float x, float size, float edge) {
            return 1.0 - smoothstep(size - edge, size + edge, x);
        }

        void main() {
            vec2 st = v_texcoord;
            float sdf = sdRoundRect(st, vec2(1.2), 0.4);
            vec3 color = vec3(fill(sdf, 0.6, 0.1));
            gl_FragColor = vec4(color, 1.0);
        }
      `,
      uniforms: {
        u_mouse: { value: vMouseDamp },
        u_resolution: { value: vResolution },
        u_pixelRatio: { value: 2 },
        u_shapeSize: { value: 1.2 },
        u_roundness: { value: 0.4 },
        u_borderSize: { value: 0.05 },
        u_circleSize: { value: 0.3 },
        u_circleEdge: { value: 0.5 }
      },
      transparent: true
    });

    const quad = new THREE.Mesh(geo, material);
    scene.add(quad);

    const resize = () => {
      w = mount.clientWidth;
      h = mount.clientHeight;
      const dpr = Math.min(window.devicePixelRatio, 2);

      renderer.setSize(w, h);
      renderer.setPixelRatio(dpr);

      camera.left = -w / 2;
      camera.right = w / 2;
      camera.top = h / 2;
      camera.bottom = -h / 2;
      camera.updateProjectionMatrix();

      quad.scale.set(w, h, 1);
      vResolution.set(w, h).multiplyScalar(dpr);
      material.uniforms.u_pixelRatio.value = dpr;
    };

    resize();
    window.addEventListener('resize', resize);

    const update = () => {
      time = performance.now() * 0.001;
      const dt = time - lastTime;
      lastTime = time;

      vMouseDamp.x = THREE.MathUtils.damp(vMouseDamp.x, vMouse.x, 8, dt);
      vMouseDamp.y = THREE.MathUtils.damp(vMouseDamp.y, vMouse.y, 8, dt);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(update);
    };
    update();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className="relative w-full h-full flex items-center justify-center">
      <h2 className="absolute text-white text-3xl font-bold">
        Hi, this is Saikat Ghosh
      </h2>
    </div>
  );
};

export default ShapeBlur;
