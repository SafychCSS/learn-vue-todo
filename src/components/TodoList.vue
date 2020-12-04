<template>
    <div class="row justify-content-center">
        <div class="col-md-7">
            <div class="card todo-list">
                <h4 class="card-header bg-info text-white text-center">Todos</h4>
                <div class="card-body">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="checkbox checkbox--check-all flex-grow-1 input-group-text">
                                <input type="checkbox" class="visibility-hidden checkbox__input">
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
                    <div class="list-group">
                        <div v-for="todo in todos" :key="todo.id"
                            class="todo-list__item list-group-item list-group-item-action d-flex align-items-center shadow-sm">
                            <label class="checkbox flex-grow-1">
                                <input type="checkbox" class="visibility-hidden checkbox__input">
                                <span class="checkbox__text">{{ todo.title }}</span>
                            </label>
                            <button type="button" class="todo-list__item-remove close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-footer">footer</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'todo-list',
    data() {
        return {
            newTodo: '',
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
                }
            ]
        }
    },
    methods: {
        /**
         * Method which adding new todo in todos
         */
        addTodo() {
            this.todos.push({
                id: this.todos.length + 1,
                title: this.newTodo,
                completed: false,
                prevValue: ''
            });
            this.newTodo = '';
        }
    }
}
</script>

<style lang="scss">

</style>