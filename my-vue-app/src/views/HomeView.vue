<template>
  <div class="place-content-center" >
    <AppDefaultHeading class="my-[35vh]"/>
    <AppGallery/>
  </div>
</template>
<script>
import AppDefaultHeading from '@/components/AppDefaultHeading.vue';
import AppGallery from '@/components/AppGallery.vue';

  export default {
    name: 'HomeView',
    components: {AppDefaultHeading, AppGallery},
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
  