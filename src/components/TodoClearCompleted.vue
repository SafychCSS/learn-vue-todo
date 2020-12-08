<template>
    <button type="button" :disabled="isDisabled" class="btn btn-info" @click="remove">Clear completed</button>
</template>

<script>
import { bus } from '../main';

export default {
    name: 'TodoClearCompleted',
    props: {
        isDisabled: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        remove() {
            bus.$emit('removeCompleted')
        }
    }
}
</script>

<style scoped>

</style>