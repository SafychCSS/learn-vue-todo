<template>
    <div class="todo-list__item list-group-item list-group-item-action d-flex align-items-center shadow-sm">
        <label class="checkbox flex-grow-1">
            <input type="checkbox" :checked="checkAll" @change="editTodoItem" v-model="completed" class="visibility-hidden checkbox__input">
            <span class="checkbox__text" :class="{'checkbox__text--completed': completed}">
                {{ title }}
            </span>
        </label>
        <button @click="isEditing" v-if="!completed" class="icon-edit todo-list__icon-edit">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M 19.171875 2 C 18.448125 2 17.724375 2.275625 17.171875 2.828125 L 16 4 L 20 8 L 21.171875 6.828125 C 22.275875 5.724125 22.275875 3.933125 21.171875 2.828125 C 20.619375 2.275625 19.895625 2 19.171875 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z"/></svg>
        </button>
        <button @click="removeItemTodo(id)" type="button" class="todo-list__item-remove close">
            <span aria-hidden="true">&times;</span>
        </button>
        <div class="form-group todo-list__edit" v-if="editing">
            <input type="text" class="form-control" v-focus @keyup.enter="editTodo" @blur="editTodoItem" @keyup.esc="cancelEdit" v-model="title">
            <button class="form-group__ok" @click="editTodoItem" :disabled="title.length === 0">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="26px" height="26px"><path d="M 22.566406 4.730469 L 20.773438 3.511719 C 20.277344 3.175781 19.597656 3.304688 19.265625 3.796875 L 10.476563 16.757813 L 6.4375 12.71875 C 6.015625 12.296875 5.328125 12.296875 4.90625 12.71875 L 3.371094 14.253906 C 2.949219 14.675781 2.949219 15.363281 3.371094 15.789063 L 9.582031 22 C 9.929688 22.347656 10.476563 22.613281 10.96875 22.613281 C 11.460938 22.613281 11.957031 22.304688 12.277344 21.839844 L 22.855469 6.234375 C 23.191406 5.742188 23.0625 5.066406 22.566406 4.730469 Z"/></svg>
            </button>
        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    name: 'todo-item',
    props: {
        todo: {
            type: Object,
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
            editing: false,
            prevValue: ''
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
         * Method dispatch action remove todo.
         *
         * @param {Number} id Id which must be deleted
         */
        removeItemTodo(id) {
            this.removeTodo(id);
        },

        /**
         * Method dispatch action editTodo.
         */
        editTodoItem() {
            if (!this.title.trim()) {
                this.title = this.prevValue;
            }

            this.editTodo({
                id: this.id,
                title: this.title,
                completed: this.completed,
            });
            /*this.$store.commit('editTodo', {
                id: this.id,
                title: this.title,
                completed: this.completed,
            });*/
            this.editing = false;
        },

        isEditing() {
            this.editing = true;
            this.prevValue = this.title;
        },

        cancelEdit() {
            this.title = this.prevValue;
            this.editing = false;
        },

        ...mapActions([
            'removeTodo',
            'editTodo'
        ])
    },
    directives: {
        focus: {
            inserted: function(el) {
                el.focus()
            }
        }
    },
}
</script>