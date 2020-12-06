<template>
    <div class="todo-list__item list-group-item list-group-item-action d-flex align-items-center shadow-sm">
        <label class="checkbox flex-grow-1">
            <input type="checkbox" :checked="checkAll" @change="editTodo" v-model="completed" class="visibility-hidden checkbox__input">
            <span class="checkbox__text" :class="{'checkbox__text--completed': completed}">
                {{ title }}
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
        },
        checkAll: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            id: this.todo.id,
            title: this.todo.title,
            completed: this.todo.completed,
            prevValue: this.todo.prevValue
        }
    },

    watch: {
        /**
         * Watch checked todos
         */
        checkAll() {
            if (this.checkAll)
                this.completed = true;
            else
                this.completed = this.todo.completed;
        }
    },
    methods: {
        /**
         * Method emit removeTodo event to TodoList
         *
         * @param {Number} idx Idx which must be deleted
         */
        removeTodo(idx) {
            this.$emit('removeTodo', idx);
        },

        /**
         * Method emit doneEdit event, send editing todo, index
         */
        editTodo() {
            this.$emit('doneEdit', {
                index: this.index,
                todo: {
                    id: this.id,
                    title: this.title,
                    completed: this.completed,
                    prevValue: this.prevValue
                }
            })
        }
    }
}
</script>