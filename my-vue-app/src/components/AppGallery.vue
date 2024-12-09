<template>
  <div ref="cardContainer" class="w-[20vw] h-[80vh]"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'AppGallery',
  mounted() {
    this.initThreeJS();
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
      const texture = textureLoader.load(require('@/assets/test.png'));

      // Création de la carte avec l'image
      const geometry = new THREE.PlaneGeometry(1, 1.5);
      const material = new THREE.MeshPhongMaterial({ map: texture, shininess: 100 });
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
        uniform sampler2D uTexture;
        uniform float time;
        uniform float angle;

        void main() {
        
          vec4 color = texture2D(uTexture, vUv);

          float blueIntensity = color.b - color.r;
          float shift = sin(time + color.r * 10.0 + vUv.x * 2.0  + angle * 10.0) * 0.2; 
          color.r -= shift;
          color.g -= shift;
          color.b -= shift;

          color = vec4(color.r, color.g, color.b, color.a);
          

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
