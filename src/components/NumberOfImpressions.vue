<template>
    <div class="number-of-impressions">
        <div class="number-of-impressions__title">
            Отобразить товары:
        </div>
        <div
                class="number-of-impressions__number"
                :class="{'number-of-impressions__number_active': number === localNumberShow}"
                v-for="number in numberList"
                @click="localNumberShow = number"
        >
            {{ number }}
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: 'NumberOfImpressions',
    emits: ['update:numberShow'],

    props: {
        numberList: {
            type: Array,
            required: true,
        },
        numberShow: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            localNumberShow: this.numberShow
        }
    },
    watch: {
        localNumberShow: {
            immediate: true,
            handler(newValue) {
                this.$emit('update:numberShow', newValue)
            },
        }
    },
})

// const props = defineProps({
//     numberList: {
//         type: Array,
//         required: true,
//     },
//     numberShow: {
//         type: Number,
//         required: true,
//     },
// })
// const emits = defineEmits(['update:modelValue'])
// const numberShow = computed({
//     get() {
//         return numberShow
//     },
//     set(num) {
//         this.$emit('update:numberShow', num)
//     }
// })

</script>
<style scoped lang="scss">
.number-of-impressions {
  color: var(--pc-c-blue);
  @include text-h5-easy;
  @include text-letter-002;
  line-height: 60px;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;

  &__title {
    padding-right: 0.2em;
  }

  &__number {
    padding: 0 0.2em;
    cursor: pointer;

    &_active {
      text-decoration: underline;
      text-underline-offset: 0.4em;
    }
  }
}
</style>