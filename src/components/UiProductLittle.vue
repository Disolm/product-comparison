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

<script>
import {defineComponent} from "vue";
import UiIcon from '@/components/UiIcon.vue';

export default defineComponent({
    name: 'UiProductLittle',
    components: {UiIcon},
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    methods: {
        modalWindowOpen(idProduct) {

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

  &__icon {

  }

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
