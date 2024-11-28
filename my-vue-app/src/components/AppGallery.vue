<template>
    <div ref="cardContainer" class="w-[20vw] h-[80vh]"></div>
    <h1>test</h1>
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
        console.log('initThreeJS');
        const container = this.$refs.cardContainer;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
  
        // Charger la texture de l'image
        const textureLoader = new THREE.TextureLoader();
        textureLoader.crossOrigin = '';
        const texture = textureLoader.load(require('@/assets/test.png'), () => {
          renderer.render(scene, camera);
        });
  
        // Création de la carte avec l'image
        const geometry = new THREE.PlaneGeometry(1, 1.5); // Dimensions de la carte
        const material = new THREE.MeshPhongMaterial({ map: texture, shininess: 100 }); // Matériau brillant avec texture
        const card = new THREE.Mesh(geometry, material);
        scene.add(card);
  
        // Lumière
        const ambientLight = new THREE.AmbientLight(0x404040, 2); // lumière ambiante douce
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.castShadow = true;
        directionalLight.position.set(5, 5, 5).normalize();
        scene.add(directionalLight);
  
        camera.position.z = 2;

        container.addEventListener('mousedown', (event) => {
          container.style.cursor = 'grabbing';
          const initialX = event.clientX;
          const initialY = event.clientY;
          const initialRotationX = card.rotation.x;
          const initialRotationY = card.rotation.y;
          const onMouseMove = (event) => {
            const mouseX = (event.clientX - initialX) / 100;
            const mouseY = (event.clientY - initialY) / 100;
            card.rotation.x = initialRotationX + mouseY;
            card.rotation.y = initialRotationY + mouseX;
            renderer.render(scene, camera);
          };
          const onMouseUp = () => {
            container.style.cursor = 'grab';
            card.rotation.x = 0;
            card.rotation.y = 0;
            renderer.render(scene, camera);
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
          };
          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
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
  