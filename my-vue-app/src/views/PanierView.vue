<template>
    <div>
      <AppPanier />
    </div>
</template>
<script>
import AppPanier from '@/components/AppPanier.vue';
import { usePanierStore } from '@/store/store.js';
export default {
    name: "PanierView",
    components: {AppPanier},
    data() {
      return {
        articles: [],
        panier: usePanierStore()
      }
    },
    watch: {
      panier: {
        handler() {
          console.log('panier changed');
          console.log(this.panier.getPanier);
          this.articles = this.panier.getPanier;
        },
        deep: true
      }
    },
}
</script>