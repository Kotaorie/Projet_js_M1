<template>
    <div>
      <div class="my-8">
        <img src="https://www.pokelite.fr/wp-content/uploads/2024/09/Design-sans-titre-38-1024x394.png.webp" alt="" class="w-[80%] h-[24vh] mx-auto" style="object-fit: cover;">
      </div>
        <div class="grid grid-cols-5 gap-4 w-[80%] mx-auto">
          <AppCard v-for="item in cards" :key="item" :image="item.imageURL" :title="item.title" :price="item.price"/>
        </div>
    </div>
  </template>
    
<script>
  import AppCard from '@/components/AppCard.vue';
  import axios from 'axios';
  export default {
    name: 'PurchaseView',
    components: {AppCard},
    data() {
      return {
        cards: 10,
      }
    },
    props: {
      category: String,
    },
    created() {
      this.addCard();
    },
    methods: {
      async addCard() {
        const response = await axios.get('http://localhost:3000/cards?type='+this.category);
        this.cards = response.data;
      }
    }
  }
</script>
    
<style scoped>
</style>
    