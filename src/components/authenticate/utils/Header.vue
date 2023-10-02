<script>
    export default {
        props: {
            icon: String,
            title: String
        },
        data () {
            return {imageUrl: null}
        },
        mounted() {
            this.imageUrl = new URL(`/src/assets/auth_${this.icon}.svg`, import.meta.url).href
        }
    }
</script>

<template>
    <div class="position-relative pt-3">
        <img :src="imageUrl" />
    </div>
    <p class="text-center fw-bold fs-5">{{title}}</p>
</template>

<style scoped>
    div{
        width: 342px;
        height: 80px;
    }
</style>