<template>
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
            <img class="p-8 rounded-t-lg" :src="image" alt="product image" />
        </div>
        <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">{{ price }}</span>
                <button class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" :onclick="addArticle">Ajouter au panier</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppCard",
    props: {
        title: String,
        image: String,
        price: Number,
    },
    methods: {
        addArticle() {
            this.$emit('add-article', { title: this.title, price: this.price });
        }
    }
}

</script>