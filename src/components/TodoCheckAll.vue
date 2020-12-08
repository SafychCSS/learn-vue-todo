<template>
    <div class="input-group-prepend">
        <label class="checkbox checkbox--check-all flex-grow-1 input-group-text">
            <input type="checkbox" class="visibility-hidden checkbox__input" @change="allChecked" :checked="isChecked">
            <span class="checkbox__text">&nbsp;</span>
        </label>
    </div>
</template>

<script>
import { bus } from '../main';

export default {
    name: 'TodoCheckAll',
    props: {
        isChecked: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        allChecked() {
            bus.$emit('checkAllTodos', this.isChecked);
        }
    }
}
</script>

<style scoped>

</style>