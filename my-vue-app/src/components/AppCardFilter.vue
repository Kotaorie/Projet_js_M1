<template>
    <section class="bg-gray-50 dark:bg-gray-900 flex items-center">
  <div class="max-w-screen-xl px-4 mx-auto my-8 lg:px-12 w-full">
    <div class="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
      <div class="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
        <div class="w-full md:w-1/2">
          <form class="flex items-center">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
              </div>
              <input type="text" id="simple-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" v-model="name" required="">
            </div>
          </form>
        </div>
        <div class="relative flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
          <div class="flex items-center w-full space-x-3 md:w-auto">
            <span class="text-sm font-medium text-gray-900 dark:text-gray-200">{{ minPrice }}€</span>
            <input id="minmax-range" type="range" :min="minPrice" :max="maxPrice+5" step="5" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" v-model="price">
            <span class="text-sm font-medium text-gray-900 dark:text-gray-200">{{ maxPrice }}€</span>
            <div id="actionsDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                </li>
              </ul>
              <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a>
              </div>
            </div>
            <button @click="toggleCategoryFunction" id="filterDropdownButton" class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
              </svg>
              Categories
              <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            <div v-if="toggleCategroy" id="filterDropdown" class="z-10 absolute top-10 right-0 w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
              <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Category
              </h6>
              <ul class="space-y-2 text-sm" >
                <li class="flex items-center"  v-for="(e, index) in categories" :key="index">
                  <input :id="'category-' + index" type="checkbox" v-model="e.checked"
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label :for="'category-' + index" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {{ e.name }}
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
import axios from 'axios';

export default {
    name: "AppCardFilter",
    props: {
        minPrice: Number || 0,
        maxPrice: Number || 0,
    },
    data() {
        return {
            price: (this.minPrice + this.maxPrice) / 2,
            name: '',
            categories: [],
            toggleCategroy: false
        }
    },
    watch: {
        price() {
            this.$emit('filter', this.price, this.name, this.categories);
        },
        name() {
            this.$emit('filter', this.price, this.name, this.categories);
        },
        categories: {
          handler() {
            this.$emit('filter', this.price, this.name, this.categories);
            this.toggleCategroy = false;
          },
          deep: true
        }
    },
    methods: {
        toggleCategoryFunction() {
          this.toggleCategroy = !this.toggleCategroy;
        },
        async getCategories() {
          try {
            const cat = await axios.get('http://localhost:3000/categories');
            for(let i = 0; i < cat.data.length; i++){
              this.categories.push({ name: cat.data[i].categoryName, checked: false });
            }
          } catch (error) {
            console.error(error);
          }
        }
    },
    created() {
        this.getCategories();
    }
}
</script>