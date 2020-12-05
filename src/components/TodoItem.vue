<template>
    <div class="todo-list__item list-group-item list-group-item-action d-flex align-items-center shadow-sm">
        <label class="checkbox flex-grow-1">
            <input type="checkbox" @change="isChecked" v-model="todo.completed" class="visibility-hidden checkbox__input">
            <span class="checkbox__text" :class="{'checkbox__text--completed': todo.completed}">
                {{ todo.title }}
            </span>
        </label>
        <button @click="removeTodo(index)" type="button" class="todo-list__item-remove close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'todo-item',
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    methods: {
        removeTodo(index) {
            this.$emit('removeTodo', index);
        },
        isChecked() {
            this.$emit('isChecked');
        }
    }
}
</script>