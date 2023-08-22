<template>
    <div
        class="input"
    >
        <input
            ref="input"
            class="input__input"
            :value="modelValue"
            v-bind="$attrs"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value )"
            placeholder="Писк"
        />
    </div>
</template>

<script lang="ts">
export default {

    name: 'UiInput',
    inheritAttrs: false,
    props: {
        modelValue: {
            type: String,
            required: false,
        },
    },
    emits: ['update:modelValue'],
    methods: {
        focus() {
            (this.$refs.input as HTMLInputElement).focus();
        },
    },
    mounted() {
        this.focus()
    }
};
</script>

<style scoped lang="scss">

.input {
    &__input {
        height: 47px;
        width: 100%;
        background: var(--pc-c-white);
        border: 1px solid var(--pc-c-light);
        @include text-h4;
        line-height: 28.13px;
        color: var(--pc-c-darck);
        padding-left: 10px;
        &::placeholder{
            color: var(--pc-c-placeholder);
        }
    }
}

</style>
