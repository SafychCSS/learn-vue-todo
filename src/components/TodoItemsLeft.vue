<template>
    <span>{{ count }} items left</span>
</template>

<script>
export default {
    name: 'TodoItemsLeft',
    props: {
        count: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>

</style>