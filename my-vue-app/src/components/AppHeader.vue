<template>
<nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/logo.png" class="h-10" alt="Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CardMaster</span>
    </div>
    
    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 -lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <RouterLink to="/" class="block py-2 px-3 text-gray-900 bg-blue-700  md:bg-transparent md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" >Accueil</RouterLink>
        </li>
        <li>
          <button id="dropdownNavbarLink" ref="Carte" @click="toggleDropdown" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-8 py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
            Cartes {{ this.cardName }}
            <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <div id="dropdownNavbar" v-if="isDropdownOpen" class="z-10 font-normal bg-white divide-y divide-gray-100 absolute shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <RouterLink exactActiveClass to="/pokemon" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="closeDropdown">Carte Pokémon</RouterLink>
                </li>
                <li>
                  <RouterLink exactActiveClass to="/mtg" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="closeDropdown">Carte Magic The Gathering</RouterLink>
                </li>
                <li>
                  <RouterLink exactActiveClass to="/ygo" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="closeDropdown">Carte Yu Gi Oh</RouterLink>
                </li>
              </ul>
            </div>
        </li>
        <li>
          <RouterLink id="profil" v-if="login" to="/profil" class="block py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Profil</RouterLink>
        </li>
        <li v-if="!login">
          <RouterLink id="login" to="/login" class="block py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log-in</RouterLink>
        </li>
        <li v-if="login">
          <RouterLink id="panier" to="/panier" class="block py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Panier</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<script>
import { useLoginStore } from '@/store/store';
export default {
    name: "AppHeader",
    data() {
        return {
            login: false,
            name: '',
            loginStore: useLoginStore(),
            url: this.$router.name,
            cardName: '',
            isDropdownOpen: false
        }
    },
    created() {
        this.showPanier();
        console.log(this.url);
    },
    watch: {
      loginStore: {
        handler() {
          this.login = this.loginStore.isLoggedIn;
        },
        deep: true
      },
      $route: {
        handler() {
          this.url = this.$route.name;
          console.log(this.url);
          if (this.url === 'Pokemon' || this.url === 'MTG' || this.url === 'YGO') {
            this.cardName = this.url;
            this.$refs.Carte.style.borderBottom = '2px solid #2563EB';
          }else {
            this.cardName = '';
            this.$refs.Carte.style.borderBottom = 'none';
          }
        },
        deep: true
      }
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = true  // Inverse l'état de l'affichage du dropdown
      },
      closeDropdown() {
          this.isDropdownOpen = false;  // Ferme le dropdown
      },
      showPanier() {
        this.name = localStorage.getItem('name');
        this.login = localStorage.getItem('login');
      }
    }
}
</script>
<style>
a.router-link-exact-active {
  border-bottom: 2px solid #2563EB;
}
</style>