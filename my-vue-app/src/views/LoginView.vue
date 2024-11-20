<template>
    <div>
       <AppLoginForm @login="login"/>
    </div>
</template>

<script>
import AppLoginForm from '@/components/AppLoginForm.vue';
import axios from 'axios';
export default {
    name: "LoginView",
    components: {AppLoginForm},
    methods: {
        async login(email, password) {
            try {
                console.log('Login attempt:', email, password);
                const response = await axios.post('http://localhost:3000/login', { email: email, password: password});
                console.log('Login response:', response);
            } catch (error) {
            console.error('An error occurred during login:', error);
            }
        }
    }
}
</script>
