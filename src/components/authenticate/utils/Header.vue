<script setup>
    import UserIcon from '../icons/UserIcon.vue'

    defineProps({
        icon: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="pt-3">
        <UserIcon />
    </div>
    <p class="text-center fw-bold fs-5">{{title}}</p>
</template>

<style scoped>
    div{
        width: 342px;
        height: 80px;
    }
</style>