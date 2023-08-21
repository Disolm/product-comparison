<template>
    <div class="catalog">
        <div class="catalog__head">
            <div class="catalog__paragraph">
                Смартфоны
            </div>
            <NumberOfImpressions
                v-if="numberList.length > 1"
                :number-list="numberList"
                v-model:number-show="numberShow"
            />
        </div>
        <div class="catalog__body">
            <div class="catalog__aside">
                <UiCheckbox v-model="checkedDifferences">
                    Показать различия
                </UiCheckbox>
            </div>
            <div class="catalog__products">
                <UiProduct
                    v-for="product in filteredProducts"
                    :product="product"
                    :key="product.id"
                    :is-show-icon="isShowIcon"
                />
            </div>
        </div>
        <div class="catalog__characteristics">
            <div class="catalog__aside">
                <div
                    class="catalog__description"
                    v-for="(value, key) in description"
                     :key="key"
                >
                    <UiTransitionGroupFade>
                        <div class="catalog__value catalog__value_disc">
                            {{ String(value).toUpperCase() }}
                        </div>
                    </UiTransitionGroupFade>

                </div>
            </div>
            <div class="catalog__sections">
                <div
                    class="catalog__section"
                    v-for="(product, idx) in filteredProducts"
                    :key="idx"
                >
                    <div
                        class="catalog__product-info"
                        v-for="(valueInfo, keyInfo) in filteredInfo(product)"
                        :key="keyInfo"
                    >
                        <UiTransitionGroupFade>
                            <InfoFormat
                                class="catalog__value catalog__value_info"
                                :valueInfo="valueInfo"
                                :keyInfo="keyInfo"
                            />
                        </UiTransitionGroupFade>
                    </div>
                </div>
            </div>
        </div>
        <ModalWindow/>
    </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import NumberOfImpressions from '@/components/NumberOfImpressions.vue';
import UiCheckbox from "@/components/UiCheckbox.vue";
import UiProduct from "@/components/UiProduct.vue";
import description from '@/server/api/description.json'
import {klona} from 'klona/json';
import InfoFormat from "@/components/InfoFormat.vue";
import UiTransitionGroupFade from "@/components/UiTransitionGroupFade.vue";
import ModalWindow from '@/components/ModalWindow.vue';

export default defineComponent({

    name: 'TheCatalog',
    components: {
        ModalWindow,
        UiTransitionGroupFade,
        InfoFormat,
        UiProduct,
        UiCheckbox,
        NumberOfImpressions,
    },
    data() {
        return {
            numberList: [],
            numberShow: 3,
            checkedDifferences: false,
            description: description,
        }
    },
    computed: {
        smartphones() {
            return this.$store.getters.getSmartphones
        },
        filteredProducts() {
            const products = klona(this.smartphones)
            const arrayOutOfSight = products.slice(this.numberShow)
            this.$store.commit('savaArrayOutOfSight', arrayOutOfSight)
            return products.slice(0, this.numberShow)
        },
        isShowIcon() {
            return this.smartphones.length !== this.filteredProducts.length
        }
    },
    created() {
        this.getSmartphonesFromServer()
    },
    methods: {
        createdNumberList() {
            const maxLength: number = 6
            const minLength: number = 2
            const arrayLength: number = this.smartphones.length > maxLength ? maxLength : this.smartphones.length
            const tempNumberList: number[] = [...new Array(arrayLength + 1).keys()]
            this.numberList = tempNumberList.splice(minLength)
        },
        async getSmartphonesFromServer() {
            await this.$store.dispatch('getSmartphonesFromServer')
            this.createdNumberList()
        },
        filteredInfo(product) {
            const filteredInfo = klona(product)
            const arrayKeyValue = Object.entries(filteredInfo).filter(item => {
                return Object.keys(this.description).includes(item[0])
            })
            return Object.fromEntries(arrayKeyValue)
        },
        excludeDifferences() {
            if (this.checkedDifferences) {
                const arrayDescription = Object.entries(this.description);

                const filtered = arrayDescription.filter(([key, value]) => {
                    return this.smartphones.some(item => {
                        return item[key] !== this.smartphones[0][key]
                    })
                })
                this.description = Object.fromEntries(filtered)
            } else {
                this.description = description
            }
        },
    },
    watch: {
        checkedDifferences() {
            this.excludeDifferences()
        },
        smartphones() {
            this.createdNumberList()
        },
    }
})
</script>
<style scoped lang="scss">
.catalog {
  margin: 61px 166px 91px 165px;

  &__paragraph {
    @include text-h1;
    @include text-letter-002;
    line-height: 60px;
    color: var(--pc-c-darck_grey)
  }

  &__head {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &__body {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-end;
    padding-bottom: 77px;
  }

  &__aside {
    width: 255px;
    flex-shrink: 0;
  }

  &__products {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
  }

  &__characteristics {
    background: var(--pc-c-super_light);
    margin: 0 -166px 0 -165px;
    padding: 0 166px 91px 165px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  &__description, &__product-info {
    border-top: 1px solid var(--pc-c-darck_light);

    &:last-child {
      border-bottom: 1px solid var(--pc-c-darck_light);
    }
  }

  &__value {
    height: 114px;
    @include text-h5;
    line-height: 21.09px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &_disc {
      color: var(--pc-c-light_grey);
    }

    &_info {
      color: var(--pc-c-darck);
      width: 100%;
      margin: 0 auto;
    }
  }

  &__sections {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
  }

  &__section {
    flex: 1;
  }
}
</style>