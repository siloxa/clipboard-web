<script setup>
    import Button from '../utils/Button.vue';
    import Input from '../utils/Input.vue';
    import AuthenticateForm from './utils/AuthenticateForm.vue'
    import Header from './utils/Header.vue';
    import Footer from './utils/Footer.vue';
    import PasswordToggleIcon from './icons/PasswordToggleIcon.vue'
</script>

<template>
    <AuthenticateForm>
        <template #header>
            <Header icon="user" title="Welcome!"/>
        </template>
        <div class="mb-3" style="margin-top: 80px;">
            <Input type="email" label="Email" placeholder="Enter your email"/>
        </div>
        <div class="mb-4 position-relative password-fild">
            <Input type="password" label="Password" placeholder="Enter your password"/>
            <PasswordToggleIcon class="position-absolute icons-pos-3" />
            <p class="text-muted" style="display: none;">Must be at least 8 characters.</p>
        </div>
        <template #button>
            <Button text="REGISTER" />
        </template>
        <template #footer>
            <Footer page="register" />
        </template>
    </AuthenticateForm>
</template>

<style scoped>
.icons-pos-3{
    left: 90%;
    top: 59%;
}
.password-fild{
    width: 100%;
    height: 74px;
}
</style>