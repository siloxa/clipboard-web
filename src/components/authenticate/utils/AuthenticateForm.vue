<template>
    <div class="row mt-5">
        <div class="col-12 col-sm-8 col-md-6 mx-auto">
            <div class="login-box m-auto">
                <slot name="header"></slot>
                <slot></slot>
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .login-box{
        width: 314px;
        height: 509px;
    }
</style>