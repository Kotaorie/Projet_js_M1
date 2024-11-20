<template>
    <div>
      <div class="my-8">
        <AppCardFilter @filter="addCard" :minPrice="minPrice" :maxPrice="maxPrice"/>
      </div>
        <div class="grid grid-cols-5 gap-4 w-[80%] mx-auto">
          <AppCard v-for="item in cards" :key="item" :image="item.imageURL" :title="item.title" :price="item.price"/>
        </div>
    </div>
  </template>
    
<script>
  import AppCard from '@/components/AppCard.vue';
  import AppCardFilter from '@/components/AppCardFilter.vue';
  import axios from 'axios';
  export default {
    name: 'PurchaseView',
    components: {AppCard, AppCardFilter},
    data() {
      return {
        cards: 0,
        minPrice: 0,
        maxPrice: 0,
      }
    },
    props: {
      category: String,
    },
    watch: {
      category() {
        this.addCard();
      }
    },
    methods: {
      async addCard(price, name) {
        var response = '';
        var filter = '';
        if(price){
          filter = '&price='+price;
        }
        if(name){
          filter = '&name='+name;
        }
        response = await axios.get('http://localhost:3000/cards?type='+this.category+filter);
        console.log(filter);
        this.cards = response.data;
        for (let i = 0; i < this.cards.length; i++) {
          this.minPrice = Math.min(this.minPrice, this.cards[i].price);
          this.maxPrice = Math.max(this.maxPrice, this.cards[i].price);
        }
      }
    }
  }
</script>
    
<style scoped>
</style>
    