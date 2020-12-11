const getters = {
    /**
     * Getter for the filtered todos.
     *
     * @param {Object} state The current state.
     * @return {Array} The array of filtered todos.
     */
    filteredTodos(state) {
        if (state.filter === 'all')
            return state.todos;
        else if (state.filter === 'active')
            return state.todos.filter(todo => !todo.completed);
        else if (state.filter === 'completed')
            return state.todos.filter(todo => todo.completed);
    },

    /**
     * Getter for count all active todos.
     *
     * @param {Object} state The current state.
     * @return {number} The number of active todos.
     */
    countTodoActive(state) {
        return state.todos.filter(i => !i.completed).length;
    },

    /**
     * Getter checks the presence of completed todos.
     *
     * @param {Object} state The current state.
     * @param getters The countTodoActive getter.
     * @return {Boolean}
     */
    hasTodoCompleted(state, getters) {
        return getters.countTodoActive === state.todos.length;
    },

    /**
     * Getter checks the presence of active todos.
     *
     * @param {Object} state The current state.
     * @param getters The countTodoActive getter.
     * @return {Boolean}
     */
    hasActiveTodo(state, getters) {
        return getters.countTodoActive !== 0 || state.todos.length === 0;
    }
}

export default getters;