<template>
    <div class="input-group-prepend">
        <label class="checkbox checkbox--check-all flex-grow-1 input-group-text">
            <input type="checkbox" class="visibility-hidden checkbox__input" @change="checkAllTodos"
                   :checked="!hasActiveTodo">
            <span class="checkbox__text">&nbsp;</span>
        </label>
    </div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
    name: 'TodoCheckAll',
    methods: {
        /**
         * Method dispatch checkAllTodos action.
         */
        checkAllTodos() {
            this.$store.dispatch('checkAllTodos')
        },
    },
    computed: {
        ...mapGetters([
            'hasActiveTodo'
        ])
    }
}
</script>

<style scoped>

</style>