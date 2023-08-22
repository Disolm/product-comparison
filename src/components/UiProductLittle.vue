<template>
    <div class="product-little">
        <UiIcon
                ref="iconRef"
                icon="iconSwap" class="product-little__icon"
                @click="modalWindowOpen(product.id)"
        />
        <div
                class="product-little__image"
                :style="{backgroundImage: `url(src/server/images/${product.images[0]})`}"
        />
        <div class="product-little__title" :title="product.title"> {{ product.title }}</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import UiIcon from '@/components/UiIcon.vue';
import type Product from "@/models/Product";

export default defineComponent({
    name: 'UiProductLittle',
    components: {UiIcon},
    props: {
        product: {
            type: Object  as () => Product,
            required: true,
        }
    },
    methods: {
        modalWindowOpen(idSwapTwo: number): void {
            const idSwapOne: number = this.$store.getters.getCoordinates.idClick
            this.$store.commit('swapSmartphones', [idSwapOne, idSwapTwo])
            this.$store.dispatch('closeWindow')
        }
    }

});
</script>

<style scoped lang="scss">
.product-little {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 30px 0;
  justify-content: flex-start;
  align-items: center;

  &__image {
    height: 50px;
    width: 40px;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: top;
      margin: 0 12px;
  }

  &__title {
      @include text-h5-easy;
      line-height: 40px;
      color: var(--pc-c-blac);
  }
}
</style>
