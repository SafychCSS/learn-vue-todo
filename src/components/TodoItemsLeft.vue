<template>
    <span>{{ count }} items left</span>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'TodoItemsLeft',
    computed: {
        ...mapGetters({
            count: 'countTodoActive'
        })
    }
}
</script>

<style scoped>

</style>