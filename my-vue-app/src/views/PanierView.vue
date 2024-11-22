<template>
    <div>
      <AppPanier :articles="articles" :price="price" @remove-item="removeArticle" @increase-quantity="increaseQuantity" @decrease-quantity="decreaseQuantity"/>
    </div>
</template>
<script>
import AppPanier from '@/components/AppPanier.vue';
import { usePanierStore } from '@/store/store';
export default {
    name: "PanierView",
    components: {AppPanier},
    data() {
      return {
        articles: [], 
        panier: usePanierStore(),
        price: 0,
      }
    },
    mounted() {
     this.getArticle();
     this.getPriceTotal();
    },
    watch: {
      articles: {
        handler() {
          this.getPriceTotal();
        },
        deep: true
      }
    },
    methods: {
      removeArticle(id) {
        this.panier.removeFromPanier(id);
        console.log(this.panier.getPanier);
        this.getArticle();
      },
      increaseQuantity(articleId) {
        this.articles.find(article => article.id === articleId.id).quantity += 1;
      },
      decreaseQuantity(articleId) {
        if(this.articles.find(article => article.id === articleId.id).quantity === 1){
          this.removeArticle(articleId.id);
        }else{
          this.articles.find(article => article.id === articleId.id).quantity -= 1;
        }
      },
      getArticle(){
        this.articles = this.panier.getPanier;
        const articleMap = new Map();
        this.articles.forEach(article => {
          if (articleMap.has(article.id)) {
            articleMap.get(article.id).quantity += 1;
          } else {
            articleMap.set(article.id, { ...article, quantity: 1 });
          }
        });
        this.articles = Array.from(articleMap.values());
      },
      getPriceTotal(){
        this.price = 0;
        this.articles.forEach(article => {
          this.price += article.price * article.quantity;
        });
        this.price = this.price.toFixed(2);
      }
    }
}
</script>