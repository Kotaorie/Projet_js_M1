<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto">
            <h5 class="my-8 text-xl">Pseudo</h5>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Mon profil
                    </h1>
                    <div v-if="infoChanged" class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                        <p class="font-bold">Informations modifiées avec succès</p>
                    </div>
                    <div v-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                        <p class="font-bold">Une erreur est survenue</p>
                    </div>
                    <div class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="pseudo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mon pseudo</label>
                            <input type="pseudo" name="pseudo" id="pseudo" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="pseudo" required="">
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mon email</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="email" required="">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                            <input type="password" name="password" id="password" v-model="password" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required="">
                        </div>
                        <button class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" @click="changeUser">Enregistrer modification</button>
                        <button class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" :onclick="logout">Se déconnecter</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { useLoginStore } from '@/store/store';

export default {
    name: "AppLoginForm",
    data() {
        return {
            pseudo: '',
            email: '',
            password: '',
            infoChanged: false,
            error: false
        }
    },
    mounted() {
        this.pseudo = localStorage.getItem('name');
        this.email = localStorage.getItem('email');
    },
    watch: {
        pseudo: function () {
            this.error = false;
        },
        email: function () {
            this.error = false;
        },
        password: function () {
            this.error = false;
        }
    },
    methods: {
        logout() {
            try{
                localStorage.removeItem('login');
                localStorage.removeItem('email');
                localStorage.removeItem('id');
                localStorage.removeItem('name');
                useLoginStore().setIsLoggedIn(false);
                this.$router.push('/login');
            } catch (error) {
                console.error('An error occurred during logout:', error);
            }
        },
        async changeUser() {
            if(!this.pseudo && !this.email && !this.password){
                console.error('All fields are required');
                this.error = true;
                return;
            }else{
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(this.email)) {
                    console.error('Invalid email format');
                    this.error = true;
                    return;
                }
                let email = this.email;
                let password = this.password;
                let pseudo = this.pseudo;
                let id = localStorage.getItem('id');
                try {
                    const response = await fetch('http://localhost:3000/users/'+id, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({email, password, pseudo})
                    });
                    if (response.status === 200 || response.status === 204) {
                        this.infoChanged = true;
                    }else{
                        this.error = true;
                    }
                } catch (error) {
                    this.error = true;
                    console.error(error);
                }
            }
        }
    }
}
</script>