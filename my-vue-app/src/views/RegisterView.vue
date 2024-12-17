<template>
    <div>
        <AppRegisterForm @register="register" :error="error"/>
    </div>
</template>
<script>
    import AppRegisterForm from '@/components/AppRegisterForm.vue';
    export default {
        name: "RegisterView",
        components: {AppRegisterForm},
        data() {
            return {
                error: false
            };
        },
        methods: {
            async register(email, password, pseudo) {
                if(!pseudo || !email || !password){
                    console.error('All fields are required');
                    this.error = true;
                    return;
                }
                try {
                    const response = await fetch('http://localhost:3000/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({email, password, pseudo})
                    });
                    if (response.status === 200 || response.status === 204) {
                        this.$router.push('/login');
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
</script>
