const actions = {
    /**
     * Action which will be commit addTodo mutation.
     *
     * @param {Object} context The context of the store.
     * @param {Object} todo The todo which be added.
     */
    addTodo(context, todo) {
        context.commit('addTodo', todo);
    },

    /**
     * Action which will be commit editTodo mutation.
     *
     * @param {Function} commit Method from context object.
     * @param {Object} todo The todo which be edited.
     */
    editTodo({ commit }, todo) {
        commit('editTodo', todo);
    },

    /**
     * Action which will be commit removeTodo mutation.
     *
     * @param {Function} commit Method from context object.
     * @param {Number} id Id todo.
     */
    removeTodo({ commit }, id) {
        commit('removeTodo', id);
    },

    /**
     * Action which will be commit removeCompletedTodo mutation.
     *
     * @param {Function} commit Method from context object.
     */
    removeCompletedTodo({ commit }) {
        commit('removeCompletedTodo');
    },

    /**
     * Action which will be commit checkAllTodos mutation.
     *
     * @param {Function} commit Method from context object.
     */
    checkAllTodos({ commit }) {
        commit('checkAllTodos');
    },

    /**
     * Action which will be commit removeTodo mutation.
     *
     * @param {Function} commit Method from context object.
     * @param {String} filter Filter todo.
     */
    changeFilter({ commit }, filter) {
        commit('changeFilter', filter);
    }
};

export default actions;