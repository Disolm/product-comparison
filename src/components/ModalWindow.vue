<template>
    <UiTransitionFade>
        <div class="modal-window" v-if="isShowWindow">
            <div class="modal-window__content">
                <div class="modal-window__wrapper">
                    <UiInput v-model="value"/>
                    <div class="modal-window__list">
                        <UiProductLittle
                            class="modal-window__product"
                            v-for="product in phones"
                            :key="product.id"
                            :product="product"
                        />
                    </div>
                </div>
            </div>
            <div
                class="modal-window__overlay"
                :class="{'modal-window__overlay_active': isShowWindow}"
                @click="modalClose"
            />
        </div>
    </UiTransitionFade>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import UiTransitionFade from '@/components/Transition.vue';
import UiInput from '@/components/UiInput.vue';
import UiProductLittle from '@/components/UiProductLittle.vue';

export default defineComponent({
    name: 'ModalWindow',
    components: {UiProductLittle, UiInput, UiTransitionFade},
    data() {
        return {
            value: '',
        }
    },
    computed: {
        isShowWindow() {
            return this.$store.getters.statusOpenWindow
        },
        coordinatesTop() {
            return this.$store.getters.getCoordinates.top + 'px'
        },
        coordinatesLeft() {
            return this.$store.getters.getCoordinates.left  + 'px'
        },
        phones() {
            return this.$store.getters.getArrayOutOfSight
        }
    },
    methods: {
        modalClose() {
            this.$store.dispatch('closeWindow')
        },
        async getSmartphonesFromServer() {
            await this.$store.dispatch('getSmartphonesFromServer')
        }
    }
})
</script>
<style scoped lang="scss">
.modal-window {
  &__content {
    width: 421px;
    height: 336px;
    border-radius: 4px;
    border: 1px solid var(--pc-c-dark_white);
    background: var(--pc-c-white);
    position: absolute;
    top: v-bind(coordinatesTop);
    left: v-bind(coordinatesLeft);
    z-index: 10;
    box-shadow: 0 16px 32px 0 #2327331A;
    padding: 34px 18px 18px 18px;
  }

  &__wrapper {
    //height: calc(100% - 18px - 18px);
    height: 100%;
    padding-right: 21px;
    overflow: auto;

    &::-webkit-scrollbar {
      display: block;
      width: 5.13px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--pc-c-dark_white);
      border-radius: 8px;
    }
  }

  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
    z-index: -1;
    background: rgba(0, 0, 0, 0);
    transition: all .2s ease-out;
    cursor: pointer;

    &_active {
      opacity: 1;
      z-index: 5;
      background: rgba(0, 0, 0, 0.05);
      transition: background .2s ease-in;
    }
  }
}
</style>