import axios from 'axios';
axios.defaults.baseURL = 'http://todo.safych.com/api';

const actions = {
    /**
     * Action which will be commit addTodo mutation.
     *
     * @param {Object} context The context of the store.
     * @param {Object} todo The todo which be added.
     */
    addTodo(context, todo) {
        axios.post('/todos', {
            title: todo.title,
            completed: todo.completed
        })
            .then(response => {
                context.commit('addTodo', response.data);
            })
            .catch(e => {
                console.log(e);
            })
    },

    /**
     * Action which will be commit editTodo mutation.
     *
     * @param {Function} commit Method from context object.
     * @param {Object} todo The todo which be edited.
     */
    editTodo({ commit }, todo) {
        axios.patch('/todos/' + todo.id, {
            title: todo.title,
            completed: todo.completed
        })
            .then(response => {
                commit('editTodo', response.data);
            })
            .catch(e => {
                console.log(e);
            })
    },

    /**
     * Action which will be commit removeTodo mutation.
     *
     * @param {Function} commit Method from context object.
     * @param {Number} id Id todo.
     */
    removeTodo({ commit }, id) {
        axios.delete('/todos/' + id)
            .then(response => {
                commit('removeTodo', id);
            })
            .catch(e => {
                console.log(e);
            })
    },

    /**
     * Action which will be commit removeCompletedTodo mutation.
     *
     * @param {Function} commit Method from context object.
     */
    removeCompletedTodo({ commit, state }) {
        const completed = state.todos
            .filter(todo => todo.completed)
            .map(todo => todo.id)

        axios.delete('/todosDeleteCompleted', {
            data: {
                todos: completed
            }
        })
            .then(response => {
                commit('removeCompletedTodo');
            })
            .catch(e => {
                console.log(e);
            })

    },

    /**
     * Action which will be commit checkAllTodos mutation.
     *
     * @param {Function} commit Method from context object.
     */
    checkAllTodos({ commit }, check) {
        axios.patch('/todosCheckAll', {
            completed: check
        })
            .then(response => {
                commit('checkAllTodos', check);
            })
            .catch(e => {
                console.log(e);
            })
    },

    /**
     * Action which will be commit removeTodo mutation.
     *
     * @param {Function} commit Method from context object.
     * @param {String} filter Filter todo.
     */
    changeFilter({ commit }, filter) {
        commit('changeFilter', filter);
    },

    /**
     * Action to fetch the todos.
     *
     * @param {Object} context The context of the store.
     */
    retrieveTodos(context) {
        axios.get('/todos')
            .then(response => {
                context.commit('retrieveTodos', response.data);
            })
            .catch(e => {
                console.log(e);
            })
    }
};

export default actions;