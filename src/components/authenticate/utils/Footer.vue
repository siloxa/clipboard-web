<script setup>
    defineProps({
        page: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div>
        <p v-if="page == 'login'">Don't have an account? <RouterLink to="/register">REGISTER</RouterLink></p>
        <p v-if="page == 'register'">Already have an account? <RouterLink to="/login">LOGIN</RouterLink></p>
        <p v-if="page == 'forgot-password'"><RouterLink to="/login">Back To Login</RouterLink></p>
    </div>
</template>

<style scoped>
    div{
        display: flex;
        padding: 8px 0;
    }
    div p{
        margin: auto;
    }
</style>