const mutations = {
    /**
     * The mutation which will add new todo.
     *
     * @param {Object} state The current state.
     * @param {Object} todo The todo being added to the todos
     */
    addTodo(state, todo) {
        state.todos.push({
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
        });
    },

    /**
     * The mutation which will be editing todo.
     *
     * @param {Object} state The current state.
     * @param {Object} todo The editing todo.
     */
    editTodo(state, todo) {
        const index = state.todos.findIndex(item => item.id === todo.id);
        state.todos.splice(index, 1, todo);
    },

    /**
     * The mutation which will be remove a todo.
     *
     * @param {Object} state The current state
     * @param {Number} id Index by remove todo.
     */
    removeTodo(state, id) {
        const index = state.todos.findIndex(item => item.id === id);
        state.todos.splice(index, 1);
    },

    /**
     * The mutation which will be remove completed todo.
     *
     * @param {Object} state The current state.
     */
    removeCompletedTodo(state) {
        state.todos = state.todos.filter(todo => !todo.completed);
    },

    /**
     * The mutation which will be checked completed todo.
     *
     * @param {Object} state The current state.
     */
    checkAllTodos(state) {
        state.todos.forEach(todo => {
            todo.completed = event.target.checked;
        });
    },

    /**
     * The mutation which will be change filter.
     *
     * @param {Object} state The current state.
     * @param {String} filter Filter which must be set.
     */
    changeFilter(state, filter) {
        state.filter = filter;
    }
};

export default mutations;