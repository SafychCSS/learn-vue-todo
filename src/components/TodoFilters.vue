<template>
    <div>
        <select id="inputState" @change="sendFilter" class="form-control" v-model="filter">
            <option :value="filter" v-for="(filter, index) in filtersOption" :key="filter + index">{{ filter | firstLetterBig }}</option>
        </select>
    </div>
</template>

<script>
import { firstLetterUpperCase } from '../vendors/utils';

export default {
    name: 'TodoFilters',
    data() {
        return {
            filter: 'all',
            filtersOption: ['all', 'active', 'completed']
        }
    },
    methods: {
        /**
         * Method which will be commit filter
         */
        sendFilter() {
            this.$store.commit('changeFilter', this.filter);
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

<style scoped>

</style>