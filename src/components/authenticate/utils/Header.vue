<script setup>
    import UserIcon from '../icons/UserIcon.vue'
    import KeyIcon from '../icons/KeyIcon.vue'

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
        <UserIcon v-if="icon == 'user'" class="icon" />
        <KeyIcon v-if="icon == 'key'" class="icon" />
    </div>
    <p class="text-center fw-bold fs-5">{{title}}</p>
</template>

<style scoped>
    div{
        display: flex;
        height: 80px;
    }
    div .icon{
        margin: auto;
    }
    p {
        margin-top: 24px;
    }
</style>