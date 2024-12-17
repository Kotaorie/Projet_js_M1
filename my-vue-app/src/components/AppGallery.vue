<template>
  <div ref="cardContainer" class=" rounded-full w-[100vw] h-[100vh] flex justify-center align-middle"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'AppGallery',
  mounted() {
    this.initThreeJS();
  },
  props: {
    _img: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleError(error) {
      console.error('An error occurred:', error);
    },
    initThreeJS() {
      const container = this.$refs.cardContainer;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      // Charger la texture de l'image
      const textureLoader = new THREE.TextureLoader();
      textureLoader.crossOrigin = 'anonymous';
      const texture = textureLoader.load(this._img);

      // Création de la carte avec l'image
      const geometry = new THREE.PlaneGeometry(1, 1.5);
      const material = new THREE.MeshPhongMaterial({ map: texture, transparent: true });
      const card = new THREE.Mesh(geometry, material);
      scene.add(card);

      // Ajout d'un shaders
      const vertexShader = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `;

      const fragmentShader = `
        varying vec2 vUv;
        uniform sampler2D uTexture;  // Base card texture
        uniform sampler2D uNoiseMap; // Optional noise map for holographic effect
        uniform float time;
        uniform float angle;

        // Function to create a simple random effect based on UV coordinates
        float random(vec2 p) {
            return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
        }

        void main() {
            vec4 color = texture2D(uTexture, vUv);
            // Create dynamic shifts for each color channel with different frequencies and amplitudes
            float redShift = sin(time + vUv.x * 5.0 + vUv.y * 10.0 + angle * 2.0) * 0.3;
            float greenShift = cos(time + vUv.x * 6.0 + vUv.y * 10.0 + angle * 3.0) * 0.2;
            float blueShift = sin(time + vUv.x * 4.0 + vUv.y * 8.0 + angle * 1.5) * 0.4;

            color.r += redShift;
            color.g += greenShift;
            color.b += blueShift;

            color.r = clamp(color.r, 0.0, 1.0);
            color.g = clamp(color.g, 0.0, 1.0);
            color.b = clamp(color.b, 0.0, 1.0);

            float silverPoints = random(vUv * 200.0);  // Increase the scale of UVs for less frequent points

            if (silverPoints < 0.10) {  // Increase the threshold for fewer dots
                color.rgb += vec3(0.1, 0.1, 0.1);  // Decrease the intensity of the silver color (less visible)
            }

            vec4 noise = texture2D(uNoiseMap, vUv);
            color.rgb += noise.rgb * 0.1; // Subtle noise/texture pattern

            gl_FragColor = color;
        }
      `;

      const shaderMaterial = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        uniforms: {
          uTexture: { value: texture },
          angle: { value: 0 }, // Initialisation de l'angle à 0
        },
        transparent: true,
      });

      card.material = shaderMaterial;

      const ambientLight = new THREE.AmbientLight(0x404040, 2);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
      directionalLight.castShadow = true;
      directionalLight.position.set(5, 5, 5).normalize();
      scene.add(directionalLight);

      camera.position.z = 2;

      // Animations et interactions
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();

      container.addEventListener('mousemove', (event) => {
        const x = container.clientWidth;
        const y = container.clientHeight;
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const sensitivity = 2;
        if (mouseX < 0 || mouseX > x || mouseY < 0 || mouseY > y) return;
        
        // Calcul de la rotation de la carte
        card.rotation.y = ((mouseX / x) - 0.5) / sensitivity * Math.PI;
        card.rotation.x = ((mouseY / y) - 0.5) / sensitivity * Math.PI;
        shaderMaterial.uniforms.angle.value = card.rotation.x + card.rotation.y;

        renderer.render(scene, camera);
      });

      container.addEventListener('mouseleave', () => {
        card.rotation.x = 0;
        card.rotation.y = 0;
        shaderMaterial.uniforms.angle.value = 0; // Réinitialiser l'angle
        renderer.render(scene, camera);
      });
    } 

  }
};
</script>

<style>
.card-container {
  width: 50vh;
  height: 100%;
  position: relative;
}
</style>
