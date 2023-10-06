<script setup>
    import Button from '../utils/Button.vue';
    import Input from '../utils/Input.vue';
    import AuthenticateForm from './utils/AuthenticateForm.vue'
    import Header from './utils/Header.vue';
    import Footer from './utils/Footer.vue';
</script>

<template>
    <AuthenticateForm>
        <template #header>
            <Header icon="key" title="Forgot Password?"/>
        </template>
        <div class="email-input">
            <Input type="email" label="Email" placeholder="Enter your email"/>
        </div>
        <template #button>
            <Button text="RESET PASSWORD" />
        </template>
        <template #footer>
            <Footer page="forgot-password" />
        </template>
    </AuthenticateForm>
</template>

<style scoped>
.email-input{
    margin-top: 80px;
    margin-bottom: 36px;
}
</style>