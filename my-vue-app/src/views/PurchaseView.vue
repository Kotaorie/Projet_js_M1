<template>
    <div>
      <div class="my-8">
        <AppCardFilter @filter="getCard" :minPrice="minPrice" :maxPrice="maxPrice"/>
      </div>
        <div class="grid grid-cols-5 gap-4 w-[80%] mx-auto">
          <AppCard v-for="item in cards" :key="item" :image="item.imageURL" :title="item.name" :price="item.price" :id="item.id" @add-article="addArticle"/>
        </div>
    </div>
  </template>
    
<script>
  import AppCard from '@/components/AppCard.vue';
  import AppCardFilter from '@/components/AppCardFilter.vue';
  import axios from 'axios';
  import {usePanierStore} from '@/store/store.js';
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
    setup() {
      const panier = usePanierStore();
      return { panier };
    },
    props: {
      category: String,
    },
    watch: {
      category() {
        this.getCard();
      }
    },
    methods: {
      async getCard(price, name, categories) {
        var response = '';
        var filter = '';
        if(price){
          filter = '&price='+price;
        }
        if(name){
          filter = '&name='+name;
        }
        if(categories){
          for(let i = 0; i < categories.length; i++){
            if(categories[i].checked){
             filter += '&categories='+categories[i].name;
            }
          }
          console.log(filter);
        }
        response = await axios.get('http://localhost:3000/cards?type='+this.category+filter);
        console.log(filter);
        this.cards = response.data;
        console.log(this.cards);
        for (let i = 0; i < this.cards.length; i++) {
          this.minPrice = Math.min(this.minPrice, this.cards[i].price);
          this.maxPrice = Math.max(this.maxPrice, this.cards[i].price);
        }
      },
      addArticle(name, price, image, id) {
        this.panier.addToPanier(name, price, image, id);
        console.log(this.panier.getPanier);
      },
    }
  }
</script>
    
<style scoped>
</style>
    