<template>
    <div class="row justify-content-center">
        <div class="col-lg-7 col-md-10">
            <div class="card todo-list">
                <h4 class="card-header bg-info text-white text-center">Todos</h4>
                <div class="card-body">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="checkbox checkbox--check-all flex-grow-1 input-group-text">
                                <input type="checkbox" class="visibility-hidden checkbox__input" @change="checkAllTodos" :checked="!hasActiveTodo">
                                <span class="checkbox__text">&nbsp;</span>
                            </label>
                        </div>
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
                            @doneEdit="doneEdit"
                            @removeTodo="removeTodo(index)"
                        />
                    </transition-group>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-between">
                        <span>{{ countTodoActive }} items left</span>
                        <div>
                            <select id="inputState" class="form-control" v-model="filter">
                                <option :value="filter" v-for="(filter, index) in filtersOption" :key="filter + index">{{ filter | firstLetterBig }}</option>
                            </select>
                        </div>
                        <button type="button" :disabled="hasTodoCompleted" class="btn btn-info" @click="removeCompleted">Clear completed</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { firstLetterUpperCase } from "@/vendors/utils";
import TodoItem from "@/components/TodoItem";

export default {
    name: 'todo-list',
    components: {
        TodoItem
    },
    data() {
        return {
            newTodo: '',
            filter: 'all',
            todos: [
                {
                    id: 1,
                    title: 'Learn vue',
                    completed: false,
                    prevValue: ''
                },
                {
                    id: 2,
                    title: 'Learn Laravel',
                    completed: false,
                    prevValue: ''
                },
                {
                    id: 3,
                    title: 'Learn SSR',
                    completed: false,
                    prevValue: ''
                }
            ],
            filtersOption: ['all', 'active', 'completed']
        }
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
                prevValue: ''
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
        checkAllTodos(event) {
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

    filters: {
        /**
         * Filter which set first letter uppercase
         *
         * @param {String} word Word in which the first letter must be capitalized
         * @returns {String}
         */
        firstLetterBig(word) {
            return firstLetterUpperCase(word);
        }
    }

}
</script>

<style lang="scss">

</style>