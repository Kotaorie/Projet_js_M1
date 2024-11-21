<template>
    <div>
        <AppRegisterForm @register="register" />
    </div>
</template>
<script>
    import AppRegisterForm from '@/components/AppRegisterForm.vue';
    export default {
        name: "RegisterView",
        components: {AppRegisterForm},
        methods: {
            async register(email, password, pseudo) {
                try {
                    const response = await fetch('http://localhost:3000/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({email, password, pseudo})
                    });
                    if (response.status === 200 || response.status === 204) {
                        this.$router.push({ name: 'Login' });
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }
</script>
