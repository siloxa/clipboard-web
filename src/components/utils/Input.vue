<script>
    export default {
        props: {
            label: String,
            type: String,
            placeholder: String
        }
    }
</script>

<template>
    <label class="form-label">{{label}}</label>
    <input class="form-control" :type="type" :placeholder="placeholder">
</template>

<style scoped>
input{
    border: 1px solid #EDEDED !important;
    border-radius: 8px !important;
}
input::placeholder{
    color: #CBCBCB;
}
</style>