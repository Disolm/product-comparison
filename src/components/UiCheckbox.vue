<template>
    <label class="checkbox">
        <input
                v-model="checkValue"
                v-bind="$attrs"
                type="checkbox"
                class="checkbox__input"
        />
        <span class="checkbox__box"></span>
        <slot/>
    </label>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";

export default defineComponent({
    name: 'UiCheckbox',
    inheritAttrs: false,
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: Boolean,
            required: false
        }
    },
    setup( props, { emit } ) {
        const checkValue = computed({
                get: () => props.modelValue,
                set: value => emit('update:modelValue', value),
        })
        return {
            checkValue,
        };
    },
});
</script>

<style scoped lang="scss">
.checkbox {
    cursor: pointer;
    @include text-h5-easy;
    @include text-letter-002;
    color: var(--pc-c-blue);
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;

    &__input {
        position: absolute;
        z-index: -1;
        opacity: 0;
        padding: 0;
        &:checked ~ .checkbox__box:after {
            display: block;
        }
    }
    &__box {
        width: 24px;
        height: 24px;
        border-radius: 4px;
        margin-right: 14px;
        top: 4px;
        left: 4px;
        border: 2px solid #C1C1C2;
        background: rgb(var(--pc-c-white));
        &:after {
            content: '';
            position: relative;
            display: none;
            top: 80%;
            left: 80%;
            width: 24px;
            height: 24px;
            background: url('@/assets/icons/icon-check.svg') no-repeat;
            border: none;
            transform: translate(-50%, -50%);
        }
    }
}
</style>
