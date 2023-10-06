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
            <Header icon="key" title="Forgot Password?"/>
        </template>
        <div class="mb-3" style="margin-top: 80px;">
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
.icons-pos-3{
    left: 90%;
    top: 59%;
}
.password-fild{
    width: 100%;
    height: 74px;
}
.forgot-pass{
    margin-bottom: 36px;
}
</style>