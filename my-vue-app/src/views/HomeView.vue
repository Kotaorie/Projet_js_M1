<template>
  <div class="place-content-center" >
    <AppDefaultHeading class="my-[35vh]"/>
    <AppGallery :_img="img"/>
  </div>
</template>
<script>
import AppDefaultHeading from '@/components/AppDefaultHeading.vue';
import AppGallery from '@/components/AppGallery.vue';

  export default {
    name: 'HomeView',
    components: {AppDefaultHeading, AppGallery},
    data() {
      return {
        img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_200.png',
      };
    },
    methods: {
      
    },
  }
</script>
  
<style scoped>

#darker{
  top: 0;
  left: 0;
}

</style>
  