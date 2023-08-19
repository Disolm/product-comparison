<template>
    <div
        class="input"
    >
        <input
            ref="input"
            class="input__input"
            :value="modelValue"
            v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.value)"
            placeholder="Писк"
        />
    </div>
</template>

<script>
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
            this.$refs.input.focus();
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
        //margin: 34px 18px 18px 18px;
        height: 47px;
        width: 100%;
        //width: calc(100% - 18px - 18px);
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
