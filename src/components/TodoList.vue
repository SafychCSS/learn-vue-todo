<template>
    <div class="row justify-content-center">
        <div class="col-lg-7 col-md-10">
            <div class="card todo-list">
                <h4 class="card-header bg-info text-white text-center">Todos</h4>
                <div class="card-body">
                    <div class="input-group mb-3">
                        <todo-check-all />
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="What needs to be done?"
                            v-model="newTodo"
                            @keyup.enter="addNewTodo"
                        >
                        <button type="button" class="btn btn-success todo-list__add" @click="addNewTodo">Add</button>
                    </div>
                    <hr>
                    <transition-group
                        class="list-group todo-list__group"
                        name="fade"
                        enter-active-class="animate__animated  animate__fadeInUp"
                        leave-active-class="animate__animated  animate__fadeOutDown"
                    >
                        <todo-item
                            v-for="todo in filteredTodos"
                            :key="todo.id"
                            :todo="todo"
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
import TodoItem from '@/components/TodoItem';
import TodoItemsLeft from './TodoItemsLeft';
import TodoCheckAll from './TodoCheckAll';
import TodoFilters from './TodoFilters';
import TodoClearCompleted from './TodoClearCompleted';

import { mapGetters, mapActions } from 'vuex';

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
            newTodo: '',
        }
    },
    methods: {
        /**
         * Method which adding new todo in todos
         */
        addNewTodo() {
            if (!this.newTodo.trim())
                return;

            this.addTodo({
                title: this.newTodo,
                completed: false,
            });

            /* without function mapAction
            this.$store.dispatch('addTodo', {
                id: this.idForNewTodo,
                title: this.newTodo,
                completed: false,
            })*/

            this.newTodo = '';
        },

        ...mapActions([
            'addTodo',
            'retrieveTodos'
        ])
    },

    computed: {
        ...mapGetters([
            'filteredTodos',
            'countTodoActive',
            'hasTodoCompleted',
            'hasActiveTodo'
        ]),
    },
  created() {
      this.retrieveTodos();
  }
}
</script>

<style lang="scss">

</style>