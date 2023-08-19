<template>
    <div class="product">
        <div
            class="product__image"
            :style="{backgroundImage: `url(src/server/images/${product.images[0]})`}"
        />
        <UiIcon
            ref="iconRef"
            icon="iconOpen" class="product__icon"
            @click="modalWindowOpen(product.id)"
        />
        <div class="product__title" :title="product.title"> {{ product.title }}</div>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import UiIcon from '@/components/UiIcon.vue';

export default defineComponent({
    name: 'UiProduct',
    components: {UiIcon},
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    methods: {
        modalWindowOpen(idProduct) {
            const coordinates = {
                top: this.$refs.iconRef.$el.offsetTop,
                left: this.$refs.iconRef.$el.offsetLeft
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
