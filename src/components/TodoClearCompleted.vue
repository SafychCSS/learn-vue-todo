<template>
    <button type="button" :disabled="isDisabled" class="btn btn-info" @click="remove">Clear completed</button>
</template>

<script>

export default {
    name: 'TodoClearCompleted',
    props: {
        isDisabled: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        /**
         * Method dispatch removeCompletedTodo.
         */
        remove() {
            this.$store.dispatch('removeCompletedTodo');
        }
    }
}
</script>

<style scoped>

</style>