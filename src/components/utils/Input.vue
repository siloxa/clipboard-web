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
    <input :type="type" class="form-control" :placeholder="placeholder">
</template>
