<template>
    <div class="info-format">
        <div
            class="info-format__icon"
            v-if="thisIsBoolean"
        >
            <UiIcon :icon="whichIcon"/>
        </div>
        <div
            v-else
            class="info-format__measurable"
        >
            {{ formattedText }}
            <div class="info-format__unit"> {{ unitSrc }}</div>
        </div>
    </div>
</template>

<script>

import UiIcon from '@/components/UiIcon.vue';

const unit = {
    memory: 'Гб',
    screenRefreshRate: 'Гц',
    price: '₽',
}
export default {
    name: 'InfoFormat',
    components: {UiIcon},

    props: {
        keyInfo: {
            type: String,
            required: true,
        },
        valueInfo: {
            type: [String, Number, Boolean],
            required: true,
        },
    },

    computed: {
        unitSrc() {
            return unit[this.keyInfo] ? unit[this.keyInfo] : '';
        },
        whichIcon() {
            return this.valueInfo ? 'iconTrue' : 'iconFalse'
        },
        thisIsBoolean() {
            return typeof this.valueInfo == 'boolean'
        },
        formattedText() {
            if (this.keyInfo === 'price') {
                return new Intl.NumberFormat("ru-RU").format(this.valueInfo)
            }
            return this.valueInfo
        },
    }
};
</script>

<style scoped lang="scss">
.info-format {

    &__measurable, &__icon {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    &__unit{
        margin-left: 0.5em;
    }

}
</style>
