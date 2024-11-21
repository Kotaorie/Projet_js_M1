<template>
    <div>
      <AppLoginForm @login="login"/>
    </div>
  </template>
  
  <script>
  import AppLoginForm from '@/components/AppLoginForm.vue';
  import axios from 'axios';
  import { useLoginStore } from '@/store/store.js'; // Assurez-vous que le chemin est correct
  
  export default {
    name: "LoginView",
    components: { AppLoginForm },
    setup() {
      const loginStore = useLoginStore();
      return { loginStore };
    },
    methods: {
      async login(email, password) {
        try {
          const response = await axios.post('http://localhost:3000/login', { email, password });
          if (response.status === 200 || response.status === 204) {
            localStorage.setItem('login', true);
            localStorage.setItem('name', response.data.pseudo);
            this.loginStore.setIsLoggedIn(true);
            this.loginStore.setUserName(response.data.pseudo);
            this.$router.push('/profil');
          }
        } catch (error) {
          console.error('An error occurred during login:', error);
        }
      }
    }
  };
  </script>
  