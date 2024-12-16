<template>
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div @click="seeCard">
            <img class="p-8 rounded-t-lg" :class="{'cursor-pointer' : isClickable}" :src="image" alt="product image" />
        </div>
        <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3">{{ title }}</h5>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">{{ price.toFixed(2) }}</span>
                <button class="w-[60%] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" :onclick="addArticle">Ajouter au panier</button>
            </div>
        </div>
        <div v-if="moveCard" @click="moveCard = false" class="fixed w-full h-full top-0 left-0  items-center justify-between px-5 py-3 dark:bg-gray-700">
            <div class="z-50 absolute rounded w-full h-full top-0 left-0 px-5 py-3 dark:bg-gray-700">
                <div class="flex items-center justify-between">
                    <AppGallery :_img="image" />
                </div>
            </div>
            <data class="z-10 absolute w-full h-full top-0 left-0 opacity-60 items-center justify-between px-5 py-3 bg-gray-700 dark:bg-gray-700"></data>
        </div>
    </div>
</template>

<script>
import AppGallery from './AppGallery.vue';

export default {
    name: "AppCard",
    components: { AppGallery },
    data(){
        return {
            isClickable: false,
            moveCard: false
        }
    },
    props: {
        title: String,
        image: String,
        price: Number,
        id: Number,
        type: String,
        cat: String
    },
    watch: {
        type: {
           handler() {
            console.log(this.type + ' ' + this.cat);
            if(this.type == 'pokemon' && this.cat === 'Carte'){
                this.isClickable = true;
                console.log(this.isClickable);
            }
           },
           deep: true
        }
    },
    methods: {
        addArticle() {
            console.log(this.type + ' ' + this.cat);
            this.$emit('add-article', { title: this.title, price: this.price, image: this.image, id: this.id });
        },
        seeCard(){
            if(this.type == 'pokemon' && this.cat === 'Carte'){
                this.moveCard = true;
            }
        }
    }
}

</script>