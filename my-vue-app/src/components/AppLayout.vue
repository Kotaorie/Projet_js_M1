<template>
    <div class="app">
        <AppHeader/>
        <div class="main dark:bg-slay-900">
            <router-view />
        </div>
        <AppFooter/>
        
    </div>
</template>

<script>
import AppFooter from './AppFooter.vue';
import AppHeader from './AppHeader.vue';

export default {
    name: "AppLayout",
    components: {AppFooter, AppHeader}
}
</script>

<style scoped>

body {
    margin: 0;
    padding: 0;
}
.body {
    height: 80vh;
    background-color: #EFF1ED
}
.main {
    background-color: #f9fafb;
    min-height: 70vh;
}
</style>