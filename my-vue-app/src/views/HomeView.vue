<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the home page!</p>
    <button @click="test()">zizi</button>
  </div>
</template>
  
<script>
import axios from 'axios';
  export default {
    name: 'HomeView',
    methods: {
      async test() {
        try {
          const response = await axios.get('http://localhost:3000/test');
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    },
  }
</script>
  
<style scoped>

</style>
  