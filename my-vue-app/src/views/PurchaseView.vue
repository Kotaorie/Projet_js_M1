<template>
    <div>
      <h1>{{ _title }} Page</h1>
      <p>Welcome to the {{ _title }} page!</p>
      <div class="flex">
        <AppCard v-for="item in cards" :key="item"/>
      </div>
    </div>
  </template>
    
<script>
    import AppCard from '@/components/AppCard.vue';
    export default {
        name: 'PurchaseView',
        components: {AppCard},
        data() {
          return {
            cards: 10,
          }
        },
        props: {
            _title: String,
        }
    }
</script>
    
  <style scoped>
  
  </style>
    