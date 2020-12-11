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
         * Method commit completed todo.
         */
        remove() {
            this.$store.commit('removeCompletedTodo');
        }
    }
}
</script>

<style scoped>

</style>