<template>
    <div class="row justify-content-center">
        <div class="col-lg-7 col-md-10">
            <div class="card todo-list">
                <h4 class="card-header bg-info text-white text-center">Todos</h4>
                <div class="card-body">
                    <div class="input-group mb-3">
                        <todo-check-all :isChecked="!hasActiveTodo" />
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="What needs to be done?"
                            v-model="newTodo"
                            @keyup.enter="addTodo"
                        >
                        <button type="button" class="btn btn-success todo-list__add" @click="addTodo">Add</button>
                    </div>
                    <hr>
                    <transition-group
                        class="list-group todo-list__group"
                        name="fade"
                        enter-active-class="animate__animated  animate__fadeInUp"
                        leave-active-class="animate__animated  animate__fadeOutDown"
                    >
                        <todo-item
                            v-for="(todo, index) in filteredTodos"
                            :key="todo.id"
                            :todo="todo"
                            :index="index"
                            :checkAll="!hasActiveTodo"
                        />
                    </transition-group>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-between">
                        <todo-items-left :count="countTodoActive" />
                        <todo-filters />
                        <todo-clear-completed :isDisabled="hasTodoCompleted" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { bus } from '../main';
import TodoItem from '@/components/TodoItem';
import TodoItemsLeft from './TodoItemsLeft';
import TodoCheckAll from './TodoCheckAll';
import TodoFilters from './TodoFilters';
import TodoClearCompleted from './TodoClearCompleted';

export default {
    name: 'todo-list',
    components: {
        TodoCheckAll,
        TodoItemsLeft,
        TodoItem,
        TodoFilters,
        TodoClearCompleted
    },
    data() {
        return {
            filter: 'all',
            newTodo: '',
            todos: [
                {
                    id: 1,
                    title: 'Learn vue',
                    completed: false,
                },
                {
                    id: 2,
                    title: 'Learn Laravel',
                    completed: false,
                },
                {
                    id: 3,
                    title: 'Learn SSR',
                    completed: false,
                }
            ],
        }
    },
    created() {
        bus.$on('removeTodo', index => this.removeTodo(index));
        bus.$on('doneEdit', data => this.doneEdit(data));
        bus.$on('checkAllTodos', checked => this.checkAllTodos(checked));
        bus.$on('getFilter', filter => this.filter = filter);
        bus.$on('removeCompleted', () => this.removeCompleted());
    },
    beforeDestroy() {
        bus.$off('removeTodo', index => this.removeTodo(index));
        bus.$off('doneEdit', data => this.doneEdit(data));
        bus.$off('checkAllTodos', checked => this.checkAllTodos(checked));
        bus.$off('getFilter', filter => this.filter = filter);
        bus.$off('removeCompleted', () => this.removeCompleted());
    },
    methods: {
        /**
         * Method which adding new todo in todos
         */
        addTodo() {
            if (!this.newTodo.trim())
                return;

            this.todos.push({
                id: this.todos.length + 1,
                title: this.newTodo,
                completed: false,
            });
            this.newTodo = '';
        },
        /**
         * Method which remove todo.
         *
         * @param {Number} index Index by which the task is being deleted.
         */
        removeTodo(index) {
            this.todos.splice(index, 1);
        },

        /**
         * Method which set checked all todo checkbox
         */
        checkAllTodos() {
            this.todos.forEach(todo => {
                todo.completed = event.target.checked;
            });
        },

        /**
         * Method edit todo
         *
         * @param {Object} data Data from TodoItem component
         */
        doneEdit(data) {
            this.todos.splice(data.index, 1, data.todo);
        },

        /**
         * Method remove completed todo
         */
        removeCompleted() {
            this.todos = this.todos.filter(todo => !todo.completed);
        },
    },

    computed: {
        /**
         * Count all active todo
         *
         * @return {number} count Count not completed todo
         */
        countTodoActive() {
            return this.todos.filter(i => !i.completed).length;
        },

        /**
         * Filter todos
         *
         * @return {Array} Filtered todos
         */
        filteredTodos() {
            if (this.filter === 'all')
                return this.todos;
            else if (this.filter === 'active')
                return this.todos.filter(todo => !todo.completed);
            else if (this.filter === 'completed')
                return this.todos.filter(todo => todo.completed);
        },

        /**
         * Checks completed todo
         *
         * @return {Boolean}
         */
        hasTodoCompleted() {
            return this.countTodoActive === this.todos.length;
        },

        /**
         * Check active todo
         *
         * @return {Boolean}
         */
        hasActiveTodo() {
            return this.countTodoActive !== 0;
        }
    },
}
</script>

<style lang="scss">

</style>