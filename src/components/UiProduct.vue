<template>
    <div class="product">
        <div
                class="product__image"
                :style="{backgroundImage: `url(src/server/images/${product.images[0]})`}"
        />
        <UiIcon
                v-if="isShowIcon"
                ref="iconRef"
                icon="iconOpen"
                class="product__icon"
                @click="modalWindowOpen(product.id)"
        />
        <div class="product__title" :title="product.title"> {{ product.title }}</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import UiIcon from '@/components/UiIcon.vue';
import type Product from './../models/Product';

interface Coordinates {
    top: number
    left: number
    idClick: number
}
export default defineComponent({
    name: 'UiProduct',
    components: {UiIcon},
    props: {
        product: {
            type: Object as () => Product,
            required: true,
        },
        isShowIcon: {
            type: Boolean,
            return: false,
            default: true
        }
    },
    methods: {
        modalWindowOpen(idProductClick: number) {
            const coordinates: Coordinates = {
                top: (this.$refs.iconRef as InstanceType<typeof UiIcon>).$el.offsetTop,
                left: (this.$refs.iconRef as InstanceType<typeof UiIcon>).$el.offsetLeft,
                idClick: idProductClick,
            }
            this.$store.commit('saveCoordinates', coordinates)
            this.$store.dispatch('openWindow')
        }
    }

});
</script>

<style scoped lang="scss">
.product {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    max-width: 200px;
    flex: 1;
    margin: 0 8px;
    &__image {
        grid-area: 1 / 1 / 4 / 4;
        height: 120px;
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: top;
    }
    &__icon {
        grid-area: 3 / 4 / 4 / 5;
        cursor: pointer;
    }
    &__title {
        grid-area: 4 / 1 / 5 / 5;
        overflow: hidden;
        display: block;
        white-space: nowrap;
        margin: auto 0;
    }
}
</style>
