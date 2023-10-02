<script>
    import Header from './utils/Header.vue';
    import Button from '../utils/Button.vue';
    import Input from '../utils/Input.vue';
    
    export default {
        components: {
            Header,
            Button,
            Input
        }
    }
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
                        <svg class="position-absolute icons-pos-3" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path d="M7.16196 3.89488C7.4329 3.85482 7.7124 3.83333 8.00028 3.83333C11.4036 3.83333 13.6369 6.83656 14.3871 8.02455C14.4779 8.16833 14.5233 8.24023 14.5488 8.35112C14.5678 8.43439 14.5678 8.56578 14.5487 8.64905C14.5233 8.75993 14.4776 8.8323 14.3861 8.97705C14.1862 9.29343 13.8814 9.73807 13.4777 10.2203M4.48288 4.97669C3.0415 5.95447 2.06297 7.31292 1.61407 8.02352C1.52286 8.16791 1.47725 8.24011 1.45183 8.35099C1.43273 8.43426 1.43272 8.56563 1.45181 8.64891C1.47722 8.75979 1.52262 8.83168 1.61342 8.97545C2.36369 10.1634 4.59694 13.1667 8.00028 13.1667C9.37255 13.1667 10.5546 12.6784 11.5259 12.0177M2.00028 2.5L14.0003 14.5M6.58606 7.08579C6.22413 7.44772 6.00028 7.94772 6.00028 8.5C6.00028 9.60457 6.89571 10.5 8.00028 10.5C8.55256 10.5 9.05256 10.2761 9.41449 9.91421" stroke="#757575" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
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