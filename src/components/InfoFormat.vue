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

<script lang="ts">

import UiIcon from '@/components/UiIcon.vue';

interface Unit {
    memory: string,
    screenRefreshRate: string,
    price: string,
    [key: string]: any
}

const unit: Unit = {
    memory: 'Гб',
    screenRefreshRate: 'Гц',
    price: '₽',
}
export default {
    name: 'InfoFormat',
    components: {UiIcon},

    props: {
        keyInfo: {
            type: [String, Number],
            required: true,
        },
        valueInfo: {
            type: [String, Number, Boolean],
            required: true,
        },
    },

    computed: {
        unitSrc(): string {
            return unit[this.keyInfo] ? unit[this.keyInfo] : '';
        },
        whichIcon(): string {
            return this.valueInfo ? 'iconTrue' : 'iconFalse'
        },
        thisIsBoolean(): boolean {
            return typeof this.valueInfo == 'boolean'
        },
        formattedText(): string | number | boolean {
            if (this.keyInfo === 'price' && typeof this.valueInfo === 'number') {
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
