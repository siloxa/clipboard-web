<script>
    export default {
        props: {
            text: String,
            color: {
                type: String,
                default: '#5E67FF'
            },
            borderRadius: {
                type: String,
                default: '12px'
            }
        },
        computed: {
            cssVars () {
                return {
                    '--color': this.color,
                    '--border-radius': this.borderRadius
                };
            }
        }
    }
</script>

<template>
    <button :style="cssVars">{{text}}</button>
</template>

<style scoped>
    button{
        border: none;
        border-radius: var(--border-radius);
        background: var(--color);
        width: 342px;
        height: 52px;
        color: aliceblue;
    }
</style>