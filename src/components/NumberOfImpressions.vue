<template>
    <div class="number-of-impressions">
        <div class="number-of-impressions__title">
            Отобразить товары:
        </div>
        <div
                class="number-of-impressions__number"
                :class="{'number-of-impressions__number_active': number === localNumberShow}"
                v-for="number in numberList"
                :key="number"
                @click="localNumberShow = number"
        >
            {{ number }}
        </div>
    </div>
</template>
<script setup lang="ts">
import {ref, watch} from "vue";

const emits = defineEmits<{
    'update:numberShow': [n: number]
}>()

const props = defineProps<{
    numberList: number[]
    numberShow: number
}>()

const localNumberShow = ref(props.numberShow)

watch(localNumberShow, (value: number) => {
    emits('update:numberShow', value)
},{ immediate: true })

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