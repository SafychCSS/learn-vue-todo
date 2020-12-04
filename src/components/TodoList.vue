<template>
    <div class="row justify-content-center">
        <div class="col-md-7">
            <div class="card todo-list">
                <h4 class="card-header bg-info text-white text-center">Todos</h4>
                <div class="card-body">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <div class="input-group-text todo-list__check-all">
                                <div class="checkbox">
                                    <input type="checkbox" id="checkall" class="visibility-hidden checkbox__input">
                                    <label for="checkall" class="checkbox__label"></label>
                                </div>
                            </div>
                        </div>
                        <input type="text" v-model="newTodo" class="form-control form-control-lg" placeholder="What needs to be done?">
                        <button type="button" class="btn btn-success todo-list__add">Add</button>
                    </div>
                    <hr>
                    <div class="list-group">
                        <div class="todo-list__item list-group-item list-group-item-action d-flex align-items-center shadow-sm">
                            <div class="checkbox flex-grow-1">
                                <input type="checkbox" id="check" class="visibility-hidden checkbox__input">
                                <label for="check" class="checkbox__label flex-grow-1">
                                    <span class="checkbox__text">Cras justo odio</span>
                                </label>
                            </div>
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
            newTodo: ''
        }
    }

}
</script>

<style lang="scss">

</style>