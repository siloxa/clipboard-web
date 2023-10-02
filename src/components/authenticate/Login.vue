<script setup>
    import Button from '../utils/Button.vue';
    import Input from '../utils/Input.vue';
    import Header from './utils/Header.vue';
    import PasswordToggleIcon from './icons/PasswordToggleIcon.vue'
</script>

<template>
    <div class="row mt-5">
        <div class="col-12 col-sm-8 col-md-6 mx-auto">
             <div class="login-box size-card m-auto">
                <Header icon="user" title="Welcome Back!"/>
                <div class="mb-3" style="margin-top: 80px;">
                    <Input type="email" label="Email" placeholder="Enter your email"/>
                </div>
                <div class="mb-4 position-relative password-fild">
                    <Input type="password" label="Password" placeholder="Enter your password"/>
                    <PasswordToggleIcon class="position-absolute icons-pos-3" />
                    <p class="text-muted">Must be at least 8 characters.</p>
                </div>
                <p class="fw-bold mb-4">Forgot password?</p>
                <div class="login-button-div mb-4">
                    <Button text="Login" />
                </div>
                <div class="footer-page">
                    <p class="text-center">You don't have an account?<a href="#">Register</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.size-card{
    width: 314px;
    height: 509px;
}
.icons-pos-3{
    left: 90%;
    top: 59%;
}
.password-fild{
    width: 100%;
    height: 74px;
}
.login-button-div{
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
}
.footer-page{
    display: flex;
}
.footer-page p{
    align-items: center;
    margin: auto;
}
</style>