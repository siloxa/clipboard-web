<template>
    <div class="row">
        <div class="col-12 col-sm-8 col-md-6 mx-auto">
            <div class="form-box m-auto">
                <slot name="header"></slot>
                <slot></slot>
                <div class="form-button">
                    <slot name="button"></slot>
                </div>
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.row{
    margin-top: 96px;
}
.form-box{
        width: 314px;
        height: 509px;
    }
    .form-button{
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: stretch;
        margin-bottom: 12px;
    }
</style>