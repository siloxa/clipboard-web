<script setup>
</script>

<template>
    <div class="authentication-box">

        <div class="authentication-header">
            <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="56" height="56" rx="28" fill="#CDD0FF"/><rect x="5" y="5" width="56" height="56" rx="28" stroke="#E7E8FF" stroke-width="10"/><path d="M41 42C41 40.6044 41 39.9067 40.8278 39.3389C40.44 38.0605 39.4395 37.06 38.1611 36.6722C37.5933 36.5 36.8956 36.5 35.5 36.5H30.5C29.1044 36.5 28.4067 36.5 27.8389 36.6722C26.5605 37.06 25.56 38.0605 25.1722 39.3389C25 39.9067 25 40.6044 25 42M37.5 28.5C37.5 30.9853 35.4853 33 33 33C30.5147 33 28.5 30.9853 28.5 28.5C28.5 26.0147 30.5147 24 33 24C35.4853 24 37.5 26.0147 37.5 28.5Z" stroke="#5E67FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <h1>Welcome!</h1>
        </div>
        
        <form class="text-left">
            <div class="form">
                <div class="field-wrapper">
                    <div id="email-field" class="input-wrapper">
                        <label for="email">Email</label>
                        <input id="email" name="email" type="text" class="form-control" placeholder="Enter your email">
                    </div>

                    <div id="password-field" class="input-wrapper">
                        <div class="password-label-wrapper">
                            <label for="password">Password</label>
                            <a href="">Forgot Password?</a>
                        </div>
                        <input id="password" name="password" type="password" class="form-control" placeholder="Create a password">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M7.16196 3.89488C7.4329 3.85482 7.7124 3.83333 8.00028 3.83333C11.4036 3.83333 13.6369 6.83656 14.3871 8.02455C14.4779 8.16833 14.5233 8.24023 14.5488 8.35112C14.5678 8.43439 14.5678 8.56578 14.5487 8.64905C14.5233 8.75993 14.4776 8.8323 14.3861 8.97705C14.1862 9.29343 13.8814 9.73807 13.4777 10.2203M4.48288 4.97669C3.0415 5.95447 2.06297 7.31292 1.61407 8.02352C1.52286 8.16791 1.47725 8.24011 1.45183 8.35099C1.43273 8.43426 1.43272 8.56563 1.45181 8.64891C1.47722 8.75979 1.52262 8.83168 1.61342 8.97545C2.36369 10.1634 4.59694 13.1667 8.00028 13.1667C9.37255 13.1667 10.5546 12.6784 11.5259 12.0177M2.00028 2.5L14.0003 14.5M6.58606 7.08579C6.22413 7.44772 6.00028 7.94772 6.00028 8.5C6.00028 9.60457 6.89571 10.5 8.00028 10.5C8.55256 10.5 9.05256 10.2761 9.41449 9.91421" stroke="#757575" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                </div>

                <div class="button-wrapper">
                    <button type="submit" class="btn btn-primary" value="">REGISTER</button>
                    <p class="signup-link">Already have an acount? <a href="">LOGIN</a></p>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
.authentication-box {
    margin: auto;
    width: 390px;
    height: 480px;
}
.authentication-box .authentication-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}
.authentication-box .authentication-header svg {
    display: flex;
    align-items: flex-start;
}
.authentication-box .authentication-header h1 {
    width: 342px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.024px;
    color: #000;
}
.authentication-box form {
    display: flex;
    width: 390px;
    padding: 0px 24px;
    margin-top: 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;
}
.authentication-box form .field-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    align-self: stretch;
}
.authentication-box form .input-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    align-self: stretch;
}
.authentication-box form .input-wrapper label {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.08px;
    color: #000;
}
.authentication-box form .input-wrapper input {
    display: flex;
    width: 314px;
    height: 17px;
    padding: 10px 14px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid #ededed;
    background: #fff;
}
.authentication-box form #password-field .password-label-wrapper {
    display: flex;
}
.authentication-box form #password-field .password-label-wrapper a {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.048px;
    margin-top: 3.5px;
    margin-left: 4px;
}
.authentication-box form #password-field svg {
    position: absolute;
    top: 40px;
    left: 300px;
    color: #cbcbcb;
}
.authentication-box form .button-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
    gap: 12px;
    align-self: stretch;
}
.authentication-box form .button-wrapper button {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 12px;
    background: #5e67ff;
}
.authentication-box form .button-wrapper p {
    display: flex;
    padding: 8px 0;
    margin-top: 12px;
    justify-content: center;
    align-items: center;
    gap: 18px;
    align-self: stretch;
    text-align: center;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.035px;
}
.authentication-box form .button-wrapper p a {
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.175px;
    text-transform: uppercase;
}
</style>