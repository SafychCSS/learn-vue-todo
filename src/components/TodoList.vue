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
                        <input type="text" class="form-control form-control-lg" placeholder="What needs to be done?">
                    </div>
                    <hr>
                    <div class="list-group">
                        <div class="todo-list__item list-group-item list-group-item-action d-flex align-items-center">
                            <div class="checkbox flex-grow-1">
                                <input type="checkbox" id="check" class="visibility-hidden checkbox__input">
                                <label for="check" class="checkbox__label flex-grow-1">
                                    <span class="checkbox__text">Cras justo odio</span>
                                </label>
                            </div>
                            <button type="button" class="todo-list__item-close close" aria-label="Close">
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

}
</script>

<style lang="scss">
    .visibility-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        border: 0;
        clip: rect(0 0 0 0);
    }

    .todo-list {
        .list-group-item {
            padding-left: .75rem;
            padding-right: .75rem;
        }
        &__title {
            margin-left: 10px;
        }
        &__item {
            .close:not(:disabled):not(.disabled) {
                font-size: 30px;
                &:hover {
                    color: var(--danger);
                    opacity: 1;
                }
                &:focus {
                    outline: 0;
                }
            }
        }

    }

    .checkbox {
        position: relative;
        display: flex;
        min-width: 20px;
        min-height: 20px;
        font-size: 20px;
        line-height: 1;
        &__label {
            margin: 0;
            cursor: pointer;

            &::before {
                position: absolute;
                top: 0;
                left: 0;
                content: '';
                width: 20px;
                height: 20px;
                border-radius: 3px;
                border: 1px solid var(--info);
            }
        }

        &__input:checked + label {
            &::after {
                position: absolute;
                top: 3px;
                left: 7px;
                content: '';
                display: inline-block;
                width: 7px;
                height: 10px;
                border: solid var(--gray-dark);
                border-width: 0 2px 2px 0;
                transform: rotate( 45deg);
            }
        }

        &__text {
            padding-left: 30px;
        }
    }

</style>